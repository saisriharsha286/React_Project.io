import React from 'react'
import '../comp_css/section2.css'
import food from '../images/leaf.png'
import timer from '../images/timer.png'
import car from '../images/car.png'
import headphone from '../images/headphone.png'
import excu from '../images/excu.png'
import lang from '../images/lang.png'

function Section2() {
    return (
        <>
            <div className='sec2cont'>
                <div className='cardscontainer'>
                    <div className='indcard'>
                        <div className='cardpic'><img src={food} alt="" className='pic' /></div>
                        <div className='cardmatter'>
                            <div className='cardtitle'>CUSTOM FOOD</div>
                            <div className='carddesc'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, dignissimos.</div>
                        </div>
                    </div>
                    <div className='indcard'>
                        <div className='cardpic'><img src={timer} alt="" className='pic' /></div>
                        <div className='cardmatter'>
                            <div className='cardtitle'>MANY SPORTS</div>
                            <div className='carddesc'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, dignissimos.</div>
                        </div>
                    </div>
                    <div className='indcard'>
                        <div className='cardpic'><img src={car} alt="" className='pic' /></div>
                        <div className='cardmatter'>
                            <div className='cardtitle'>BUS FACILITY</div>
                            <div className='carddesc'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, dignissimos.</div>
                        </div>
                    </div>
                    <div className='indcard'>
                        <div className='cardpic'><img src={headphone} alt="" className='pic' /></div>
                        <div className='cardmatter'>
                            <div className='cardtitle'>MUSIC LESSONS</div>
                            <div className='carddesc'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, dignissimos.</div>
                        </div>
                    </div>
                    <div className='indcard'>
                        <div className='cardpic'><img src={excu} alt="" className='pic' /></div>
                        <div className='cardmatter'>
                            <div className='cardtitle'>EXCURSIONS</div>
                            <div className='carddesc'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, dignissimos.</div>
                        </div>
                    </div>
                    <div className='indcard'>
                        <div className='cardpic'><img src={lang} alt="" className='pic' /></div>
                        <div className='cardmatter'>
                            <div className='cardtitle'>LANGUAGES</div>
                            <div className='carddesc'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, dignissimos.</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section2;