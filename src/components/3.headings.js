import React from 'react'
import '../comp_css/section2.css'
import '../comp_css/headings.css'

function Headings(props) {
    return (
        <>
            <div className='head-container'>
                <div className='heading'>
                    <p>{props.title}</p>
                </div>
                <div className='sidehead'>
                    <p>{props.description}</p>
                </div>
                <div className='divider' style={{ backgroundColor: props.color }}></div>
            </div>
        </>
    )
}

export default Headings