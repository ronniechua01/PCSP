import React, { Component, useState } from 'react';
import { TextField, Button, Typography, Paper, Container, Checkbox, FormControl, FormControlLabel, FormLabel, FormGroup, Grid, RadioGroup, Radio } from '@material-ui/core';

//Date and Time Picker from Material UI Dependencies
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardTimePicker, KeyboardDatePicker, DatePicker, TimePicker } from '@material-ui/pickers';

//CSS File
import './ReportPage.css';

class ReportPage extends Component {

	constructor(props) {
		super(props)

		//PLACEHOLDERS //INITIAL VALUE 
		this.state = {
			//REPORTING PERSON DETAILS (textBox)
			name: '',
			organization: '',
			address: '',
			primaryContact: '',
			email: '',
			secondaryContact: '',
			alternativeEmail: '',

			//WHAT OCCURED SECTION
			lossOfService: false,
			humanError: false,
			lossOfEquipment: false,
			badApplicationDesign: false,
			lossOfFacility: false,
			complianceViolations: false,
			systemMalfunction: false,
			accessViolation: false,
			systemOverload: false,
			physicalSecurityBreach: false,
			softwareMalfunction: false,
			uncontrolledSystemChanges: false,
			intrusionAttempt: false,
			others1Check: false,
			others1Text: "",

			//HOW OCCURED
			theft: false,
			communicationFailure: false,
			fraud: false,
			fire: false,
			sabotagePhysicalDamage: false,
			flood: false,
			maliciousCode: false,
			designError: false,
			hackingLogicalInfiltration: false,
			userError: false,
			misuseOfResources: false,
			operationsError: false,
			hardwareFailure: false,
			softwareMaintenanceError: false,
			softwareFailure: false,
			thirdPartyServices: false,
			hardwareMaintenanceError: false,
			others2Check: false,
			others2Text: "",

			//WHY OCCURED
			deliberateIntentional: false,
			others3Check: false,
			others3Text: "",
			actualAttack: false,
			accidental: false,

			briefSummary: "",

			//Component Affected Section
			peopleOrg: false,
			hardware: false,
			software: false,
			resources: false,
			information: false,
			services: false,
			legal: false,
			others4Check: false,
			others4Text: "",

			//Adverse Business Impacts
			financialLoss: false,
			personalInformation: false,
			lossOfGoodWill: false,
			lossOfReputation: false,
			legalAndRegulatory: false,
			managementAndBusiness: false,
			disruptionToBusiness: false,
			commercialAndEcons: false,
			others5Check: false,
			others5Text: "",

			//Vulnerabilities Identified
			informationVulnerability: false,
			people: false,
			physical: false,
			sofwareVulnerability: false,
			reputationAndImage: false,
			processesProcedures: false,
			servicesVulnerability: false,
			others6Check: false,
			others6Text: "",

			//INFO SEC EVENT DETAILS (DateTime)
			dateOccured: new Date(),
			timeOccured: new Date(),
			dateDiscovered: new Date(),
			timeDiscovered: new Date(),

			radButton:'',


			dateEnded: new Date(),
			timeEnded: new Date(),
		}
		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleCheckBox = this.handleCheckBox.bind(this)
		this.handleDateOccuredChange = this.handleDateOccuredChange.bind(this)
		this.handleTimeOccuredChange = this.handleTimeOccuredChange.bind(this)
		this.handleDateDiscoveredChange = this.handleDateDiscoveredChange.bind(this)
		this.handleTimeDiscoveredChange = this.handleTimeDiscoveredChange.bind(this)
		this.handleDateEndedChange = this.handleDateEndedChange.bind(this)
		this.handleTimeEndedChange = this.handleTimeEndedChange.bind(this)
		this.handleRadioButton = this.handleRadioButton.bind(this)
	}

