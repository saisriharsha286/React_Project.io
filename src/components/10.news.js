import React from 'react'
import '../comp_css/section8.css'
import news1 from '../images/news1.png'
import news2 from '../images/news2.png'
import news3 from '../images/news3.png'
import news4 from '../images/news4.png'
import news5 from '../images/news5.png'
import news6 from '../images/news6.png'
import news7 from '../images/news7.png'
import news8 from '../images/news8.png'
import allcourses from '../images/allcourses.png'
import NewsCard1 from './news_card1'
import NewsCard2 from './news_card2'
import NewsCard3 from './news_card3'
import { Link } from 'react-router-dom'


function Section8() {
    return (
        <>
            <div className='sec8-container'>
                <div className='allnewscards'>
                    <div className='newscards-column'>
                        <NewsCard1 img={news1} color="#74cee4" shadow="0px 4px 0px 0px #6fc4d9" title="A DAY  PARK" description="Lorem ipsum dolor sit amet, consectetur adcing elit Lorem ipsum dolor sit amet, consectetur adip iscing elit psum dolor sit amet." />
                        <NewsCard1 img={news2} color="#6fc191" shadow="0px 4px 0px 0px #6ab78a" title="A DAY  PARK" description="Lorem ipsum dolor sit amet, consectetur adcing elit Lorem ipsum dolor sit amet, consectetur adip iscing elit psum dolor sit amet." />
                        <NewsCard3 img={news3} color="#ec774b" shadow="0px 4px 0px 0px #df764e" title="WATERCOLOR PRACTICE" description="Lorem ipsum dolor sit amet, consectetur adcing elit Lorem ipsum dolor sit amet, consectetur adip iscing elit psum dolor sit amet." />
                    </div>
                    <div className='newscards-column'>
                        <NewsCard2 color="#6fc191" shadow="0px 4px 0px 0px #6ab78a" title="ART SESSION" description="Lorem ipsum dolor sit amet, consectetur adcing elit Lorem ipsum dolor sit amet, consectetur adip iscing elit psum dolor sit amet." />
                        <NewsCard3 img={news4} color="#ec774b" shadow="0px 4px 0px 0px #df764e" title="WATERCOLOR PRACTICE" description="Lorem ipsum dolor sit amet, consectetur adcing elit Lorem ipsum dolor sit amet, consectetur adip iscing elit psum dolor sit amet." />
                        <NewsCard1 img={news5} color="#edbf47" shadow="0px 4px 0px 0px #e0b84e" title="A DAY  PARK" description="Lorem ipsum dolor sit amet, consectetur adcing elit Lorem ipsum dolor sit amet, consectetur adip iscing elit psum dolor sit amet." />
                        <NewsCard2 color="#e16c6c" shadow="0px 4px 0px 0px #c86969" title="ART SESSION" description="Lorem ipsum dolor sit amet, consectetur adcing elit Lorem ipsum dolor sit amet, consectetur adip iscing elit psum dolor sit amet." />
                    </div>
                    <div className='newscards-column'>
                        <NewsCard3 img={news6} color="#c389ce" shadow="0px 4px 0px 0px #ac7ab5" title="WATERCOLOR PRACTICE" description="Lorem ipsum dolor sit amet, consectetur adcing elit Lorem ipsum dolor sit amet, consectetur adip iscing elit psum dolor sit amet." />
                        <NewsCard1 img={news7} color="#e16c6c" shadow="0px 4px 0px 0px #c86969" title="A DAY  PARK" description="Lorem ipsum dolor sit amet, consectetur adcing elit Lorem ipsum dolor sit amet, consectetur adip iscing elit psum dolor sit amet." />
                        <NewsCard1 img={news8} color="#74cee4" shadow="0px 4px 0px 0px #6fc4d9" title="A DAY  PARK" description="Lorem ipsum dolor sit amet, consectetur adcing elit Lorem ipsum dolor sit amet, consectetur adip iscing elit psum dolor sit amet." />
                    </div>
                </div>
                <div className='view'><Link><button className='view-more'><img src={allcourses} alt="" style={{width: "16%" }}/> VIEW MORE</button></Link></div>
            </div>
        </>
    )
}

export default Section8