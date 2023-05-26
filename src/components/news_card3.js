import React from 'react'
import '../comp_css/section8.css'
import page from '../images/page.png'
import url from '../images/url.png'
import { Link } from 'react-router-dom'

function NewsCard1(props) {
    return (
        <>
            <div className='ind-card' style={{backgroundColor: props.color , boxShadow:  props.shadow}}>
                <div className='card-up'>
                    <img src={props.img} alt="" className='card-img' />
                    <Link><div className='card-link' style={{backgroundColor: props.color , borderColor: props.brdrcolor}}><img src={url} alt="" style={{width: "50%"}}/></div></Link>
                </div>
                <div className='card-desc'>
                    <div className='news-title'>{props.title}</div>
                </div>
            </div>
        </>
    )
}

export default NewsCard1