	// NANDITO YUNG DATA (ITO YUNG IRERETRIEVE NYO SA BACK-END)
	handleSubmit(event) {
		const {
			//First Section
			name,
			organization,
			address,
			primaryContact,
			email,
			secondaryContact,
			alternativeEmail,

			//CheckBox (What)
			lossOfService,
			humanError,
			lossOfEquipment,
			badApplicationDesign,
			lossOfFacility,
			complianceViolations,
			systemMalfunction,
			accessViolation,
			systemOverload,
			physicalSecurityBreach,
			softwareMalfunction,
			uncontrolledSystemChanges,
			intrusionAttempt,
			others1Check,
			others1Text,

			//CheckBox (How)
			theft,
			communicationFailure,
			fraud,
			fire,
			sabotagePhysicalDamage,
			flood,
			maliciousCode,
			designError,
			hackingLogicalInfiltration,
			userError,
			misuseOfResources,
			operationsError,
			hardwareFailure,
			softwareMaintenanceError,
			softwareFailure,
			thirdPartyServices,
			hardwareMaintenanceError,
			others2Check,
			others2Text,

			//CheckBox (Why)
			deliberateIntentional,
			others3Check,
			others3Text,
			actualAttack,
			accidental,

			//Summary
			briefSummary,

			//Component Affected Section
			peopleOrg,
			hardware,
			software,
			resources,
			information,
			services,
			legal,
			others4Check,
			others4Text,

			//Adverse Business Impacts
			financialLoss,
			personalInformation,
			lossOfGoodWill,
			lossOfReputation,
			legalAndRegulatory,
			managementAndBusiness,
			disruptionToBusiness,
			commercialAndEcons,
			others5Check,
			others5Text,

			//Vulnerabilities Identified
			informationVulnerability,
			people,
			physical,
			sofwareVulnerability,
			reputationAndImage,
			processesProcedures,
			servicesVulnerability,
			others6Check,
			others6Text,

			//Date and Time Occurence
			dateOccured,
			timeOccured,

			//Date and Time Discovery
			dateDiscovered,
			timeDiscovered,

			//Radio Button
			radButton,


			//Date Event Ended
			dateEnded,
			timeEnded,


		} = this.state
		event.preventDefault()
		//PARA SA CONSOLE LANG
		console.log(
			//first section
			name,"\n",
			organization,"\n",
			address,"\n",
			primaryContact,"\n",
			email,"\n",
			secondaryContact,"\n",
			alternativeEmail,"\n",

			//CheckBox (What)
			lossOfService,"\n",
			humanError,"\n",
			lossOfEquipment,"\n",
			badApplicationDesign,"\n",
			lossOfFacility,"\n",
			complianceViolations,"\n",
			systemMalfunction,"\n",
			accessViolation,"\n",
			systemOverload,"\n",
			physicalSecurityBreach,"\n",
			softwareMalfunction,"\n",
			uncontrolledSystemChanges,"\n",
			intrusionAttempt,"\n",
			others1Check,"\n",
			others1Text,"\n",

			//CheckBox (How)
			theft,"\n",
			communicationFailure,"\n",
			fraud,"\n",
			fire,"\n",
			sabotagePhysicalDamage,"\n",
			flood,"\n",
			maliciousCode,"\n",
			designError,"\n",
			hackingLogicalInfiltration,"\n",
			userError,"\n",
			misuseOfResources,"\n",
			operationsError,"\n",
			hardwareFailure,"\n",
			softwareMaintenanceError,"\n",
			softwareFailure,"\n",
			thirdPartyServices,"\n",
			hardwareMaintenanceError,"\n",
			others2Check,"\n",
			others2Text,"\n",

			//CheckBox (Why)
			deliberateIntentional,"\n",
			others3Check,"\n",
			others3Text,"\n",
			actualAttack,"\n",
			accidental,"\n",

			//Summary
			briefSummary,"\n",

			//Component Affected Section
			peopleOrg,"\n",
			hardware,"\n",
			software,"\n",
			resources,"\n",
			information,"\n",
			services,"\n",
			legal,"\n",
			others4Check,"\n",
			others4Text,"\n",

			//Adverse Business Impacts
			financialLoss,"\n",
			personalInformation,"\n",
			lossOfGoodWill,"\n",
			lossOfReputation,"\n",
			legalAndRegulatory,"\n",
			managementAndBusiness,"\n",
			disruptionToBusiness,"\n",
			commercialAndEcons,"\n",
			others5Check,"\n",
			others5Text,"\n",

			//Vulnerabilities Identified
			informationVulnerability,"\n",
			people,"\n",
			physical,"\n",
			sofwareVulnerability,"\n",
			reputationAndImage,"\n",
			processesProcedures,"\n",
			servicesVulnerability,"\n",
			others6Check,"\n",
			others6Text,"\n",

			//Date and Time Occurence
			//Note: You can convert date to string to only get date or time alone
			dateOccured.toLocaleDateString(),"\n",
			timeOccured.toLocaleTimeString(),"\n",

			//Date and Time Discovery
			//Note: You can convert date to string to only get date or time alone
			dateDiscovered.toLocaleDateString(),"\n",
			timeDiscovered.toLocaleTimeString(),"\n",

			//Radio Button
			radButton,"\n",

			//Date Event Ended
			//Note: You can convert date to string to only get date or time alone
			dateEnded.toLocaleDateString(),"\n",
			timeEnded.toLocaleTimeString(),
		)
	}

