import React from 'react';
import { Button, Form, Row, Col, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

const ReportPage = () => {
    return (
        <div className="reportForm">

            {/* Placeholder for the input fields and the Checkboxes */}
            <nav className="breadCrumbs" aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="#">Home</a></li>
                    <li class="breadcrumb-item"><a href="#">Read</a></li>
                    <li class="breadcrumb-item active" aria-current="page"> Report</li>
                </ol>
            </nav>
            <div className="customCard">
                <div class="card-body">
                    <Container>
                        <h5 className="cardTitle">Reporting Person Details</h5>
                    </Container>
                </div>
            </div>
            <Container className="formBody">
                <Row>
                    <Form>
                        <Form.Group className="mb-3" controlId="formGridAddress1">
                            <Form.Label>Name</Form.Label>
                            <input type="text" value="" id="name" />
                            <Form.Control placeholder="Name..." />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGridAddress1">
                            <Form.Label>Organization</Form.Label>
                            <Form.Control placeholder="Organization..." />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGridAddress1">
                            <Form.Label>Address</Form.Label>
                            <Form.Control placeholder="Address..." />
                        </Form.Group>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Primary Contact No.</Form.Label>
                                <Form.Control type="email" placeholder="Enter Primary Contact No..." />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Email Address</Form.Label>
                                <Form.Control placeholder="Enter Email Address..." />
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Secondary Contact No.</Form.Label>
                                <Form.Control type="email" placeholder="Enter Secondary Contact No..." />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Alternative Email Address</Form.Label>
                                <Form.Control placeholder="Enter Alternate Email Address..." />
                            </Form.Group>
                        </Row>

                        {/* What Occured Section */}
                        <Form.Group><br />
                            <Form.Label className="mb-3">What Occured</Form.Label><br />
                            <div class="firstContainer">
                                <div class="row">
                                    <div class="col">
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="checkbox" value="" id="checkBoxWhat1" />
                                            <label class="form-check-label" for="checkBoxWhat1">
                                                Loss of service
                                    </label>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="checkbox" value="" id="checkBoxWhat2" />
                                            <label class="form-check-label" for="checkBoxWhat2">
                                                Human error
                                    </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="secondContainer">
                                <div class="row">
                                    <div class="col">
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="checkbox" value="" id="checkBoxWhat3" />
                                            <label class="form-check-label" for="checkBoxWhat3">
                                                Loss of equipment
                                    </label>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="checkbox" value="" id="checkBoxWhat4" />
                                            <label class="form-check-label" for="checkBoxWhat4">
                                                Bad application design
                                    </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="thirdContainer">
                                <div class="row">
                                    <div class="col">
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="checkbox" value="" id="checkBoxWhat5" />
                                            <label class="form-check-label" for="checkBoxWhat5">
                                                Loss of facility
                                    </label>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="checkbox" value="" id="checkBoxWhat6" />
                                            <label class="form-check-label" for="checkBoxWhat6">
                                                Compliance violations
                                    </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="fourthContainer">
                                <div class="row">
                                    <div class="col">
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="checkbox" value="" id="checkBoxWhat7" />
                                            <label class="form-check-label" for="checkBoxWhat7">
                                                System malfunction
                                    </label>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="checkbox" value="" id="checkBoxWhat8" />
                                            <label class="form-check-label" for="checkBoxWhat8">
                                                Access violations
                                    </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="fifthContainer">
                                <div class="row">
                                    <div class="col">
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="checkbox" value="" id="checkBoxWhat9" />
                                            <label class="form-check-label" for="checkBoxWhat">
                                                System overload
                                    </label>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="checkbox" value="" id="checkBoxWhat10" />
                                            <label class="form-check-label" for="checkBoxWhat10">
                                                Physical/security breach
                                    </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="sixthContainer">
                                <div class="row">
                                    <div class="col">
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="checkbox" value="" id="checkBoxWhat11" />
                                            <label class="form-check-label" for="checkBoxWhat11">
                                                Software malfunction
                                    </label>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="checkbox" value="" id="checkBoxWhat12" />
                                            <label class="form-check-label" for="checkBoxWhat12">
                                                Uncontrolled system changes
                                    </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="seventhContainer">
                                <div class="row">
                                    <div class="col">
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="checkbox" value="" id="checkBoxWhat13" />
                                            <label class="form-check-label" for="checkBoxWhat13">
                                                Intrusion attempt
                                    </label>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="checkbox" value="" id="checkBoxWhat14" />
                                            <label class="form-check-label" for="checkBox14">
                                                Others
                                    <Form.Control placeholder="Please Specify..." />
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Form.Group>

                        {/* How Occured Section */}
                        <Form.Group><br />
                            <Form.Label className="mb-3">How Occured</Form.Label><br />
                            <div class="firstContainer">
                                <div class="row">
                                    <div class="col">
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="checkbox" value="" id="checkBoxHow1" />
                                            <label class="form-check-label" for="checkBoxHow1">
                                                Theft
                                    </label>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="checkbox" value="" id="checkBoxHow2" />
                                            <label class="form-check-label" for="checkBoxHow2">
                                                Communication Failure
                                    </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="secondContainer">
                                <div class="row">
                                    <div class="col">
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="checkbox" value="" id="checkBoxHow3" />
                                            <label class="form-check-label" for="checkBoxHow3">
                                                Fraud
                                    </label>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="checkbox" value="" id="checkBoxHow4" />
                                            <label class="form-check-label" for="checkBoxHow4">
                                                Fire
                                    </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="thirdContainer">
                                <div class="row">
                                    <div class="col">
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="checkbox" value="" id="checkBoxHow5" />
                                            <label class="form-check-label" for="checkBoxHow5">
                                                Sabotage/Physical Damage
                                    </label>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="checkbox" value="" id="checkBoxHow6" />
                                            <label class="form-check-label" for="checkBoxHow6">
                                                Flood
                                    </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="fourthContainer">
                                <div class="row">
                                    <div class="col">
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="checkbox" value="" id="checkBoxHow7" />
                                            <label class="form-check-label" for="checkBoxHow7">
                                                Malicious Code
                                    </label>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="checkbox" value="" id="checkBoxHow8" />
                                            <label class="form-check-label" for="checkBoxHow8">
                                                Design Error
                                    </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="fifthContainer">
                                <div class="row">
                                    <div class="col">
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="checkbox" value="" id="checkBoxHow9" />
                                            <label class="form-check-label" for="checkBoxHow9">
                                                Hacking/Logical Infiltration
                                    </label>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="checkbox" value="" id="checkBoxHow10" />
                                            <label class="form-check-label" for="checkBoxHow10">
                                                User Error
                                    </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="sixthContainer">
                                <div class="row">
                                    <div class="col">
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="checkbox" value="" id="checkBoxHow11" />
                                            <label class="form-check-label" for="checkBoxHow11">
                                                Misuse of Resources
                                    </label>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="checkbox" value="" id="checkBoxHow12" />
                                            <label class="form-check-label" for="checkBoxHow12">
                                                Operations Error
                                    </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="seventhContainer">
                                <div class="row">
                                    <div class="col">
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="checkbox" value="" id="checkBoxHow13" />
                                            <label class="form-check-label" for="checkBoxHow13">
                                                Hardware Failure
                                    </label>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="checkbox" value="" id="checkBoxHow14" />
                                            <label class="form-check-label" for="checkBoxHow14">
                                                Software Maintenance Error
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="eighthContainer">
                                <div class="row">
                                    <div class="col">
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="checkbox" value="" id="checkBoxHow15" />
                                            <label class="form-check-label" for="checkBoxHow15">
                                                Software Failure
                                    </label>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="checkbox" value="" id="checkBoxHow16" />
                                            <label class="form-check-label" for="checkBoxHow16">
                                                Third Party Services
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="ninthContainer">
                                <div class="row">
                                    <div class="col">
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="checkbox" value="" id="checkBoxHow17" />
                                            <label class="form-check-label" for="checkBoxHow17">
                                                Hardware Maintenance Error
                                    </label>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="checkbox" value="" id="checkBoxHow18" />
                                            <label class="form-check-label" for="checkBoxHow18">
                                                Others
                                                <Form.Control placeholder="Please Specify..." />
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Form.Group>

                        {/* Why Occured Section */}
                        <Form.Group><br />
                            <Form.Label className="mb-3">Why Occured</Form.Label><br />
                            <div class="firstContainer">
                                <div class="row">
                                    <div class="col">
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="checkbox" value="" id="checkBoxWhy1" />
                                            <label class="form-check-label" for="checkBoxWhy1">
                                                Deliberate or International
                                    </label>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="checkbox" value="" id="checkBoxWhy2" />
                                            <label class="form-check-label" for="checkBoxWhy2">
                                                Others
                                            <Form.Control placeholder="Please Specify..." />
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="secondContainer">
                                <div class="row">
                                    <div class="col">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="checkBoxWhy3" />
                                            <label class="form-check-label" for="checkBoxWhy3">
                                                Actual Attack
                                    </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="thirdContainer">
                                <div class="row">
                                    <div class="col">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="checkBoxWhy3" />
                                            <label class="form-check-label" for="checkBoxWhy3">
                                                Accidental
                                        </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Form.Group>

                        {/* Summary Section */}
                        <Form.Group className=".form-control-lg"><br />
                            <div class="mb-3">
                                <label for="formContro" className="mb-3">Brief summary report</label>
                                <textarea class="form-control" id="FormControlTextarea" rows="4"></textarea>
                            </div>
                        </Form.Group>

                        {/* Component Affected Section */}

                        <Form.Group><br />
                            <Form.Label className="mb-3">Component Affected</Form.Label><br />
                            <div class="firstContainer">
                                <div class="row">
                                    <div class="col">
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="checkbox" value="" id="checkBoxAffected1" />
                                            <label class="form-check-label" for="checkBoxAffected1">
                                                People/Organization
                                    </label>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="checkbox" value="" id="checkBoxAffected2" />
                                            <label class="form-check-label" for="checkBoxAffected2">
                                                Information
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="secondContainer">
                                <div class="row">
                                    <div class="col">
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="checkbox" value="" id="checkBoxAffected3" />
                                            <label class="form-check-label" for="checkBoxAffected3">
                                                Hardware
                                    </label>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="checkbox" value="" id="checkBoxAffected4" />
                                            <label class="form-check-label" for="checkBoxAffected4">
                                                Services
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="thirdContainer">
                                <div class="row">
                                    <div class="col">
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="checkbox" value="" id="checkBoxAffected4" />
                                            <label class="form-check-label" for="checkBoxAffected4">
                                                Software
                                    </label>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="checkbox" value="" id="checkBoxAffected5" />
                                            <label class="form-check-label" for="checkBoxAffected5">
                                                Legal or Regulatory Obligations
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="fourthContainer">
                                <div class="row">
                                    <div class="col">
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="checkbox" value="" id="checkBoxAffected6" />
                                            <label class="form-check-label" for="checkBoxAffected6">
                                                Resources
                                    </label>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="checkbox" value="" id="checkBoxAffected7" />
                                            <label class="form-check-label" for="checkBoxAffected7">
                                                Others
                                                <Form.Control placeholder="Please Specify..." />
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </Form.Group>

                        {/* Adverse Business Impacts */}
                        <Form.Group><br />
                            <Form.Label className="mb-3">Adverse Business Impacts</Form.Label>
                            <div class="firstContainer">
                                <div class="row">
                                    <div class="col">
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="checkbox" value="" id="checkBoxAdverse1" />
                                            <label class="form-check-label" for="checkBoxAdverse1">
                                                Financial Loss
                                    </label>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="checkbox" value="" id="checkBoxAdverse2" />
                                            <label class="form-check-label" for="checkBoxAdverse2">
                                                Management and Business Operations
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="secondContainer">
                                <div class="row">
                                    <div class="col">
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="checkbox" value="" id="checkBoxAdverse3" />
                                            <label class="form-check-label" for="checkBoxAdverse3">
                                                Personal Information
                                    </label>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="checkbox" value="" id="checkBoxAdverse4" />
                                            <label class="form-check-label" for="checkBoxAdverse4">
                                                Disruption to Business Operations
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="thirdContainer">
                                <div class="row">
                                    <div class="col">
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="checkbox" value="" id="checkBoxAdverse5" />
                                            <label class="form-check-label" for="checkBoxAdverse5">
                                                Loss of Goodwill
                                    </label>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="checkbox" value="" id="checkBoxAdverse6" />
                                            <label class="form-check-label" for="checkBoxAdverse6">
                                                Commercial and Economic Interests
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="fourthContainer">
                                <div class="row">
                                    <div class="col">
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="checkbox" value="" id="checkBoxAdverse7" />
                                            <label class="form-check-label" for="checkBoxAdverse7">
                                                Loss of Reputation
                                    </label>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="checkbox" value="" id="checkBoxAdverse8" />
                                            <label class="form-check-label" for="checkBoxAdverse8">
                                                Others
                                                <Form.Control placeholder="Please Specify..." />
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="fifthContainer">
                                <div class="row">
                                    <div class="col">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="checkBoxAdverse9" />
                                            <label class="form-check-label" for="checkBoxAdverse9">
                                                Legal and Regulatory Obligations
                                    </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Form.Group>

                        {/* Vulnerabilities Identified */}
                        <Form.Group><br />
                            <Form.Label className="mb-3">Vulnerabilities Identified</Form.Label>
                            <div class="firstContainer">
                                <div class="row">
                                    <div class="col">
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="checkbox" value="" id="checkBoxVulnerability1" />
                                            <label class="form-check-label" for="checkBoxVulnerability1">
                                                Information
                                    </label>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="checkbox" value="" id="checkBoxVulnerability2" />
                                            <label class="form-check-label" for="checkBoxVulnerability2">
                                                Reputation and image
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="secondContainer">
                                <div class="row">
                                    <div class="col">
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="checkbox" value="" id="checkBoxVulnerability3" />
                                            <label class="form-check-label" for="checkBoxVulnerability3">
                                                People
                                    </label>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="checkbox" value="" id="checkBoxVulnerability4" />
                                            <label class="form-check-label" for="checkBoxVulnerability4">
                                                Processes, procedures policies, guidelines
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="thirdContainer">
                                <div class="row">
                                    <div class="col">
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="checkbox" value="" id="checkBoxVulnerability5" />
                                            <label class="form-check-label" for="checkBoxVulnerability5">
                                                Physical (e.g. Hardware)
                                    </label>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="checkbox" value="" id="checkBoxVulnerability6" />
                                            <label class="form-check-label" for="checkBoxVulnerability6">
                                                Services
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="fourthContainer">
                                <div class="row">
                                    <div class="col">
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="checkbox" value="" id="checkBoxVulnerability7" />
                                            <label class="form-check-label" for="checkBoxVulnerability7">
                                                Software (e.g. computer program)
                                    </label>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="checkbox" value="" id="checkBoxVulnerability8" />
                                            <label class="form-check-label" for="checkBoxVulnerability8">
                                                Others
                                                <Form.Control placeholder="Please Specify..." />
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Form.Group>


                        {/* Info Sec Event Details */}

                        <Form.Group><br />
                            <div class="container">
                                <div class="row">
                                    <div class="col">
                                        <Form.Label className="mb-3">Date the Event Occured</Form.Label>
                                        <Form.Control placeholder="" />
                                    </div>
                                    <div class="col">
                                        <Form.Label className="mb-3">Time the Event Occured</Form.Label>
                                        <Form.Control placeholder="" />
                                    </div>
                                </div>
                            </div>
                        </Form.Group>

                        <Form.Group><br />
                            <div class="container">
                                <div class="row">
                                    <div class="col">
                                        <Form.Label className="mb-3">Date the Event was Discovered</Form.Label>
                                        <Form.Control placeholder="" />
                                    </div>
                                    <div class="col">
                                        <Form.Label className="mb-3">Time the event was Discovered</Form.Label>
                                        <Form.Control placeholder="" />
                                    </div>
                                </div>
                            </div>
                        </Form.Group>

                        <Form><br />
                            <Form.Label className="mb-3">Is the Event Over?</Form.Label>

                            {['radio'].map((type) => (
                                <div key={`inline-${type}`}>

                                    <Form.Check
                                        inline
                                        label="Yes"
                                        name="group1"
                                        type={type}
                                        id={`inline-${type}-1`}
                                    />
                                    <Form.Check
                                        inline
                                        label="No"
                                        name="group1"
                                        type={type}
                                        id={`inline-${type}-2`}
                                    />
                                </div>
                            ))}
                        </Form>

                        <Form.Group><br />
                            <div class="container">
                                <div class="row">
                                    <div class="col">
                                        <Form.Label className="mb-3">Date the Event ended</Form.Label>
                                        <Form.Control placeholder="" />
                                    </div>
                                    <div class="col">
                                        <Form.Label className="mb-3">Time the Event ended</Form.Label>
                                        <Form.Control placeholder="" />
                                    </div>
                                </div>
                            </div>
                        </Form.Group>

                        {/* Submit Button */}
                        <button type="submit" classname="submitBtn">Submit</button>
                    </Form>
                </Row>
            </Container>
        </div>
    )
}

export default ReportPage;

