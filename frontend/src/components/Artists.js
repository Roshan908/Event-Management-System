import React from 'react'

const Artists = () => {
    return (
        <>
            <section class="artists-section section-padding" id="section_3">
                <div class="container">
                    <div class="row justify-content-center">

                        <div class="col-12 text-center">
                            <h2 class="mb-4">Gallery</h2>
                        </div>

                        <div class="col-lg-5 col-12">
                            <div class="artists-thumb">
                                <div class="artists-image-wrap">
                                    <img src="images/artists/joecalih-UmTZqmMvQcw-unsplash.jpg" class="artists-image img-fluid" alt='img' />
                                </div>

                              
                            </div>
                        </div>

                        <div class="col-lg-5 col-12">
                            <div class="artists-thumb">
                                <div class="artists-image-wrap">
                                    <img src="images/artists/abstral-official-bdlMO9z5yco-unsplash.jpg" class="artists-image img-fluid" alt='img' />
                                </div>

                               
                            </div>

                            <div class="artists-thumb">
                                <img src="images/artists/soundtrap-rAT6FJ6wltE-unsplash.jpg" class="artists-image img-fluid" alt='img' />

                               
                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </>
    )
}

export default Artists