	handleCheckBox(event, isChecked) {
		console.log(isChecked, event.target.name)
		this.setState({ [event.target.name]: isChecked })

	}

	handleChange(event) {
		//Pass value to event name to store data (applies to all handlers)
		this.setState({ [event.target.name]: event.target.value })
	}

	handleDateOccuredChange = (date) => {
		console.log(date)
		this.setState({dateOccured: date})
	}

	handleTimeOccuredChange = (time) => {
		console.log(time)
		this.setState({timeOccured: time})
	}

	handleDateDiscoveredChange = (date) => {
		console.log(date)
		this.setState({dateDiscovered: date})
	}

	handleTimeDiscoveredChange = (time) => {
		console.log(time)
		this.setState({timeDiscovered: time})
	}

	handleDateEndedChange = (date) => {
		console.log(date)
		this.setState({dateEnded: date})
	}

	handleTimeEndedChange = (time) => {
		console.log(time)
		this.setState({timeEnded: time})
	}
	
	handleRadioButton(event, value){
		this.setState({[event.target.name]: event.target.value})
	}

	// DITO ILALAGAY YUNG IDADAGDAG NA FORMS (change value to {this.state.name})
	render() {
		return (

			<form onSubmit={this.handleSubmit}>

				{/* Title Card */}
				<div class="card-body" className="TitleCardBackground">
					<Container className="TitleCard">
						<h5>Reporting Person Details</h5>
					</Container>
				</div>

				{/* Reporting Person Details Input Fields */}
				<Container classname="ReportForm">
					<div className="InputField">
						<TextField
							name="name"
							variant="filled"
							label="Name"
							value={this.state.name}
							fullWidth
							required
							onChange={this.handleChange}
						/>
					</div>
					<div className="InputField">
						<TextField
							name="organization"
							variant="filled"
							label="Organization"
							value={this.state.organization}
							fullWidth
							onChange={this.handleChange}
						/>
					</div>
					<div className="InputField">
						<TextField
							name="address"
							variant="filled"
							label="Address"
							value={this.state.address}
							fullWidth
							onChange={this.handleChange}
						/>
					</div>
					<Grid container spacing={1}>
						<Grid item xs={6}>
							<div>
								<TextField
									name="primaryContact"
									variant="filled"
									label="Primary Contact No."
									value={this.state.primaryContact}
									fullWidth
									onChange={this.handleChange}
								/>
							</div>
						</Grid>
						<Grid item xs={6}>
							<div>
								<TextField
									name="email"
									variant="filled"
									label="Email Address"
									value={this.state.email}
									fullWidth
									onChange={this.handleChange}
								/>
							</div>
						</Grid>
						<Grid item xs={6}>
							<div className="InputField">
								<TextField
									name="secondaryContact"
									variant="filled"
									label="Secondary Contact No."
									value={this.state.secondaryContact}
									fullWidth
									onChange={this.handleChange}
								/>
							</div>
						</Grid>
						<Grid item xs={6}>
							<div className="InputField">
								<TextField
									name="alternativeEmail"
									variant="filled"
									label="Alternative Email Address"
									value={this.state.alternativeEmail}
									fullWidth
									onChange={this.handleChange}
								/>
							</div>
						</Grid>
					</Grid>
				</Container>
				<div class="card-body" className="TitleCardBackground">
					<Container className="TitleCard">
						<h5>Information Security Event Description</h5>
					</Container>
				</div><br />
				<Container classname="ReportForm">
					{/* CHECKBOX SECTION */}
					{/* Title Card */}

					<h5>Description of the Event</h5><br />
					<h6>What Occured?</h6>

					<Grid container spacing={0.01}>
						<Grid item xs={6}>
							<FormControlLabel
								name="lossOfService"
								value={this.state.lossOfService}
								onChange={this.handleCheckBox}
								control={<Checkbox color="primary" />}
								label="Loss of Service"
								labelPlacement="end"
							/>
						</Grid>
						<Grid item xs={6}>
							<FormControlLabel
								name="humanError"
								value={this.state.humanError}
								onChange={this.handleCheckBox}
								control={<Checkbox color="primary" />}
								label="Human Error"
								labelPlacement="end"
							/>
						</Grid>
						<Grid item xs={6}>
							<FormControlLabel
								name="lossOfEquipment"
								value={this.state.lossOfEquipment}
								onChange={this.handleCheckBox}
								control={<Checkbox color="primary" />}
								label="Loss of Equipment"
								labelPlacement="end"
							/>
						</Grid>
						<Grid item xs={6}>
							<FormControlLabel
								name="badApplicationDesign"
								value={this.state.badApplicationDesign}
								onChange={this.handleCheckBox}
								control={<Checkbox color="primary" />}
								label="Bad Application Design"
								labelPlacement="end"
							/>
						</Grid>
						<Grid item xs={6}>
							<FormControlLabel
								name="lossOfFacility"
								value={this.state.lossOfFacility}
								onChange={this.handleCheckBox}
								control={<Checkbox color="primary" />}
								label="Loss of Facility"
								labelPlacement="end"
							/>
						</Grid>
						<Grid item xs={6}>
							<FormControlLabel
								name="complianceViolations"
								value={this.state.complianceViolations}
								onChange={this.handleCheckBox}
								control={<Checkbox color="primary" />}
								label="Compliance Violations"
								labelPlacement="end"
							/>
						</Grid>
						<Grid item xs={6}>
							<FormControlLabel
								name="systemMalfunction"
								value={this.state.systemMalfunction}
								onChange={this.handleCheckBox}
								control={<Checkbox color="primary" />}
								label="System Malfunction"
								labelPlacement="end"
							/>
						</Grid>
						<Grid item xs={6}>
							<FormControlLabel
								name="accessViolation"
								value={this.state.accessViolation}
								onChange={this.handleCheckBox}
								control={<Checkbox color="primary" />}
								label="Access Violations"
								labelPlacement="end"
							/>
						</Grid>
						<Grid item xs={6}>
							<FormControlLabel
								name="systemOverload"
								value={this.state.systemOverload}
								onChange={this.handleCheckBox}
								control={<Checkbox color="primary" />}
								label="System Overload"
								labelPlacement="end"
							/>
						</Grid>
						<Grid item xs={6}>
							<FormControlLabel
								name="physicalSecurityBreach"
								value={this.state.physicalSecurityBreach}
								onChange={this.handleCheckBox}
								control={<Checkbox color="primary" />}
								label="Physical/Security Breac"
								labelPlacement="end"
							/>
						</Grid>
						<Grid item xs={6}>
							<FormControlLabel
								name="softwareMalfunction"
								value={this.state.softwareMalfunction}
								onChange={this.handleCheckBox}
								control={<Checkbox color="primary" />}
								label="Software Malfunction"
								labelPlacement="end"
							/>
						</Grid>
						<Grid item xs={6}>
							<FormControlLabel
								name="uncontrolledSystemChanges"
								value={this.state.uncontrolledSystemChanges}
								onChange={this.handleCheckBox}
								control={<Checkbox color="primary" />}
								label="Uncontrolled System Changes"
								labelPlacement="end"
							/>
						</Grid>
						<Grid item xs={6}>
							<FormControlLabel
								name="intrusionAttempt"
								value={this.state.intrusionAttempt}
								onChange={this.handleCheckBox}
								control={<Checkbox color="primary" />}
								label="Intrusion Attempt"
								labelPlacement="end"
							/>
						</Grid>
						<Grid item xs={6}>
							<div>
								<FormControlLabel
									name="others1Check"
									value={this.state.others1Check}
									onChange={this.handleCheckBox}
									control={<Checkbox color="primary" />}
									label="Others"
									labelPlacement="end"
								/>
								<TextField
									name="others1Text"
									value={this.state.others1Text}
									onChange={this.handleChange}
								/>

							</div>
						</Grid>
					</Grid>

					<br /><h6>How it Occured?</h6>





					{/* How Occured */}
					<Grid container spacing={0.01}>
						<Grid item xs={6}>

							<FormControlLabel
								name="theft"
								value={this.state.theft}
								onChange={this.handleCheckBox}
								control={<Checkbox color="primary" />}
								label="Theft"
								labelPlacement="end"
							/>
						</Grid>
						<Grid item xs={6}>
							<FormControlLabel
								name="communicationFailure"
								value={this.state.communicationFailure}
								onChange={this.handleCheckBox}
								control={<Checkbox color="primary" />}
								label="Communication Failure"
								labelPlacement="end"
							/>
						</Grid>
						<Grid item xs={6}>
							<FormControlLabel
								name="fraud"
								value={this.state.fraud}
								onChange={this.handleCheckBox}
								control={<Checkbox color="primary" />}
								label="Fraud"
								labelPlacement="end"
							/>
						</Grid>
						<Grid item xs={6}>
							<FormControlLabel
								name="fire"
								value={this.state.fire}
								onChange={this.handleCheckBox}
								control={<Checkbox color="primary" />}
								label="Fire"
								labelPlacement="end"
							/>
						</Grid>
						<Grid item xs={6}>
							<FormControlLabel
								name="sabotagePhysicalDamage"
								value={this.state.sabotagePhysicalDamage}
								onChange={this.handleCheckBox}
								control={<Checkbox color="primary" />}
								label="Sabotage/Physical Damage"
								labelPlacement="end"
							/>
						</Grid>
						<Grid item xs={6}>
							<FormControlLabel
								name="flood"
								value={this.state.flood}
								onChange={this.handleCheckBox}
								control={<Checkbox color="primary" />}
								label="Flood"
								labelPlacement="end"
							/>
						</Grid>
						<Grid item xs={6}>
							<FormControlLabel
								name="maliciousCode"
								value={this.state.maliciousCode}
								onChange={this.handleCheckBox}
								control={<Checkbox color="primary" />}
								label="Malicious Code"
								labelPlacement="end"
							/>
						</Grid>
						<Grid item xs={6}>
							<FormControlLabel
								name="designError"
								value={this.state.designError}
								onChange={this.handleCheckBox}
								control={<Checkbox color="primary" />}
								label="Design Error"
								labelPlacement="end"
							/>
						</Grid>
						<Grid item xs={6}>
							<FormControlLabel
								name="hackingLogicalInfiltration"
								value={this.state.hackingLogicalInfiltration}
								onChange={this.handleCheckBox}
								control={<Checkbox color="primary" />}
								label="Hacking/Logica Infiltration"
								labelPlacement="end"
							/>
						</Grid>
						<Grid item xs={6}>
							<FormControlLabel
								name="userError"
								value={this.state.userError}
								onChange={this.handleCheckBox}
								control={<Checkbox color="primary" />}
								label="User Error"
								labelPlacement="end"
							/>
						</Grid>
						<Grid item xs={6}>
							<FormControlLabel
								name="misuseOfResources"
								value={this.state.misuseOfResources}
								onChange={this.handleCheckBox}
								control={<Checkbox color="primary" />}
								label="Misuse of Resources"
								labelPlacement="end"
							/>
						</Grid>
						<Grid item xs={6}>
							<FormControlLabel
								name="operationsError"
								value={this.state.operationsError}
								onChange={this.handleCheckBox}
								control={<Checkbox color="primary" />}
								label="Operations Error"
								labelPlacement="end"
							/>
						</Grid>
						<Grid item xs={6}>
							<FormControlLabel
								name="hardwareFailure"
								value={this.state.hardwareFailure}
								onChange={this.handleCheckBox}
								control={<Checkbox color="primary" />}
								label="Hardware Failure"
								labelPlacement="end"
							/>
						</Grid>
						<Grid item xs={6}>
							<FormControlLabel
								name="softwareMaintenanceError"
								value={this.state.softwareMaintenanceError}
								onChange={this.handleCheckBox}
								control={<Checkbox color="primary" />}
								label="Software Maintenance Error"
								labelPlacement="end"
							/>
						</Grid>
						<Grid item xs={6}>
							<FormControlLabel
								name="softwareFailure"
								value={this.state.softwareFailure}
								onChange={this.handleCheckBox}
								control={<Checkbox color="primary" />}
								label="Software Failure"
								labelPlacement="end"
							/>
						</Grid>
						<Grid item xs={6}>
							<FormControlLabel
								name="thirdPartyServices"
								value={this.state.thirdPartyServices}
								onChange={this.handleCheckBox}
								control={<Checkbox color="primary" />}
								label="Third Party Services"
								labelPlacement="end"
							/>
						</Grid>
						<Grid item xs={6}>
							<FormControlLabel
								name="hardwareMaintenanceError"
								value={this.state.hardwareMaintenanceError}
								onChange={this.handleCheckBox}
								control={<Checkbox color="primary" />}
								label="Hardware Maintenance Error"
								labelPlacement="end"
							/>
						</Grid>
						<Grid item xs={6}>
							<div>
								<FormControlLabel
									name="others2Check"
									value={this.state.others2Check}
									onChange={this.handleCheckBox}
									control={<Checkbox color="primary" />}
									label="Others"
									labelPlacement="end"
								/>
								<TextField
									name="others2Text"
									value={this.state.others2Text}
									onChange={this.handleChange}
								/>
							</div>

						</Grid>
					</Grid>



					{/* Why Occured Section */}
					<br /><h6>Why it Occured?</h6>
					<Grid container spacing={0.01}>
						<Grid item xs={6}>
							<FormControlLabel
								name="deliberateIntentional"
								value={this.state.deliberateIntentional}
								onChange={this.handleCheckBox}
								control={<Checkbox color="primary" />}
								label="Deliberate or Intentional"
								labelPlacement="end"
							/>
						</Grid>
						<Grid item xs={6}>
							<FormControlLabel
								name="actualAttack"
								value={this.state.actualAttack}
								onChange={this.handleCheckBox}
								control={<Checkbox color="primary" />}
								label="Actual Attack"
								labelPlacement="end"
							/>
						</Grid>
						<Grid item xs={6}>
							<FormControlLabel
								name="accidental"
								value={this.state.accidental}
								onChange={this.handleCheckBox}
								control={<Checkbox color="primary" />}
								label="Accidental"
								labelPlacement="end"
							/>
						</Grid>
						<Grid item xs={6}>
							<div>
								<FormControlLabel
									name="others3Check"
									value={this.state.others3Check}
									onChange={this.handleCheckBox}
									control={<Checkbox color="primary" />}
									label="Others"
									labelPlacement="end"
								/>
								<TextField
									name="others3Text"
									value={this.state.others3Text}
									onChange={this.handleChange}
								/>
							</div>
						</Grid>
					</Grid>
					<br /><h6>Brief Summary Report</h6>

					{/* Summary Report */}
					<Grid container spacing={1}>
						<Grid item xs={10}>
							<TextField
								name="briefSummary"
								label="Write here"
								value={this.state.briefSummary}
								onChange={this.handleChange}
								variant="filled"
								fullWidth
								multiline
							/>
						</Grid>
					</Grid>

					<br /><h6>Components Affected Sections</h6>
					{/* Components Affected */}
					<Grid container spacing={0.01}>
						<Grid item xs={6}>
							<FormControlLabel
								name="peopleOrg"
								value={this.state.peopleOrg}
								onChange={this.handleCheckBox}
								control={<Checkbox color="primary" />}
								label="People/Organization"
								labelPlacement="end"
							/>
						</Grid>
						<Grid item xs={6}>
							<FormControlLabel
								name="information"
								value={this.state.information}
								onChange={this.handleCheckBox}
								control={<Checkbox color="primary" />}
								label="Information"
								labelPlacement="end"
							/>
						</Grid>
						<Grid item xs={6}>
							<FormControlLabel
								name="hardware"
								value={this.state.hardware}
								onChange={this.handleCheckBox}
								control={<Checkbox color="primary" />}
								label="Hardware"
								labelPlacement="end"
							/>
						</Grid>
						<Grid item xs={6}>
							<FormControlLabel
								name="services"
								value={this.state.services}
								onChange={this.handleCheckBox}
								control={<Checkbox color="primary" />}
								label="Services"
								labelPlacement="end"
							/>
						</Grid>
						<Grid item xs={6}>
							<FormControlLabel
								name="software"
								value={this.state.software}
								onChange={this.handleCheckBox}
								control={<Checkbox color="primary" />}
								label="Software"
								labelPlacement="end"
							/>
						</Grid>
						<Grid item xs={6}>
							<FormControlLabel
								name="legalAndRegulatory"
								value={this.state.legalAndRegulatory}
								onChange={this.handleCheckBox}
								control={<Checkbox color="primary" />}
								label="Legal or Regulatory Obligations"
								labelPlacement="end"
							/>
						</Grid>
						<Grid item xs={6}>
							<FormControlLabel
								name="resources"
								value={this.state.resources}
								onChange={this.handleCheckBox}
								control={<Checkbox color="primary" />}
								label="Resources"
								labelPlacement="end"
							/>
						</Grid>
						<Grid item xs={6}>
							<div>
								<FormControlLabel
									name="others4Check"
									value={this.state.others4Check}
									onChange={this.handleCheckBox}
									control={<Checkbox color="primary" />}
									label="Other"
									labelPlacement="end"
								/>
								<TextField
									name="others4Text"
									value={this.state.others4Text}
									onChange={this.handleChange}
								/>
							</div>
						</Grid>
					</Grid>

					{/* Adverse Business Impacts */}
					<br /><h6>Adverse Business Impacts</h6>
					{/* Components Affected */}
					<Grid container spacing={0.01}>
						<Grid item xs={6}>
							<FormControlLabel
								name="financialLoss"
								value={this.state.financialLoss}
								onChange={this.handleCheckBox}
								control={<Checkbox color="primary" />}
								label="Financial Loss"
								labelPlacement="end"
							/>
						</Grid>
						<Grid item xs={6}>
							<FormControlLabel
								name="managementAndBusiness"
								value={this.state.managementAndBusiness}
								onChange={this.handleCheckBox}
								control={<Checkbox color="primary" />}
								label="Management and Business Operations"
								labelPlacement="end"
							/>
						</Grid>
						<Grid item xs={6}>
							<FormControlLabel
								name="personalInformation"
								value={this.state.personalInformation}
								onChange={this.handleCheckBox}
								control={<Checkbox color="primary" />}
								label="Personal Information"
								labelPlacement="end"
							/>
						</Grid>
						<Grid item xs={6}>
							<FormControlLabel
								name="disruptionToBusiness"
								value={this.state.disruptionToBusiness}
								onChange={this.handleCheckBox}
								control={<Checkbox color="primary" />}
								label="Disruption to Business Operations"
								labelPlacement="end"
							/>
						</Grid>
						<Grid item xs={6}>
							<FormControlLabel
								name="lossOfGoodWill"
								value={this.state.lossOfGoodWill}
								onChange={this.handleCheckBox}
								control={<Checkbox color="primary" />}
								label="Software"
								labelPlacement="end"
							/>
						</Grid>
						<Grid item xs={6}>
							<FormControlLabel
								name="commercialAndEcons"
								value={this.state.commercialAndEcons}
								onChange={this.handleCheckBox}
								control={<Checkbox color="primary" />}
								label="Commercial and Economic interest"
								labelPlacement="end"
							/>
						</Grid>
						<Grid item xs={6}>
							<FormControlLabel
								name="lossOfReputation"
								value={this.state.lossOfReputation}
								onChange={this.handleCheckBox}
								control={<Checkbox color="primary" />}
								label="Loss of Reputation"
								labelPlacement="end"
							/>
						</Grid>
						<Grid item xs={6}>
							<div>
								<FormControlLabel
									name="others5Check"
									value={this.state.others5Check}
									onChange={this.handleCheckBox}
									control={<Checkbox color="primary" />}
									label="Others"
									labelPlacement="end"
								/>
								<TextField
									name="others5Text"
									value={this.state.others5Text}
									onChange={this.handleChange}
									multiline
								/>
							</div>
						</Grid>
						<Grid item xs={6}>
							<FormControlLabel
								name="legalAndRegulatory"
								value={this.state.legalAndRegulatory}
								onChange={this.handleCheckBox}
								control={<Checkbox color="primary" />}
								label="Legal and Regulatory Obligations"
								labelPlacement="end"
							/>
						</Grid>
					</Grid>

					<br /><h6>Vulnerabilities Identified</h6>
					{/* Vulnerabilities Identified */}
					<Grid container spacing={0.01}>
						<Grid item xs={6}>
							<FormControlLabel
								name="informationVulnerability"
								value={this.state.informationVulnerability}
								onChange={this.handleCheckBox}
								control={<Checkbox color="primary" />}
								label="Information"
								labelPlacement="end"
							/>
						</Grid>
						<Grid item xs={6}>
							<FormControlLabel
								name="reputationAndImage"
								value={this.state.reputationAndImage}
								onChange={this.handleCheckBox}
								control={<Checkbox color="primary" />}
								label="Reputation and Image"
								labelPlacement="end"
							/>
						</Grid>
						<Grid item xs={6}>
							<FormControlLabel
								name="people"
								value={this.state.people}
								onChange={this.handleCheckBox}
								control={<Checkbox color="primary" />}
								label="People"
								labelPlacement="end"
							/>
						</Grid>
						<Grid item xs={6}>
							<FormControlLabel
								name="processesProcedures"
								value={this.state.processesProcedures}
								onChange={this.handleCheckBox}
								control={<Checkbox color="primary" />}
								label="Processes, procedures, policies, guidelines"
								labelPlacement="end"
							/>
						</Grid>
						<Grid item xs={6}>
							<FormControlLabel
								name="physical"
								value={this.state.physical}
								onChange={this.handleCheckBox}
								control={<Checkbox color="primary" />}
								label="Physical (e.g. Hardware)"
								labelPlacement="end"
							/>
						</Grid>
						<Grid item xs={6}>
							<FormControlLabel
								name="servicesVulnerability"
								value={this.state.servicesVulnerability}
								onChange={this.handleCheckBox}
								control={<Checkbox color="primary" />}
								label="Services"
								labelPlacement="end"
							/>
						</Grid>
						<Grid item xs={6}>
							<FormControlLabel
								name="software"
								value={this.state.software}
								onChange={this.handleCheckBox}
								control={<Checkbox color="primary" />}
								label="Software (e.g. computer program)"
								labelPlacement="end"
							/>
						</Grid>
						<Grid item xs={6}>
							<div>
								<FormControlLabel
									name="others6Check"
									value={this.state.others5Check}
									onChange={this.handleCheckBox}
									control={<Checkbox color="primary" />}
									label="Others"
									labelPlacement="end"
								/>
								<TextField
									name="others6Text"
									value={this.state.others6Text}
									onChange={this.handleChange}
								/>
							</div>
						</Grid>
					</Grid>
				</Container>

				{/* Information Security Event Details */}
				<div class="card-body" className="TitleCardBackground">
					<Container className="TitleCard">
						<h5>Information Security Event Details</h5>
					</Container>
				</div><br />

				<Container classname="ReportForm">

					{/* Date and Time Pickers */}
					<Grid container spacing={0.01}>
							<MuiPickersUtilsProvider utils={DateFnsUtils}>
							<Grid item xs={6}>
							<br /><h6>Date the Event Occured</h6>
								<DatePicker
									margin="normal"
									name="dateOccured"
									label="Enter Date"
									format="MM/dd/yyyy"
									value={this.state.dateOccured}
									onChange={this.handleDateOccuredChange}
								/>
								</Grid>
								
								<Grid item xs={6}>
								<br /><h6>Time the Event Occured</h6>
								<TimePicker	
									margin="normal"
									name="timeOccured"
									label="Enter Time"
									value={this.state.timeOccured}
									onChange={this.handleTimeOccuredChange}
								/>
								</Grid>
							</MuiPickersUtilsProvider>
					</Grid>
					<Grid container spacing={0.01}>
							<MuiPickersUtilsProvider utils={DateFnsUtils}>
							<Grid item xs={6}>
							<br /><h6>Date the Event Discovered</h6>
								<DatePicker
									margin="normal"
									name="dateDiscovered"
									label="Enter Date"
									format="MM/dd/yyyy"
									value={this.state.dateDiscovered}
									onChange={this.handleDateDiscoveredChange}
								/>
								</Grid>
								
								<Grid item xs={6}>
								<br /><h6>Time the Event Discovered</h6>
								<TimePicker	
									margin="normal"
									name="timeDiscovered"
									label="Enter Time"
									value={this.state.timeDiscovered}
									onChange={this.handleTimeDiscoveredChange}
								/>
								</Grid>
							</MuiPickersUtilsProvider>
					</Grid>
					<Grid container spacing={0.01}>
						<Grid item xs={6}>
							<div>
								<br/><h6>Is the event over?</h6>

								<div>
									<RadioGroup row>
										<FormControlLabel 
											name = "radButton"
											control={<Radio color="primary" />}
											value="yes"
											onChange = {this.handleRadioButton}
											// checked = {value === "yes"} 
											label="Yes" 
										/>
										<FormControlLabel 
											name = "radButton"
											control={<Radio color="primary" />}
											label="No"
											value="no"
											onChange = {this.handleRadioButton}
											// checked = {value === "no"} 
										/>
									</RadioGroup>

								</div>

							</div>
							
							
						</Grid>

					</Grid>

					<Grid container spacing={0.01} >
							<MuiPickersUtilsProvider utils={DateFnsUtils}>
							<Grid item xs={6}>
							<br /><h6>Date the Event Ended</h6>
								<DatePicker
									margin="normal"
									name="dateEnded"
									label="Enter Date"
									format="MM/dd/yyyy"
									value={this.state.dateEnded}
									onChange={this.handleDateEndedChange}
								/>
								</Grid>
								
								<Grid item xs={6}>
								<br /><h6>Time the Event Ended</h6>
								<TimePicker	
									margin="normal"
									name="timeEnded"
									label="Enter Time"
									value={this.state.timeEnded}
									onChange={this.handleTimeEndedChange}
								/>
								</Grid>
							</MuiPickersUtilsProvider>
					</Grid>

					{/* Sumbmit Button */}
					<div>
						<button className="SubmitButton">Submit</button>
					</div>
				</Container>
			</form>
		)
	}
}

export default ReportPage;
