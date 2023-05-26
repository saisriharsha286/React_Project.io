import React from 'react'
import { Parallax } from 'react-parallax';
import paralximg2 from '../images/paralximg2.png'
import '../comp_css/section5.css'

function Section5() {
    return (
        <>
            <div className='sec5-container'>
                <Parallax bgImage={paralximg2} strength={200}>
                    <div style={{ height: "100%" }}>
                        <div className='layer'>
                            <div className='allinfo'>
                                <div className='info-head'>FIRST DAY AT SCHOOL!</div>
                                <div className='info-sidehead'> ARE YOU READY?</div>
                                <div className='info-dvdr'></div>
                                <div className='info-time'>
                                    <div className='info-duration'>
                                        <div className='duration-num'>000</div>
                                        <div className='duration-text' style={{ backgroundColor: "#74cee4" }}>DAYS</div>
                                    </div>
                                    <div className='info-duration'>
                                        <div className='duration-num'>00</div>
                                        <div className='duration-text' style={{ backgroundColor: "#edbf47" }}>HOURS</div>
                                    </div>
                                    <div className='info-duration'>
                                        <div className='duration-num'>00</div>
                                        <div className='duration-text' style={{ backgroundColor: "#6fc191" }}>MINUTES</div>
                                    </div>
                                    <div className='info-duration'>
                                        <div className='duration-num'>00</div>
                                        <div className='duration-text' style={{ backgroundColor: "#c389ce" }}>SECONDS</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Parallax >
            </div >
        </>
    )
}

export default Section5;