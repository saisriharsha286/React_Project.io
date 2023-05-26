import React from 'react'
import { Parallax } from 'react-parallax';
import paralximg1 from '../images/paralximg1.png'
import '../comp_css/section3.css'
import allcourses from '../images/allcourses.png'
import contact from '../images/contact.png'


const insideStyles = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)"
};

function Section3() {
    return (
        <>
            <div className='sec3-container'>
                <Parallax bgImage={paralximg1} strength={200}>
                    <div style={{ height: 250 }}>
                        <div style={insideStyles}>
                            <div className='tabs'>
                                <button className='indtab'>
                                    <div className='tabicon'><img src={allcourses} alt="" className='icon' /></div>
                                    <div className='tabtext'>
                                        ALL COURSES
                                    </div>
                                </button>
                                <button className='indtab'>
                                    <div className='tabicon'><img src={contact} alt="" className='icon' /></div>
                                    <div className='tabtext'>
                                        CONTACT US
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </Parallax >
            </div >
        </>
    )
}

export default Section3;