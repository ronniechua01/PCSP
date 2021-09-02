import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import HomePage from '../HomePage/HomePage';
import AboutUs from '../AboutUsPage/AboutUs';
import ReportPage from '../ReportPage/ReportPage';

import './NavbarComp.css';

export default class NavbarComp extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Navbar variant="dark" expand="lg" className="NavbarComp">
                        <Navbar.Brand href="#">PCSP</Navbar.Brand>
                        <Navbar.Brand href="#">Philippine Cyber Security Portal</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="mr-auto my-2 my-lg-0"
                                style={{ maxHeight: '154px' }}
                                navbarScroll
                            >
                                <Nav.Link as={Link} to="/home">Home</Nav.Link>
                                <NavDropdown title="Resources" id="navbarScrollingDropdown">
                                    <NavDropdown.Item href="#action3">Cyber Security Topics</NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">News and Updates</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link as={Link} to="/about">About Us</Nav.Link>
                            </Nav>
                            {/* Search Bar */}
                            <Form className="d-flex">
                                <FormControl
                                    type="search"
                                    placeholder="Search"
                                    className="mr-2"
                                    aria-label="Search"
                                />
                            </Form>

                            {/* Report Here Button */}
                            <Button className="ReportButton" as={Link} to="/report">Report Here</Button>
                        </Navbar.Collapse>
                    </Navbar>
                </div>

                {/* Links to other pages */}
                <div>
                    <Switch>
                        <Route path="/home">
                            <HomePage/>
                        </Route>
                        <Route path="/about">
                            <AboutUs/>
                        </Route>
                        <Route path="/report">
                            <ReportPage/>
                        </Route>
                    </Switch>
                </div>
            </Router>
        )
    }
}




