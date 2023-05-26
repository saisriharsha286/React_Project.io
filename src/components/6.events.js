import React from 'react'
import '../comp_css/section4.css'
import events_img1 from '../images/events_img1.png'
import events_img2 from '../images/events_img2.png'
import events_img3 from '../images/events_img3.png'
import events_img4 from '../images/events_img4.png'
import EventCard from './event_card'


function Section4() {
    return (
        <>
            <div className='sec4-container'>
                <div className='allcards'>
                    <EventCard img={events_img1} color="#6fc191" shadow="0px 4px 0px 0px #6ab78a" btncolor="#6ab78a" brdrcolor="#65ae83" date="21" month="DEC" title="A DAY IN THE PARK" venue="New York, Times square" time="9:00 To 14:00" />
                    <EventCard img={events_img2} color="#74cee4" shadow="0px 4px 0px 0px #6fc4d9" btncolor="#6fc4d9" brdrcolor="#6dc0d5" date="30" month="MAY" title="ART SESSION" venue="Our School" time="9:00 To 14:00" />
                    <EventCard img={events_img3} color="#edbf47" shadow="0px 4px 0px 0px #e0b84e" btncolor="#e0b84e" brdrcolor="#d4ae49" date="28" month="JUNE" title="WATERCOLOR PRACTICE" venue="Secondary School" time="9:00 To 14:00" />
                    <EventCard img={events_img4} color="#ec774b" shadow="0px 4px 0px 0px #df764e" btncolor="#df764e" brdrcolor="#d8734c" date="30" month="DEC" title="SPORT TRAINING" venue="Central Park (NY)" time="9:00 To 14:00" />
                </div>
            </div>
        </>
    )
}

export default Section4