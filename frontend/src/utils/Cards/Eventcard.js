import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';


const Eventcard = ({ location, date, img, eventName, id, isStanding }) => {
    console.log('====================================');
    console.log(isStanding);
    console.log('====================================');
    console.log(img)
    const correctedImagePath = img.replace(/\\/g, '/');
    console.log(correctedImagePath)
    const handleDelete = async (id) => {
        const url = `http://localhost:5000/event/${id}`;

        try {
            const response = await fetch(url, {
                method: 'DELETE',
            });
            if (response.ok) {
                alert('Event deleted successfully');
                window.location.reload();
            } else {
                alert('Failed to delete the event');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };
    return (
       
        <Card sx={{ maxWidth: 500 }}>
            <CardMedia
                sx={{ height: 300 }}
                // image={`/backend/${img}`}
                 image={`http://localhost:5000/${correctedImagePath}`}
                title=""
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {eventName}
                </Typography>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            Location
                        </Grid>
                        <Grid item xs={6}>
                            {location}
                        </Grid>
                    </Grid>
                </Box>
                <Box className="mt-2" sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            Date
                        </Grid>
                        <Grid item xs={6}>
                            {date}
                        </Grid>
                    </Grid>
                </Box>
                <Box className="mt-2" sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            Show Type
                        </Grid>
                        <Grid item xs={6}>
                            {isStanding===true?(
                                <p>Standing</p>
                            ):(
                                <p>Table Show</p>
                            )}
                        </Grid>
                    </Grid>
                </Box>
            </CardContent>
            <CardActions>
                <div class="row" style={{ width: '100%' }}>
                    <div class="col" style={{ width: '50%', textAlign: 'center' }}>
                        <Link to={`/dashboard/${id}`}>
                            <Button>View Details</Button>
                        </Link>
                    </div>
                    <div class="col" style={{ width: '50%', textAlign: 'center' }}>
                       <Button onClick={()=>handleDelete(id)}>Delete</Button>
                    </div>
                </div>
            </CardActions>
        </Card>
    )
}

export default Eventcard