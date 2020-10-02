import emailjs from 'emailjs-com';
import './ContactForm.css'
import React, { Component } from 'react';

class ContactForm extends Component{

  constructor(props) {
    super(props)
    this.state={
      message:{
        input: ''
      }
    }
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e) {
    this.setState ({
      message:{
        input: e.target.value 
      }
    })
  }

  sendEmail(e){
    e.preventDefault();
  
    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, e.target, process.env.REACT_APP_USER_ID)
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    e.target.reset()
  }

  render() {
    return(
      <div className="contact-form container-fluid d-flex bd-highlight" id="contact">
      <form onSubmit={this.sendEmail}>
        <h4>Get in Touch!</h4>
        <div class="row">
          <div class="col">
            <input value={this.state.message.input} onChange={this.handleInput} type="text" class="form-control" id="inputName" placeholder="Name" name="user_name"/>
          </div>
        </div><br/>
        <div class="form-group">
           <input value={this.state.message.input} onChange={this.handleInput} type="email" class="form-control" id="inputEmail" placeholder="Email address" name="user_email"/>
           </div>
           <div class="form-group">
            <label id ="input-message" for="FormTextarea">Your Message</label>
            <textarea class="form-control" id="FormTextarea" name="message" cols ="70" rows="10"></textarea>
          </div>
          <button type="submit" class="btn btn-primary" id="send">Send</button>
        </form>
     </div>
    )
  }
}

export default ContactForm