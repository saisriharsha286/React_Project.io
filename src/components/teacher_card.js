import React from 'react'
import '../comp_css/section6.css'
import { Link } from 'react-router-dom'
import w_hat from '../images/w_hat.png'
import download from '../images/download.png'
import link from '../images/link.png'
import mic from '../images/mic.png'

function TeacherCard(props) {
    return (
        <>
            <div className='ind-teacher' style={{ backgroundColor: props.bgcolor, boxShadow: props.shadow }}>
                <div className='t-pic'><img src={props.dp} alt="" className='teacher-pic' /></div>
                <div className='teacher-desc'>
                    <div className='teacher-about'>
                        <div className='teacher-title'>{props.name}</div>
                        <div className='teacher-dvdr'></div>
                        <div className='teacher-cnt'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, culpa!</div>
                        <div className='teacher-km'>
                            <img src={w_hat} alt="" />
                            <div km-text>Know Me :)</div>
                        </div>
                    </div>
                    <div className='teacher-links'>
                        <Link><div className='t-ref' style={{ backgroundColor: props.linkcolor }}><img src={download} alt="" /> </div></Link>
                        <Link><div className='t-ref' style={{ backgroundColor: props.linkcolor }}><img src={link} alt="" /></div></Link>
                        <Link><div className='t-ref' style={{ backgroundColor: props.linkcolor }}><img src={mic} alt="" /></div></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TeacherCard