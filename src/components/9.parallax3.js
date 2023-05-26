import React from 'react'
import { Parallax } from 'react-parallax';
import paralximg3 from '../images/paralximg3.png'
import '../comp_css/section7.css'

function Section7() {
    return (
        <>
            <div className='sec7-container'>
                <Parallax bgImage={paralximg3}>
                    <div style={{ height: "100%" }}>
                        <div className='layer2'>
                            <div className='allinfo2'>
                                <div className='details'>
                                    <div className='details-num' style={{ backgroundColor: "#74cee4", boxShadow: "0px 4px 0px 0px #6fc4d9" }}>69</div>
                                    <div className='details-text'>TEACHERS</div>
                                </div>
                                <div className='details'>
                                    <div className='details-num' style={{ backgroundColor: "#edbf47", boxShadow: "0px 4px 0px 0px #e0b84e" }}>32</div>
                                    <div className='details-text'>COURSES</div>
                                </div>
                                <div className='details'>
                                    <div className='details-num' style={{ backgroundColor: "#6fc191", boxShadow: "0px 4px 0px 0px #6ab78a" }}>48</div>
                                    <div className='details-text'>LEASSONS</div>
                                </div>
                                <div className='details'>
                                    <div className='details-num' style={{ backgroundColor: "#c389ce", boxShadow: "0px 4px 0px 0px #ac7ab5" }}>72</div>
                                    <div className='details-text'>ACTIVITIES</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Parallax >
            </div >
        </>
    )
}

export default Section7;