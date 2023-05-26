import React from 'react'
import '../comp_css/section8.css'
import page from '../images/page.png'

function NewsCard(props) {
    return (
        <>
            <div className='ind-card' style={{backgroundColor: props.color , boxShadow:  props.shadow}}>
                <div className='card-desc'>
                    <div className='news-title'>{props.title}</div>
                    <div className='desc-dvdr'></div>
                    <div className='desc-description'> {props.description} </div>
                    <div ><button className='desc-btn2' style={{backgroundColor: props.color}}> <img src={page} alt="" style={{width: "16%" }}/> Read More</button></div>
                </div>
            </div>
        </>
    )
}

export default NewsCard