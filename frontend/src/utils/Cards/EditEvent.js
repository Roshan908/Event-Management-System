import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { TextField, Button, Box, Grid, Typography } from '@mui/material';

const EditEvent = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [eventDetails, setEventDetails] = useState({
        eventName: '',
        location: '',
        eventDate: '',
        standingPrice: '',
        vvip: { price: '', maxSeat: '' },
        leftWing: { price: '', maxSeat: '' },
        rightWing: { price: '', maxSeat: '' },
    });

    useEffect(() => {
        // Fetch the existing event details
        fetch(`http://localhost:5000/event/${id}`)
            .then(response => response.json())
            .then(data => setEventDetails(data.doc))
            .catch(err => console.log(err));
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEventDetails((prevDetails) => ({
            ...prevDetails,
            [name]: value,
        }));
    };

    const handleNestedChange = (e, section) => {
        const { name, value } = e.target;
        setEventDetails((prevDetails) => ({
            ...prevDetails,
            [section]: {
                ...prevDetails[section],
                [name]: value,
            },
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    
        // Convert the eventDetails object into an array of objects with 'propName' and 'value'
        const updatedDetails = Object.keys(eventDetails).map(key => {
            if (typeof eventDetails[key] === 'object') {
                // Handle nested objects like vvip, leftWing, and rightWing
                return Object.keys(eventDetails[key]).map(nestedKey => ({
                    propName: `${key}.${nestedKey}`,
                    value: eventDetails[key][nestedKey]
                }));
            }
            return { propName: key, value: eventDetails[key] };
        }).flat();  // Flatten the array if there are nested objects
    
        // Send the PATCH request with the properly formatted body
        fetch(`http://localhost:5000/event/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedDetails),
        })
            .then((response) => response.json())
            .then(() => {
                alert('Event Updated Successfully');
                // Redirect back to the event details page after successful update
                navigate(`/event/${id}`);
            })

            .catch((err) => {console.log(err);
                alert('Error occured while updating ');
            });

    };

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 800, m: 'auto', mt: 4 }}>
            <Typography variant="h4" gutterBottom>Edit Event</Typography>

            <TextField
                label="Event Name"
                name="eventName"
                value={eventDetails.eventName}
                onChange={handleChange}
                fullWidth
                margin="normal"
            />

            <TextField
                label="Location"
                name="location"
                value={eventDetails.location}
                onChange={handleChange}
                fullWidth
                margin="normal"
            />

            <TextField
                label="Event Date"
                name="eventDate"
                value={eventDetails.eventDate}
                onChange={handleChange}
                fullWidth
                margin="normal"
            />

            {eventDetails.isStanding ? (
                <TextField
                    label="Standing Price"
                    name="standingPrice"
                    value={eventDetails.standingPrice}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
            ) : (
                <>
                    <Typography variant="h6" gutterBottom>VVIP</Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <TextField
                                label="Price"
                                name="price"
                                value={eventDetails.vvip.price}
                                onChange={(e) => handleNestedChange(e, 'vvip')}
                                fullWidth
                                margin="normal"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                label="Max Seat"
                                name="maxSeat"
                                value={eventDetails.vvip.maxSeat}
                                onChange={(e) => handleNestedChange(e, 'vvip')}
                                fullWidth
                                margin="normal"
                            />
                        </Grid>
                    </Grid>

                    <Typography variant="h6" gutterBottom>Left Wing</Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <TextField
                                label="Price"
                                name="price"
                                value={eventDetails.leftWing.price}
                                onChange={(e) => handleNestedChange(e, 'leftWing')}
                                fullWidth
                                margin="normal"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                label="Max Seat"
                                name="maxSeat"
                                value={eventDetails.leftWing.maxSeat}
                                onChange={(e) => handleNestedChange(e, 'leftWing')}
                                fullWidth
                                margin="normal"
                            />
                        </Grid>
                    </Grid>

                    <Typography variant="h6" gutterBottom>Right Wing</Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <TextField
                                label="Price"
                                name="price"
                                value={eventDetails.rightWing.price}
                                onChange={(e) => handleNestedChange(e, 'rightWing')}
                                fullWidth
                                margin="normal"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                label="Max Seat"
                                name="maxSeat"
                                value={eventDetails.rightWing.maxSeat}
                                onChange={(e) => handleNestedChange(e, 'rightWing')}
                                fullWidth
                                margin="normal"
                            />
                        </Grid>
                    </Grid>
                </>
            )}

            <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
                Save
            </Button>
        </Box>
    );
};

export default EditEvent;