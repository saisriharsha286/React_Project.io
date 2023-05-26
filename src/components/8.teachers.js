import React from 'react'
import '../comp_css/section6.css'
import TeacherCard from './teacher_card'
import t1 from '../images/t1.png'
import t2 from '../images/t2.png'
import t3 from '../images/t3.png'
import t4 from '../images/t4.png'

function Section6() {
    return (
        <>
            <div className='sec6-container'>
                <div className='all-teachers'>
                    <div className='u-teachers'>
                        <TeacherCard dp={t1} bgcolor="#ec774b" shadow="0px 4px 0px 0px #df764e" linkcolor="#df764e" name="JULIETTE LIGHT" />
                        <TeacherCard dp={t2} bgcolor="#74cee4" shadow="0px 4px 0px 0px #6fc4d9" linkcolor="#6fc4d9" name="JENNY MGRAYAN" />
                    </div>
                    <div className='u-teachers'>
                        <TeacherCard dp={t3} bgcolor="#edbf47" shadow="0px 4px 0px 0px #e0b84e" linkcolor="#e0b84e" name="JULIETTE LIGHT" />
                        <TeacherCard dp={t4} bgcolor="#c389ce" shadow="0px 4px 0px 0px #ac7ab5" linkcolor="#ac7ab5" name="JULIETTE LIGHT" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section6