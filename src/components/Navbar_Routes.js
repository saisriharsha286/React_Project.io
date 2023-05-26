import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../comp_css/Navbar.css'
import logo from '../images/babykids.png'
import { Link } from 'react-router-dom'
import pic2 from '../images/pic2.png'



function NavbarRoutes() {
    return (
        <>
            <div className='navbarcont'>
                <div className='carouselp'>
                    <img src={pic2} alt="" />
                </div>
                <div className='navb'>
                    <div className='lineargrd'></div>
                    <Navbar variant="light" bg="light" expand="lg">
                        <Container fluid>
                            <Navbar.Brand ><Link to='/'> <img src={logo} alt="" className='brand' /> </Link></Navbar.Brand>
                            <Navbar.Toggle aria-controls="navbar-light-example" />
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
            </div>
        </>
    );
}

export default NavbarRoutes;