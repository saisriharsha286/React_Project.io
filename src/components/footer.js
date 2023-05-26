import React from 'react'
import '../comp_css/footer.css'
import { Link } from 'react-router-dom'
import mail from '../images/mail.png'
import home from '../images/home.png'
import phone from '../images/phone.png'
import fimg1 from '../images/fimg1.png'
import fimg2 from '../images/fimg2.png'
import fimg3 from '../images/fimg3.png'
import fimg4 from '../images/fimg4.png'
import fimg5 from '../images/fimg5.png'
import fimg6 from '../images/fimg6.png'
import copywrite from '../images/copyright.png'
import fb from '../images/fb.png'
import gplus from '../images/g+.png'
import tw from '../images/twitter.png'
import up from '../images/up.png'

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};
function Footer() {
    return (
        <>
            <div className='footer-container'>
                <div className='lineargrd'></div>
                <div className='allsections'>
                    <div className='ind-sec1'>
                        <div className='sec-title'>OUR PRIMARY SCHOOL</div>
                        <div className='sec-dvdr'></div>
                        <div className='sec-cnt'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae dolore culpa laudantium illum perspiciatis ullam?</div>
                        <div className='sec-dvdr'></div>
                        <div className='sec-contacts'>
                            <div className='c-mail' style={{ backgroundColor: "#ec774b", boxShadow: "0px 4px 0px 0px #df764e" }}><Link to='/home'><img src={mail} alt="" /></Link></div>
                            <div className='c-mail' style={{ backgroundColor: "#edbf47", boxShadow: "0px 4px 0px 0px #e0b84e" }}><Link to='/home'><img src={home} alt="" /></Link></div>
                            <div className='c-mail' style={{ backgroundColor: "#e16c6c", boxShadow: "0px 4px 0px 0px #c86969" }}><Link to='/home'><img src={phone} alt="" /></Link></div>
                        </div>
                    </div>
                    <div className='ind-sec2'>
                        <div className='sec-title'>OUR TAGS</div>
                        <div className='sec-dvdr'></div>
                        <div className='sec-tags'>
                            <div className='ind-tag'><Link to='/home' className='l-tag'>Teacher</Link></div>
                            <div className='ind-tag'><Link to='/home' className='l-tag'>Baby</Link></div>
                            <div className='ind-tag'><Link to='/home' className='l-tag'>Kids</Link></div>
                            <div className='ind-tag'><Link to='/home' className='l-tag'>Teacher</Link></div>
                            <div className='ind-tag'><Link to='/home' className='l-tag'>Teacher</Link></div>
                            <div className='ind-tag'><Link to='/home' className='l-tag'>Baby</Link></div>
                            <div className='ind-tag'><Link to='/home' className='l-tag'>Kids</Link></div>
                            <div className='ind-tag'><Link to='/home' className='l-tag'>Teacher</Link></div>
                            <div className='ind-tag'><Link to='/home' className='l-tag'>Teacher</Link></div>
                            <div className='ind-tag'><Link to='/home' className='l-tag'>Baby</Link></div>
                            <div className='ind-tag'><Link to='/home' className='l-tag'>Kids</Link></div>
                            <div className='ind-tag'><Link to='/home' className='l-tag'>Teacher</Link></div>
                        </div>
                    </div>
                    <div className='ind-sec3'>
                        <div className='sec-title'>GALLERY OF SCHOOL</div>
                        <div className='sec-dvdr'></div>
                        <div className='sec-pics'>
                            <div className='ind-fimg'><img src={fimg1} alt="" /><div className='fimg-overlay'></div></div>
                            <div className='ind-fimg'><img src={fimg2} alt="" /></div>
                            <div className='ind-fimg'><img src={fimg3} alt="" /></div>
                            <div className='ind-fimg'><img src={fimg4} alt="" /></div>
                            <div className='ind-fimg'><img src={fimg5} alt="" /></div>
                            <div className='ind-fimg'><img src={fimg6} alt="" /></div>
                        </div>
                    </div>
                    <div className='ind-sec4'>
                        <div className='sec-title'>CONTACT US</div>
                        <div className='sec-dvdr'></div>
                        <div ><input type="email" name="" id="" placeholder='EMAIL' className='sec-plchld' /></div>
                        <div ><textarea name="" id="" rows="2" placeholder='MESSAGE' className='sec-plchld' style={{ width: "100%" }}></textarea></div>
                        <div ><button type="submit" className='sec-send'>SEND</button></div>
                    </div>
                </div>
                <div className='sub-footer-container'>
                    <img src={copywrite} alt="" style={{ height: "100%", overflow: "hidden" }} />
                    <div className='sub-footer'>
                        <div className='sf-copyright'>
                            <div className='sf-matter'>© Copyright 2023 Made by Sriharsha</div>
                        </div>
                        <div className='sf-contacts'>
                            <div className='f-icons' style={{ backgroundColor: "#5977b8", boxShadow: "0px 4px 0px 0px #4c67a1" }}><Link to='/home'><img src={fb} alt="" /></Link></div>
                            <div className='f-icons' style={{ backgroundColor: "#e16c6c", boxShadow: "0px 4px 0px 0px #c86969" }}><Link to='/home'><img src={gplus} alt="" /></Link></div>
                            <div className='f-icons' style={{ backgroundColor: "#74cee4", boxShadow: "0px 4px 0px 0px #6fc4d9" }}><Link to='/home'><img src={tw} alt="" /></Link></div>
                            <div className='f-icons'><button onClick={scrollToTop} style={{ backgroundColor: "#404547", border: "0px" }} ><img src={up} alt="" /></button></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer