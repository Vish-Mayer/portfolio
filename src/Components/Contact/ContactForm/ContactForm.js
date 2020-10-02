import emailjs from 'emailjs-com';
import './ContactForm.css'
import React, { Component } from 'react';

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

  sendEmail(e){
    e.preventDefault();
    emailjs.sendForm(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      e.target, 
      process.env.REACT_APP_USER_ID)
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
      e.target.reset()
      this.setState({
        message:{
          name: '',
          email: '',
          body: '',
        }
      })
  }

  render() {
    return(
      <div className="contact-form container-fluid d-flex bd-highlight" id="contact">
      <form onSubmit={this.sendEmail}>
        <h4>Get in Touch!</h4>
        <div class="row">
          <div class="col">
            <input 
            value={this.state.message.name} 
            onChange={this.handleInput1} 
            type="text" class="form-control" 
            id="inputName" placeholder="Name" 
            name="user_name"/>
          </div>
        </div><br/>
        <div class="form-group">
           <input
            value={this.state.message.email} 
            onChange={this.handleInput2} 
            type="email" class="form-control"
            id="inputEmail" 
            placeholder="Email address" 
            name="user_email"/>
           </div>
           <div class="form-group">
            <label id ="input-message" for="FormTextarea">Your Message</label>
            <textarea 
            value={this.state.message.body} 
            onChange={this.handleInput3} class="form-control" 
            id="FormTextarea"
            name="message" 
            cols ="70" 
            rows="10"></textarea>
          </div>
          <button type="submit" class="btn btn-primary" id="send">Send</button>
        </form>
     </div>
    )
  }
}

export default ContactForm