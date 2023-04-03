import React from 'react'

const EventSchedule = () => {
    return (
        <>
            <section class="schedule-section section-padding" id="section_4">
                <div class="container">
                    <div class="row">

                        <div class="col-12 text-center">
                            <h2 class="text-white mb-4">Event Schedule</h2>

                            <div class="table-responsive">
                                <table class="schedule-table table table-dark">
                                    <thead>
                                        <tr>
                                            <th scope="col">Days</th>

                                            <th scope="col"></th>

                                            <th scope="col"></th>

                                            <th scope="col"></th>

                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr>
                                            <th scope="row">Sunday</th>

                                            <td class="table-background-image-wrap pop-background-image">
                                                <h3>Event Name</h3>

                                                <p class="mb-2">5:00 - 7:00 PM</p>

                                                <p>Location</p>

                                                <div class="section-overlay"></div>
                                            </td>

                                            <td  style={{backgroundColor:'#F3DCD4'}}></td>

                                            <td class="table-background-image-wrap rock-background-image">
                                                <h3>Rock & Roll</h3>

                                                <p class="mb-2">7:00 - 11:00 PM</p>

                                                <p>By Rihana</p>

                                                <div class="section-overlay"></div>
                                            </td>
                                        </tr>

                                        <tr>
                                            <th scope="row">Monday</th>

                                            <td style={{backgroundColor:'#ECC9C7'}}></td>

                                            <td>
                                                <h3>DJ Night</h3>

                                                <p class="mb-2">6:30 - 9:30 PM</p>

                                                <p>By Rihana</p>
                                            </td>

                                            <td  style={{backgroundColor:'#D9E3DA'}}></td>
                                        </tr>

                                        <tr>
                                            <th scope="row">Tuesday</th>

                                            <td class="table-background-image-wrap country-background-image">
                                                <h3>Country Music</h3>

                                                <p class="mb-2">4:30 - 7:30 PM</p>

                                                <p>By Rihana</p>

                                                <div class="section-overlay"></div>
                                            </td>

                                            <td style={{backgroundColor:'#D1CFC0'}}></td>

                                            <td>
                                                <h3>Free Styles</h3>

                                                <p class="mb-2">6:00 - 10:00 PM</p>

                                                <p>By Members</p>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default EventSchedule