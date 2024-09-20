import React from 'react';
import { Modal, Box, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';

const BookingConfirmationPopup = ({ open, onClose }) => {
    return (
        <Modal open={open} onClose={onClose} aria-labelledby="booking-confirmation-title">
            <Box
                sx={{
                    bgcolor: 'white',
                    borderRadius: '8px',
                    boxShadow: 24,
                    p: 4,
                    width: '300px',
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                }}
            >
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                >
                    <Typography variant="h6" id="booking-confirmation-title" gutterBottom>
                        Booking Confirmed!
                    </Typography>
                    <Typography variant="body1">
                        Your ride has been successfully booked. 🎉
                    </Typography>
                    <Box mt={2} display="flex" justifyContent="flex-end">
                        <Button variant="contained" onClick={onClose}>
                            Close
                        </Button>
                    </Box>
                </motion.div>
            </Box>
        </Modal>
    );
};

export default BookingConfirmationPopup;
