import React, { useState, useEffect } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { GoogleMap, LoadScript, Marker, DirectionsRenderer } from '@react-google-maps/api';

const TripDetails = () => {
    const [mapState, setMapState] = useState(1); // 1 for routing, 2 for real-time tracking
    const [fromCoords, setFromCoords] = useState({ lat: 12.9556074, lng: 80.1868681 }); // Keelkattalai, Chennai
    const [toCoords, setToCoords] = useState({ lat: 12.8438835, lng: 80.0597364 }); // Guduvancheri, Chennai
    const [directions, setDirections] = useState(null); // Route details
    const [loading, setLoading] = useState(true);
    const [timeLeft, setTimeLeft] = useState(null);

    // Hardcoded ride data from API response
    const rideData = {
        id: "66ed066bfffb12ce4080c193",
        date: "2024-10-07",
        drivingStyle: "fast",
        email: "user@hexaware.user",
        from: {
            coordinates: { lat: 12.9556074, lng: 80.1868681 },
            location: "Keelkattalai, Chennai, Tamil Nadu, India"
        },
        seats: "4",
        time: "18:30:00",
        to: {
            coordinates: { lat: 12.8438835, lng: 80.0597364 },
            location: "Guduvancheri, Tamil Nadu, India"
        },
        amountToPay: 36.48 // Amount to pay
    };

    const { from, to, amountToPay } = rideData;

    // Calculate time left for the ride
    useEffect(() => {
        const calculateTimeLeft = () => {
            const now = new Date();
            const rideStartTime = new Date(`${rideData.date}T${rideData.time}`);
            const difference = rideStartTime - now;
            const minutesLeft = Math.floor(difference / 60000);
            setTimeLeft(minutesLeft);
        };

        calculateTimeLeft();
        const intervalId = setInterval(calculateTimeLeft, 60000); // Update every minute

        return () => clearInterval(intervalId);
    }, [rideData.date, rideData.time]);

    useEffect(() => {
        if (mapState === 1 && fromCoords && toCoords && window.google) {
            const directionsService = new window.google.maps.DirectionsService();
            directionsService.route({
                origin: fromCoords,
                destination: toCoords,
                travelMode: window.google.maps.TravelMode.DRIVING,
            }, (result, status) => {
                if (status === 'OK') {
                    setDirections(result);
                }
            });
        }
    }, [mapState, fromCoords, toCoords]);

    const handleCancelRide = () => {
        console.log('Ride canceled');
        // Additional logic for ride cancellation can be implemented here
    };

    const renderMapContent = () => {
        if (mapState === 1 && directions) {
            return <DirectionsRenderer directions={directions} />;
        }
        return null;
    };

    return (
        <Box display="flex" height="100vh">
            {/* Left Section: Ride and User Details */}
            <Box flex={1} p={3} bgcolor="whitesmoke">
                <Typography variant="h5">Trip Details</Typography>
                <Typography variant="subtitle1">From: {from.location}</Typography>
                <Typography variant="subtitle1">To: {to.location}</Typography>
                <Typography variant="subtitle1">Date: {rideData.date}</Typography>
                <Typography variant="subtitle1">Time: {rideData.time}</Typography>
                <Typography variant="subtitle1">Driving Style: {rideData.drivingStyle}</Typography>
                <Typography variant="subtitle1">Seats Available: {rideData.seats}</Typography>
                <Typography variant="subtitle1">Contact: {rideData.email}</Typography>
                <Typography variant="h6">Amount to Pay: ₹{amountToPay}</Typography>

                <Box mt={2}>
                    {timeLeft > 30 ? (
                        <Button variant="contained" color="secondary" onClick={handleCancelRide}>
                            Cancel Ride
                        </Button>
                    ) : (
                        <Typography color="red">Ride cannot be canceled within 30 minutes of start time.</Typography>
                    )}
                </Box>
            </Box>

            {/* Right Section: Map */}
            <Box flex={2} p={3} position="relative">
                <LoadScript
                    googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
                    libraries={['places', 'geometry']}
                    onLoad={() => setLoading(false)}
                >
                    {loading ? (
                        <Typography>Loading Map...</Typography>
                    ) : (
                        <GoogleMap
                            mapContainerStyle={{ width: '100%', height: '100%' }}
                            center={fromCoords}
                            zoom={12}
                        >
                            {renderMapContent()}
                            <Marker position={fromCoords} label="From" />
                            <Marker position={toCoords} label="To" />
                        </GoogleMap>
                    )}
                </LoadScript>
            </Box>
        </Box>
    );
};

export default TripDetails;
