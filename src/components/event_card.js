import React from 'react'
import '../comp_css/section4.css'
import pin from '../images/pin.png'
import time from '../images/time.png'

function EventCard(props) {
    return (
        <>
            <div className='ind-card' style={{backgroundColor: props.color , boxShadow:  props.shadow}}>
                <div className='card-up'>
                    <img src={props.img} alt="" className='card-img' />
                    <div className='card-date'>{props.date} <br />{props.month}</div>
                </div>
                <div className='card-title'>{props.title}</div>
                <div className='card-desc'>
                    <div className='desc-venue'>
                        <div ><img src={pin} alt="" className='venue-img' /></div>
                        <div className='venue-text'>{props.venue}</div>
                    </div>
                    <div className='desc-time'>
                        <div ><img src={time} alt="" className='time-img' /></div>
                        <div className='time-text'>{props.time}</div>
                    </div>
                    <div className='desc-dvdr'></div>
                    <div className='desc-desc'> {props.desc} Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio at nam, cupiditate totam voluptate atque mollitia quis accusamus aliquid molestias!</div>
                    <div ><button className='desc-btn' style={{backgroundColor: props.btncolor, borderColor: props.brdrcolor}}>CHECK IT!</button></div>
                </div>
            </div>
        </>
    )
}

export default EventCard