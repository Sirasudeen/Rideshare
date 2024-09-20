    import {useState} from 'react';
    import Header from './Layout/Header';
    import { useLocation, useNavigate } from 'react-router-dom';
    import { Box, Typography, Button, Divider} from '@mui/material';

    const RideDetailsPage = () => {
        const location = useLocation();
        const navigate = useNavigate();
        const { selectedRide } = location.state || {};
        const { amount } = location.state || {};
        const handleBookClick = () => {
            const user = {
                name: 'Sirasudeen', // Example user data
                email: 'Sirasudeenp@gmail.com',

            };
            localStorage.setItem('bookedRide', JSON.stringify(selectedRide));
            localStorage.setItem('user', JSON.stringify(user));
            localStorage.setItem('amount', JSON.stringify(amount));
            // Redirect to the trip details page with the ride and user details
            navigate('/trip-details', {
                state: {
                    bookedRide: selectedRide,
                    user: user,
                    amount: amount,
                    BookingConfirmed:true,

                }
            });
        };

        return (
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',  // Center horizontally
                        alignItems: 'center',       // Center vertically
                        height: '100vh',            // Full viewport height
                        backgroundColor: '#F5F5F5',
                    }}
                >
                {/* Consistent Header */}

                <Box sx={{ padding: 3, flex: 1 }}>
                    

                    {/* Conditionally Render Ride Details or Error Message */}
                        <Box
                        elevation={3}
                        sx={{
                            padding: 3,
                            background: "#ffffff",
                            textAlign: 'left',
                            display: 'flex',
                            flexDirection: 'column',
                            boxShadow: 2,
                            borderRadius: 3,
                            width: 'fit-content',
                            ml: '32%',
                            '& .Heading': {
                                marginBottom: 1.5,
                                fontSize: '2rem',
                                color: 'black',
                                fontWeight: '550',
                                fontFamily: 'Poppins',
                            },
                            '& .Primary': {
                                marginBottom: 1.5,
                                fontSize: '1.4rem',
                                color: 'black',
                                fontFamily: 'Lato',
                            },
                        }}
                    >
                                <Typography  className='Heading'>
                        Ride Details
                    </Typography>
                    <Divider sx={{ marginBottom: 2 }} />
                            <Typography variant="body1" className='Primary'>
                                <strong>Driver Name:</strong> {selectedRide?.email || 'N/A'}
                            </Typography>
                            <Typography variant="body1" className='Primary'>
                                <strong>Seats Available:</strong> {selectedRide?.seats || 'N/A'}
                            </Typography>
                            <Typography variant="body1" className='Primary'>
                                <strong>Pickup Location:</strong> {selectedRide?.from?.location || 'N/A'}
                            </Typography>
                            <Typography variant="body1" className='Primary'>
                                <strong>Dropoff Location:</strong> {selectedRide?.to?.location || 'N/A'}
                            </Typography>
                            <Typography variant="body1" className='Primary'>
                                <strong>Driving Style:</strong> {selectedRide?.drivingStyle || 'N/A'}
                            </Typography>
                            <Typography variant="body1" className='Primary'>
                                <strong>Date:</strong> {selectedRide?.date || 'N/A'}
                            </Typography>
                            <Typography variant="body1" className='Primary'>
                                <strong>Time:</strong> {selectedRide?.time || 'N/A'}
                            </Typography>
                            
                            
                            {amount && (
                        <Box sx={{  display:'flex', flexDirection: 'row', gap:1}}>
                            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Amount to pay : </Typography>
                                <Typography  raphy  variant="body2" sx={{ mt:0.1,fontSize: '18px', fontFamily: 'Lato' }}>
                                    {amount} {/* Adjust this line based on the structure of your data */}
                                </Typography>
                        </Box>
                    )}

                            {/* Book Button placed under ride details */}
                            <Box sx={{ marginTop: 3, textAlign: 'center' }}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={handleBookClick}
                                    sx={{
                                        mt: 2,
                                        alignSelf: 'center',
                                        padding: '12px 24px',
                                        borderRadius: '8px',
                                        backgroundColor: '#1976d2',
                                        color: '#fff',
                                        textTransform: 'uppercase',
                                        fontWeight: 'bold',
                                        fontSize: '16px',
                                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                                        transition: 'background-color 0.3s, transform 0.2s',
                                        '&:hover': {
                                            backgroundColor: '#1565c0',
                                            transform: 'scale(1.05)'
                                        },
                                        '&:active': {
                                            backgroundColor: '#0d47a1',
                                            transform: 'scale(1.02)'
                                        }
                                    }}
                                >
                                    Book
                                </Button>
                            </Box>
                        </Box>
                
                </Box>
            </Box>
        );
    };

    export default RideDetailsPage;
