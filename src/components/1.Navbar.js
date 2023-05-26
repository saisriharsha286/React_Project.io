import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../comp_css/Navbar.css'
import logo from '../images/babykids.png'
import { Link } from 'react-router-dom'
import CarouselFade from './2.carousel';
import pencil from '../images/pencil.png'
import cash from '../images/cash.png'
import music from '../images/music.png'
import hat from '../images/hat.png'


function Navbarlight() {
    return (
        <>
            <div className='navbarcont'>
                <div className='carouselp'>
                    <CarouselFade />
                </div>
                <div className='navb'>
                    <div className='lineargrd'></div>
                    <Navbar variant="light" bg="light" expand="lg">
                        <Container fluid>
                            <Navbar.Brand ><Link to='/'> <img src={logo} alt="" className='brand' /> </Link></Navbar.Brand>
                            <button className='navbar-toggler-collapsed navbar-toggler' aria-controls="navbar-light-example" type='button' data-bs-toggle="collapse" aria-expanded="false" aria-label="Toggle navigation"  data-bs-target="#navbar-light-example" >MENU</button>
                            <Navbar.Collapse id="navbar-light-example">
                                <Nav>
                                    <NavDropdown
                                        id="nav-dropdown-light-example"
                                        title="HOME"
                                        menuVariant="light"
                                    >
                                        <NavDropdown.Item > <Link to='/home'> Action </Link> </NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">
                                            Another action
                                        </NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action/3.4">
                                            Separated link
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                                <Nav>
                                    <NavDropdown
                                        id="nav-dropdown-light-example"
                                        title="PAGES"
                                        menuVariant="light"
                                    >
                                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">
                                            Another action
                                        </NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action/3.4">
                                            Separated link
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                                <Nav>
                                    <NavDropdown
                                        id="nav-dropdown-light-example"
                                        title="COURSES"
                                        menuVariant="light"
                                    >
                                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">
                                            Another action
                                        </NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action/3.4">
                                            Separated link
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                                <Nav>
                                    <NavDropdown
                                        id="nav-dropdown-light-example"
                                        title="MEGA MENU"
                                        menuVariant="light"
                                    >
                                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">
                                            Another action
                                        </NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action/3.4">
                                            Separated link
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                                <Nav>
                                    <NavDropdown
                                        id="nav-dropdown-light-example"
                                        title="BLOG"
                                        menuVariant="light"
                                    >
                                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">
                                            Another action
                                        </NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action/3.4">
                                            Separated link
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                                <Nav>
                                    <NavDropdown
                                        id="nav-dropdown-light-example"
                                        title="EVENTS"
                                        menuVariant="light"
                                    >
                                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">
                                            Another action
                                        </NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action/3.4">
                                            Separated link
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                                <Nav>
                                    <NavDropdown
                                        id="nav-dropdown-light-example"
                                        title="SHOP"
                                        menuVariant="light"
                                    >
                                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">
                                            Another action
                                        </NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action/3.4">
                                            Separated link
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                                <Nav>
                                    <NavDropdown
                                        id="nav-dropdown-light-example"
                                        title="CONTACT"
                                        menuVariant="light"
                                    >
                                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">
                                            Another action
                                        </NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action/3.4">
                                            Separated link
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>
                <div className='parts-container'>
                <div className='four_parts'>
                    <div className='ind_part1'>
                        <div className='part_img'><img src={pencil} alt="" /></div>
                        <div className='part_title'><h4>COURSES</h4></div>
                    </div>
                    <div className='ind_part2'>
                        <div className='part_img'><img src={cash} alt="" /></div>
                        <div className='part_title'><h4>PRICES</h4></div>
                    </div>
                    <div className='ind_part3'>
                        <div className='part_img'><img src={music} alt="" /></div>
                        <div className='part_title'><h4>EVENTS</h4></div>
                    </div>
                    <div className='ind_part4'>
                        <div className='part_img'><img src={hat} alt="" /></div>
                        <div className='part_title'><h4>TEACHERS</h4></div>
                    </div>
                </div>
                </div>
            </div>
        </>
    );
}

export default Navbarlight;