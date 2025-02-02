import React, { useState } from 'react';
import { Box, Button, Typography, TextField, Rating, Divider } from '@mui/material';

const FeedbackPage = () => {
    const [rating, setRating] = useState(0);
    const [comments, setComments] = useState('');

    const handleSubmit = () => {
        console.log('Feedback submitted:', { rating, comments });
    };

    const handleSkip = () => {
        console.log('Feedback skipped');
        // Logic to skip the feedback process goes here
    };

    return (
        <Box 
            sx={{
                mt: 10, 
                padding: 3,
                background: "#ffffff",
                textAlign: 'left',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0.3px 1.5px 1.5px',
                borderRadius: 3,
                width: '40%',
                height: '500px',
                ml: '32%',
                '& .Heading': {
                    marginBottom: 1.5,
                    fontSize: '2.3rem',
                    color: 'black',
                    fontWeight: '550',
                    fontFamily: 'Poppins',
                },
                '& .Primary': {
                    marginBottom: 1.5,
                    fontSize: '1.9rem',
                    color: 'black',
                    fontFamily: 'Lato',
                },
            }}
        >
            <Typography className='Heading' textAlign={'center'}>
                Feedback
            </Typography>
            <Divider sx={{ marginBottom: 2 }} />

            <Box sx={{ mt: 3, display: 'flex', flexDirection: 'row', gap: 3 }}>
                <Typography className='Primary'>
                    Rate your ride:
                </Typography>
                <Rating
                    name="ride-rating"
                    value={rating}
                    onChange={(event, newValue) => setRating(newValue)}
                    precision={0.5}  // Allows for half-star ratings
                    sx={{
                        '& .MuiRating-icon': {
                            fontSize: '3rem',  // Custom size
                            color: '#FFD700',  // Gold color for selected stars
                        },
                        '& .MuiRating-iconEmpty': {
                            color: '#d3d3d3',  // Light gray for unselected stars
                        },
                        '& .MuiRating-icon:hover': {
                            color: '#ffcc00',  // Hover effect color
                        },
                    }}
                />
            </Box>

            <Box sx={{ mt: 3 }}>
                <Typography className='Primary'>
                    Comments:
                </Typography>
                <TextField
                    value={comments}
                    onChange={(e) => setComments(e.target.value)}
                    multiline
                    rows={4}
                    fullWidth
                    label="Your Comments"
                    variant="outlined"
                />
            </Box>

            <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2 }}>
                <Button
                    onClick={handleSubmit}
                    variant="contained"
                    color="primary"
                    sx={{
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
                    Submit Feedback
                </Button>

                <Typography
                    variant="body2"
                    sx={{
                        textDecoration: 'underline',
                        color: '#1976d2',
                        fontSize: "17px",
                        cursor: 'pointer',
                        '&:hover': {
                            color: '#0d47a1',
                        }
                    }}
                    onClick={handleSkip}
                >
                    Skip
                </Typography>
            </Box>
        </Box>
    );
};

export default FeedbackPage;
