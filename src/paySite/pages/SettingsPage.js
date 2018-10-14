import React, { Component} from 'react'

import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

import './createButtonPage.css'

class SettingsPage extends Component {
	
	constructor (props) {
		super (props)
		this.state = {
			username: 'loading...'
		}
		var xhr = new XMLHttpRequest()
		xhr.open('GET', 'https://gateway.cash/api/getusername')
		xhr.onload = () => {
			if (xhr.readyState === 4) {
				var name = xhr.responseText.toString().trim()
				if (name === '') {
					name = 'No username set'
				}
				this.setState({username: name})
			}
		}
		xhr.send()
	}
	
	handleCreateButton = () => {
    this.props.updateView('createbutton')
  }
  
  handleViewPayments = () => {
    this.props.updateView('payments')
  }
	
	render () {
		
		return (
			<div className='container'>
				<center>
					<h1>Settings</h1>
					<Button
            onClick={this.handleCreateButton}
          >
            Create Button
          </Button>
          <Button
          	onClick={this.handleViewPayments}
          >
          	View Payments
          </Button>
          <Button
          	variant="contained"
          	color="primary"
          >
            Settings
          </Button>
				</center>
				<h2>Display Currency</h2>
				<p>
					Bitcoin Cash (BCH) units will always be displayed. In places like the
					View Payments page, you can choose to have values converted and
					displayed in other currencies as well. When viewing payments, you will
					be shown the current monitary value as well as what the value was at
					the time the payment was made.
				</p>
				<p>(unimplemented)</p>
				<h2>Username</h2>
				<p>
					Your username can be used as a more convenient way to log into
					gateway.cash instead of using your address each time.
				</p>
				<h3>Your current username: {this.state.username}</h3>
				<p>
					When you reserve your username, there are some restrictions which
					allow for an easier login experience for all merchants.
				</p>
				<p>
					Your username must:
					<ul>
						<li>Be at least 10 characters long</li>
						<li>Not begin with another username</li>
						<li>Not contain special characters {'({[<\'"\\,!@#|$%^./"\'>]})'}</li>
						<li>Not contain spaces, tabs or return characters</li>
						<li>NOT BE EQUAL TO ANOTHER PERSONS ADDRESS *couhJason*cough :)</li>
					</ul>
				</p>
				<h3>Change Username</h3>
				<TextField
          style={{
            width:'100%'
          }}
          id="usernameChange"
          label="Change Username"
          maxLength={25}
          value={this.state.usernameChangeText}
        />
        <br/>
        <br/>
        <center>
        	<Button
        		variant="contained"
        		color="primary"
        		onClick={this.handleUsernameChange}
        	>
        		Update Username (unimplemented)
        	</Button>
        </center>
        <h2>Supporting the Project</h2>
        <p>
        	If you'd like tu suppot the project and help fund my college
        	education, you can choose to donate a portion of each payment made to
        	your merchant account. This will always be off by default, but any
        	support you're able to provide is much appreciated.
        </p>
        <p>(unimplemented)</p>
			</div>
		)
		
	}
	
}

export default SettingsPage