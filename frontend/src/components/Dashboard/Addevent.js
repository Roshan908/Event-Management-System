import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import { useState } from 'react';
import axios from 'axios';
const Addevent = () => {
  const [eventName, setEventName] = useState("");
  const [location, setLocation] = useState("");
  const [eventDate, setEventDate] = useState();
  const [eventImage, setEventImage] = useState(null);
  const [vvipPrice, setVvipPrice] = useState();
  const [vvipMaxSeat, setVvipMaxSeat] = useState();
  const [leftWingPrice, setLeftWingPrice] = useState();
  const [leftWingMaxSeat, setLeftMaxSeat] = useState();
  const [rightWingPrice, setRightWingPrice] = useState();
  const [rightWingMaxSeat, setRightWingMaxSeat] = useState();
  const [isStanding, setIsStanding] = useState(true);
  const [standingPrice, setStandingPrice] = useState();
  const [eventDetails, setEventDetails] = useState();

  const handleChange = (newValue) => {
    setEventDate(newValue);
  };
  const formSubmitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('isStanding', !isStanding)
    formData.append('eventName', eventName);
    formData.append('eventDate', new Date(eventDate).toISOString().slice(0, 10));
    formData.append('location', location);
    formData.append('vvipPrice', vvipPrice);
    formData.append('vvipMaxSeat', vvipMaxSeat);
    formData.append('leftWingPrice', leftWingPrice);
    formData.append('leftWingMaxSeat', leftWingMaxSeat);
    formData.append('rightWingPrice', rightWingPrice);
    formData.append('rightWingMaxSeat', rightWingMaxSeat);
    formData.append('standingPrice', standingPrice);
    formData.append('eventDetails', eventDetails);
    formData.append('file', eventImage);
    axios.post('http://localhost:5000/event/addevent', formData)
      .then(response => {
        alert("Event Successfully Created")
      })
      .catch(error => {
        alert("Error occured while creating the event")
      })
    setEventName("");
    setEventDate("");
    setLocation("");
    setEventImage("");
    setVvipPrice("");
    setVvipMaxSeat("");
    setLeftWingPrice("");
    setLeftMaxSeat("");
    setRightWingPrice("");
    setRightWingMaxSeat("");
    setEventDetails();
    setStandingPrice("");
  }

  const handleChangeicon = (event) => {
    setIsStanding(event.target.checked);
  };

  return (
    <div class="container" >
      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={isStanding}
              onChange={handleChangeicon}
              aria-label="login switch"
            />
          }
          label={isStanding ? 'Table Show' : 'Standing Show'}
        />
      </FormGroup>
      {isStanding === true ? (
          <Card sx={{ minWidth: 275 }}  >
            <CardContent>
              <div >
                <Card sx={{ maxWidth: 900, height: '100%' }} class="ml-xl-5">
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image="https://images.unsplash.com/photo-1563784462386-044fd95e9852?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bmlnaHQlMjBwYXJ0eXxlbnwwfHwwfHw%3D&w=1000&q=80"
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Event Details
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        <form onSubmit={formSubmitHandler}>
                          <Box sx={{ flexGrow: 1 }} class="my-1">
                            <Grid container spacing={2}>
                              <Grid item xs={6}>
                                <TextField id="standard-basic" label="Event Name" variant="standard" onChange={(e) => setEventName(e.target.value)} value={eventName} required />
                              </Grid>
                              <Grid item xs={6}>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                  <Stack spacing={3}>
                                    <DesktopDatePicker
                                      label="Date Of Event"
                                      inputFormat="MM/DD/YYYY"
                                      value={eventDate}
                                      onChange={handleChange}
                                      renderInput={(params) => <TextField {...params} />}
                                    />

                                  </Stack>
                                </LocalizationProvider>
                              </Grid>
                            </Grid>
                          </Box>
                          <Box sx={{ flexGrow: 1 }}>
                            <Grid container spacing={2}>
                              <Grid item xs={6}>
                                <TextField id="standard-basic" label="Location" variant="standard" onChange={(e) => setLocation(e.target.value)} value={location} required />
                              </Grid>
                              <Grid item xs={6}>
                                <TextField id="standard-basic" label="Event Image" variant="standard" type={'file'} onChange={(e) => setEventImage(e.target.files[0])} required />
                              </Grid>
                            </Grid>
                          </Box>
                          <h4 className='pt-4'>VVIP Seat Information</h4>
                          <hr style={{ borderWidth: '1px' }} />
                          <Box sx={{ flexGrow: 1 }}>
                            <Grid container spacing={2}>
                              <Grid item xs={6}>
                                <TextField id="standard-basic" label="Price" variant="standard" onChange={(e) => setVvipPrice(e.target.value)} value={vvipPrice} required />
                              </Grid>
                              <Grid item xs={6}>
                                <TextField id="standard-basic" label="Max Seat" variant="standard" onChange={(e) => setVvipMaxSeat(e.target.value)} value={vvipMaxSeat} required />
                              </Grid>
                            </Grid>
                          </Box>
                          <h4 className=' pt-4'>Left-Wing Seat Information</h4>
                          <hr style={{ borderWidth: '1px' }} />

                          <Box sx={{ flexGrow: 1 }}>
                            <Grid container spacing={2}>
                              <Grid item xs={6}>
                                <TextField id="standard-basic" label="Price" variant="standard" onChange={(e) => setLeftWingPrice(e.target.value)} value={leftWingPrice} required />
                              </Grid>
                              <Grid item xs={6}>
                                <TextField id="standard-basic" label="Max Seat" variant="standard" onChange={(e) => setLeftMaxSeat(e.target.value)} value={leftWingMaxSeat} required />
                              </Grid>
                            </Grid>
                          </Box>
                          <h4 className=' pt-4'>Right-Wing Seat Information</h4>
                          <hr style={{ borderWidth: '1px' }} />

                          <Box sx={{ flexGrow: 1 }}>
                            <Grid container spacing={2}>
                              <Grid item xs={6}>
                                <TextField id="standard-basic" label="Price" variant="standard" onChange={(e) => setRightWingPrice(e.target.value)} required value={rightWingPrice} />
                              </Grid>
                              <Grid item xs={6}>
                                <TextField id="standard-basic" label="Max Seat" variant="standard" required onChange={(e) => setRightWingMaxSeat(e.target.value)} value={rightWingMaxSeat} />
                              </Grid>
                            </Grid>
                          </Box>

                          <Box className='mt-2' sx={{ flexGrow: 1 }}>
                            <Grid container spacing={1}>
                              <Grid item xs={12}>
                                <TextField
                                  name="message"
                                  label="Details of Event"
                                  variant="outlined"
                                  multiline
                                  fullWidth
                                  rows={4}
                                  value={eventDetails}
                                  onChange={(e) => setEventDetails(e.target.value)}
                                />
                              </Grid>
                            </Grid>
                          </Box>

                          <Button type='submit' variant="contained" endIcon={<SendIcon />} style={{ marginTop: '5px' }}>
                            Send
                          </Button>
                        </form>
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </div>
            </CardContent>
          </Card>
        
      ) : (
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <div >
              <Card sx={{ maxWidth: 900, height: '100%' }} class="ml-xl-5">
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://images.unsplash.com/photo-1563784462386-044fd95e9852?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bmlnaHQlMjBwYXJ0eXxlbnwwfHwwfHw%3D&w=1000&q=80"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Event Details
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      <form onSubmit={formSubmitHandler}>
                        <Box sx={{ flexGrow: 1 }} class="my-1">
                          <Grid container spacing={2}>
                            <Grid item xs={6}>
                              <TextField id="standard-basic" label="Event Name" variant="standard" onChange={(e) => setEventName(e.target.value)} value={eventName} required />
                            </Grid>
                            <Grid item xs={6}>
                              <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <Stack spacing={3}>
                                  <DesktopDatePicker
                                    label="Date Of Event"
                                    inputFormat="MM/DD/YYYY"
                                    value={eventDate}
                                    onChange={handleChange}
                                    renderInput={(params) => <TextField {...params} />}
                                  />

                                </Stack>
                              </LocalizationProvider>
                            </Grid>
                          </Grid>
                        </Box>
                        <Box sx={{ flexGrow: 1 }}>
                          <Grid container spacing={2}>
                            <Grid item xs={6}>
                              <TextField id="standard-basic" label="Location" variant="standard" onChange={(e) => setLocation(e.target.value)} value={location} required />
                            </Grid>
                            <Grid item xs={6}>
                              <TextField id="standard-basic" label="Event Image" variant="standard" type={'file'} onChange={(e) => setEventImage(e.target.files[0])} required />
                            </Grid>
                          </Grid>
                        </Box>
                        <h4 className='pt-4'>Ticket Information</h4>
                        <hr style={{ borderWidth: '1px' }} />
                        <Box sx={{ flexGrow: 1 }}>
                          <Grid container spacing={2}>
                            <Grid item xs={6}>
                              <TextField id="standard-basic" label="Price" variant="standard" onChange={(e) => setStandingPrice(e.target.value)} value={standingPrice} required />
                            </Grid>
                          </Grid>
                        </Box>
                        <Box className='mt-2' sx={{ flexGrow: 1 }}>
                          <Grid container spacing={1}>
                            <Grid item xs={12}>
                              <TextField
                                name="message"
                                label="Details of Event"
                                variant="outlined"
                                multiline
                                fullWidth
                                rows={4}
                                value={eventDetails}
                                onChange={(e) => setEventDetails(e.target.value)}
                              />
                            </Grid>
                          </Grid>
                        </Box>
                        <Button type='submit' variant="contained" endIcon={<SendIcon />} style={{ marginTop: '5px' }}>
                          Send
                        </Button>
                      </form>
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>
          </CardContent>
        </Card>
      )}

    </div>

  )
}

export default Addevent