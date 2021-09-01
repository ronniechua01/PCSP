import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import Home from './Home';
import AboutUs from './AboutUs';
import ReportPage from '../ReportPage/ReportPage';

export default class NavbarComp extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Navbar bg="dark" variant={"dark"} expand="lg">
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
                                    <NavDropdown.Item href="#action3">Topics</NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">Valorant 1 g l</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link as={Link} to="/about">About Us</Nav.Link>
                            </Nav>
                            <Form className="d-flex">
                                <FormControl
                                    type="search"
                                    placeholder="Search"
                                    className="mr-2"
                                    aria-label="Search"
                                />
                                
                            </Form>
                            {/* Report Here Button */}
                            <Button className="reportBtn" as={Link} to="/report">Report Here</Button>
                        </Navbar.Collapse>
                    </Navbar>
                </div>

                {/* Links to other pages */}
                <div>
                    <Switch>
                        <Route path="/home">
                            <Home/>
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


// $nav-tabs-border-color:             $blue-800;
// $nav-tabs-border-width:             $border-width;
// $nav-tabs-border-radius:            $border-radius;
// $nav-tabs-link-hover-border-color:  $gray-200 $gray-200 $nav-tabs-border-color;
// $nav-tabs-link-active-color:        $gray-700;
// $nav-tabs-link-active-bg:           $body-bg;
// $nav-tabs-link-active-border-color: $gray-300 $gray-300 $nav-tabs-link-active-bg;

// $nav-pills-border-radius:           $border-radius;
// $nav-pills-link-active-color:       $component-active-color;
// $nav-pills-link-active-bg:          $component-active-bg;

{/* <Navbar class="navbar navbar-expand-sm bg-primary navbar-dark"> */}