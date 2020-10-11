import emailjs from 'emailjs-com';
import './ContactForm.css'
import React, { Component } from 'react';

const service_id = process.env.REACT_APP_SERVICE_ID
const template_id =  process.env.REACT_APP_TEMPLATE_ID
const user_id = process.env.REACT_APP_USER_ID

class ContactForm extends Component{

  constructor(props) {
    super(props)
    this.state={
      message:{
        name: '',
        email: '',
        body: '',
      }
    }
    this.handleInput1 = this.handleInput1.bind(this);
    this.handleInput2 = this.handleInput2.bind(this);
    this.handleInput3 = this.handleInput3.bind(this);
    this.sendEmail = this.sendEmail.bind(this)
  }

  handleInput1(e) {
    this.setState ({
      message:{
        name: e.target.value 
      }
    })
  }

  handleInput2(e) {
    this.setState ({
      message:{
        email: e.target.value
      }
    })
  }

  handleInput3(e) {
    this.setState ({
      message:{
        body: e.target.value
      }
    })
  }

  resetForm() {
    this.setState({
      message:{
        name: '',
        email: '',
        body: '',
      }
    })
  }

  sendEmail(e){
    e.preventDefault();
    emailjs.sendForm(service_id, template_id, e.target, user_id)
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
      window.alert('Your message has been sent');
      e.target.reset()
      this.resetForm()
  }

  render() {
    return(
      <div className = "container">
        <div className="contact-form container-fluid d-flex bd-highlight" id="contact-form">
        <form onSubmit={this.sendEmail} data-testid="form">
          <h4>Get in Touch!</h4>
          <div className="row">
            <div className="col">
              <input 
              value={this.state.message.name} 
              onChange={this.handleInput1} 
              type="text" 
              className="form-control" 
              id="inputName" 
              placeholder="Name" 
              name="user_name"/>
            </div>
          </div><br/>
          <div className="form-group">
            <input
              value={this.state.message.email} 
              onChange={this.handleInput2} 
              type="email" 
              className="form-control"
              id="inputEmail" 
              placeholder="Email address" 
              name="user_email"/>
            </div>
            <div className="form-group">
              <label id ="input-message" for="FormTextarea">Your Message</label>
              <textarea 
              value={this.state.message.body} 
              onChange={this.handleInput3} 
              className="form-control" 
              id="FormTextarea"
              name="message" 
              cols ="70" 
              rows="10"></textarea>
            </div>
            <button type="submit" className="btn btn-primary" id="send">Send</button>
          </form>
      </div>
      <div>
        </div>
    </div>
    )
  }
}

export default ContactForm