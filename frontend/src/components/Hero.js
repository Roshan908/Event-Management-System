import React from 'react'
import Navbar from './Navbar'
import fablogo from '../assets/fablogo.jpeg'
import instalogo from '../assets/insta.jpeg'
import '../style.css'
const Hero = () => {
   
    return (
        <>
            <Navbar />
            <section style={{backgroundImage:"url('https://images.pexels.com/photos/154147/pexels-photo-154147.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"}} class="hero-section" id="section_1">

                <div class="section-overlay"></div>

                <div class="container d-flex justify-content-center align-items-center">
                    <div class="row">

                        <div class="col-12 mt-auto mb-5 text-center">
                            <h1></h1>

                            <h1 class="text-white mb-5"></h1>

                            {/* <a class="btn custom-btn smoothscroll" href="1section_2"></a> */}
                        </div>

                        <div class="col-lg-12 col-12 mt-auto d-flex flex-column flex-lg-row text-center">
                            <div class="date-wrap">
                                <h5 class="text-white">
                                    <i class="custom-icon bi-clock me-2"></i>
                                    <sup></sup>
                                </h5>
                            </div>

                            <div class="location-wrap mx-auto py-3 py-lg-0">
                                <h5 class="text-white">
                                    <i class="custom-icon bi-geo-alt me-2"></i>
                                   
                                </h5>
                            </div>

                            <div class="social-share">
                                {/* <ul class="social-icon d-flex align-items-center justify-content-center">
                                    <span class="text-white me-3">Share:</span>

                                    <li class="social-icon-item px-2">
                                        <a href="1" >
                                            <span><img src={fablogo} alt='facebook' style={{width:'40px', height:'40px'}}></img></span>
                                        </a>
                                    </li>

                                    <li class="social-icon-item px-2">
                                        <a href="1" class="social-icon-link">
                                        <span><img src={instalogo} alt='facebook' style={{width:'40px', height:'40px'}}></img></span>
                                        </a>
                                    </li>
                                </ul> */}
                            </div>
                        </div>
                    </div>
                </div>

                { <div class="video-wrap">
                  <img src='https://images.pexels.com/photos/154147/pexels-photo-154147.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'></img>
                </div> }
            </section>


            <section class="about-section section-padding" id="section_2">
                <div class="container">
                    <div class="row">

                        <div class="col-lg-6 col-12 mb-4 mb-lg-0 d-flex align-items-center">
                            <div class="services-info">
                                <h2 class="text-white mb-4">About Us</h2>

                                <p class="text-white">The "About Us" section of an event organizing company's website is an opportunity to introduce the company and its team to potential clients and customers. The content of this section should be professional, informative, and engaging</p>

                                <h6 class="text-white mt-4">Once in Lifetime Experience</h6>

                                <p class="text-white">Services: Detail the services your company offers, such as event planning, coordination, and management.</p>

                                <h6 class="text-white mt-4">Whole Night Party</h6>

                                <p class="text-white">Please tell your friends about our website. Thank you.</p>
                            </div>
                        </div>

                        <div class="col-lg-6 col-12">
                            <div class="about-text-wrap">
                                <img src="images/pexels-alexander-suhorucov-6457579.jpg" class="about-image img-fluid" alt='abc' />

                                <div class="about-text-info d-flex">
                                    <div class="d-flex">
                                        <i class="about-text-icon bi-person"></i>
                                    </div>


                                    <div class="ms-4">
                                        <h3>a happy moment</h3>

                                        <p class="mb-0">your amazing festival experience with us</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </>
    )
}

export default Hero