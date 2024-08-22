import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useNavigate, Link } from 'react-router-dom';
const EventDetails = () => {
    const [eventDetails, setEventDetails] = useState();
    const { id } = useParams()
    useEffect(() => {
        fetch(`http://localhost:5000/event/${id}`)
            .then((response) => response.json())
            .then((data) => setEventDetails(data.doc))
            .catch(err => console.log(err))
    }, [id])
    console.log(eventDetails, "hhhhhhhhhhhhhhhhhhhhh");
    const correctedImagePath = eventDetails?.eventImageUrl.replace(/\\/g, '/');
    console.log(correctedImagePath)
    const navigate = useNavigate();
    const handleDelete = async (id) => {
        const url = `http://localhost:5000/event/${id}`;

        try {
            const response = await fetch(url, {
                method: 'DELETE',
            });
            if (response.ok) {
                alert('Event deleted successfully');
                navigate(-1);
            } else {
                alert('Failed to delete the event');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };
    return (
        <Card sx={{ maxWidth: 800 }}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="450"
                image={`http://localhost:5000/${correctedImagePath}`}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {eventDetails?.eventName}
                </Typography>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            Location
                        </Grid>
                        <Grid item xs={6}>
                            {eventDetails?.location}
                        </Grid>
                    </Grid>
                </Box>
                <Box class='pt-2' sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            Event Date
                        </Grid>
                        <Grid item xs={6}>
                            {eventDetails?.eventDate}
                        </Grid>
                    </Grid>
                </Box>

                {eventDetails?.isStanding === true ? (
                    <>
                        <p class="text-center pt-2">Standing Show</p>
                        <Box className="mt-2" sx={{ flexGrow: 1 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    Price
                                </Grid>
                                <Grid item xs={6}>
                                    Rs.{eventDetails?.standingPrice}
                                </Grid>
                            </Grid>
                        </Box>
                    </>
                ) : (
                    <>
                        <p class="text-center pt-4">Table Show</p>
                        <h5>VVIP</h5>
                        <Box className="mt-2" sx={{ flexGrow: 1 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    Price
                                </Grid>
                                <Grid item xs={6}>
                                    Rs.{eventDetails?.vvip?.price}
                                </Grid>
                            </Grid>
                        </Box>
                        <Box className="mt-2" sx={{ flexGrow: 1 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    Max Seat
                                </Grid>
                                <Grid item xs={6}>
                                    {eventDetails?.vvip?.maxSeat}
                                </Grid>
                            </Grid>
                        </Box>
                        <h5 class="mt-3">Left Wing</h5>
                        <Box className="mt-2" sx={{ flexGrow: 1 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    Price
                                </Grid>
                                <Grid item xs={6}>
                                    Rs.{eventDetails?.leftWing?.price}
                                </Grid>
                            </Grid>
                        </Box>
                        <Box className="mt-2" sx={{ flexGrow: 1 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    Max Seat
                                </Grid>
                                <Grid item xs={6}>
                                    {eventDetails?.leftWing?.maxSeat}
                                </Grid>
                            </Grid>
                        </Box>
                        <h5 class="mt-3">Right Wing</h5>
                        <Box className="mt-2" sx={{ flexGrow: 1 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    Price
                                </Grid>
                                <Grid item xs={6}>
                                    Rs.{eventDetails?.rightWing?.price}
                                </Grid>
                            </Grid>
                        </Box>
                        <Box className="mt-2" sx={{ flexGrow: 1 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    Max Seat
                                </Grid>
                                <Grid item xs={6}>
                                    {eventDetails?.rightWing?.maxSeat}
                                </Grid>
                            </Grid>
                        </Box>
                    </>
                )}
            </CardContent>
            <CardActions>
                <Link to={`/event/${id}/edit`}><Button size="small">Edit</Button></Link>
                <Button onClick={()=>handleDelete(id)}>Delete</Button>
            </CardActions>
        </Card>
    );
}
export default EventDetails;