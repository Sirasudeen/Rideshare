import React, { useState } from 'react';
import { Box, Button, Container, TextField, Typography } from '@mui/material';
import { styled } from '@mui/system';
import Header from './Layout/Header';

const StyledContainer = styled(Container)(({ theme }) => ({
    padding: '40px',
    backgroundColor: '#f9f9f9',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    marginTop: '40px',
    textAlign: 'center',
}));

const StyledButton = styled(Button)(({ theme }) => ({
    marginTop: '20px',
    padding: '10px 20px',
    fontSize: '16px',
    borderRadius: '8px',
    backgroundColor: theme.palette.primary.main,
    '&:hover': {
        backgroundColor: theme.palette.primary.dark,
    },
}));

const FeedbackPage = () => {
    const [rating, setRating] = useState(0);
    const [comments, setComments] = useState('');

    const handleSubmit = () => {
        // Feedback submission logic
        console.log('Feedback submitted:', { rating, comments });
    };

    return (
        <div>
            <Header />
            <StyledContainer maxWidth="sm">
                <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: '30px' }}>
                    We Value Your Feedback!
                </Typography>
                <Box sx={{ mb: 4 }}>
                    <Typography variant="h6" sx={{ textAlign: 'left', mb: 1 }}>
                        Rate your ride:
                    </Typography>
                    <TextField
                        type="number"
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                        inputProps={{ min: 1, max: 5 }}
                        label="Rating (1 to 5)"
                        variant="outlined"
                        fullWidth
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                borderRadius: '8px',
                            },
                        }}
                    />
                </Box>
                <Box sx={{ mb: 4 }}>
                    <Typography variant="h6" sx={{ textAlign: 'left', mb: 1 }}>
                        Comments:
                    </Typography>
                    <TextField
                        value={comments}
                        onChange={(e) => setComments(e.target.value)}
                        multiline
                        rows={4}
                        fullWidth
                        variant="outlined"
                        label="Share your experience"
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                borderRadius: '8px',
                            },
                        }}
                    />
                </Box>
                <StyledButton variant="contained" onClick={handleSubmit}>
                    Submit Feedback
                </StyledButton>
            </StyledContainer>
        </div>
    );
};

export default FeedbackPage;
