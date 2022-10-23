import React from 'react'
import { Carousel } from 'react-bootstrap'
import Footer from './Footer';
// import Nav from './Nav';
import pic1 from '../images/thorDada.webp'
import '../Scss/Homepage/Homepage.css'

function HomePage() {
    return (
        <>
            {/* <Nav /> */}
            <Carousel fade id="carousel"> 
                <Carousel.Item id='box'>
                    <img
                        className="d-block w-100 carouselImg"
                        src={pic1}
                        alt="First slide"
                       
                      />
                   
                </Carousel.Item>
                <Carousel.Item>
                    <img 
                        className="d-block w-100 carouselImg"
                        src="https://cdn.pixabay.com/photo/2018/03/27/00/33/music-3264716_960_720.jpg"
                        alt="Second slide"
                    />

                    
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 carouselImg"
                        src="https://cdn.pixabay.com/photo/2020/04/16/09/57/watercolor-5049980_960_720.jpg"
                        alt="Third slide"
                    />

                    
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 carouselImg"
                        src="https://cdn.pixabay.com/photo/2016/11/22/19/33/asian-cuisine-1850233_960_720.jpg"
                        alt="Fourth slide"
                    />
                  
                </Carousel.Item>
            </Carousel>
            <Footer/>



        </>
    )
}

export default HomePage