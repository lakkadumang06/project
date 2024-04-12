import React from 'react'
import './detail.css'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";

export default function Detail() {
    return (
        <div>
            <div className='container'>
                <center>
                    <div className="detail">
                        <div className="detail-title">
                            <h2>Integrating Digital Technology And Design</h2>
                            <AnimationOnScroll animateIn="animate__fadeInDown">
                                <h6>to create new opportunities to impact customer experience and drive growth</h6>
                                <p>Tata Elxsi is among the world’s leading design and technology service providers across industries, including Automotive, Broadcast, Communications, Healthcare, and Transportation. We help customers reimagine their products and services through design thinking and the application of digital technologies such as IoT (Internet of Things), Cloud, Mobility, Virtual Reality, and Artificial Intelligence.</p>
                            </AnimationOnScroll>
                        </div>
                        <div className="detail-img">
                            <AnimationOnScroll animateIn="animate__fadeIn">
                                <img src={require("../assets/banner.avif")} alt="" />
                            </AnimationOnScroll>
                        </div>
                    </div>
                </center>
            </div>
        </div>
    )
} 
