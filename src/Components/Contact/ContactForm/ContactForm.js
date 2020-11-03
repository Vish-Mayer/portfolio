import React, { Component } from 'react';
import emailjs from 'emailjs-com';
import './ContactForm.css'

const service_id = process.env.REACT_APP_SERVICE_ID
const template_id = process.env.REACT_APP_TEMPLATE_ID
const user_id = process.env.REACT_APP_USER_ID

const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i
class ContactForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      message: '',
      nameError: '',
      emailError: '',
      messageError: '',
      messageConfirm: 'Have a question or want to work together?',
    }
    this.timerId = null;
    this.handleInput1 = this.handleInput1.bind(this);
    this.handleInput2 = this.handleInput2.bind(this);
    this.handleInput3 = this.handleInput3.bind(this);
    this.sendEmail = this.sendEmail.bind(this)
    this.submitForm = this.submitForm.bind(this)
  }

  handleInput1(e) {
    this.setState({
      name: e.target.value
    })
  }

  handleInput2(e) {
    this.setState({
      email: e.target.value
    })
  }

  handleInput3(e) {
    this.setState({
      message: e.target.value
    })
  }

  resetForm() {
    this.setState({
      name: '',
      email: '',
      message: '',
      nameError: '',
      emailError: '',
      messageError: '',
    })
  }

  validateForm() {
    let emailError = ''
    let nameError = '';
    let messageError = '';

    if (this.state.name.length < 1) {
      nameError = "Please enter a name"
      this.setState({
        nameError: nameError
      })
      return false
    }
    const email = this.state.email
    if (!email.match(expression)) {
      emailError = "Please enter a valid email address"
      this.setState({
        emailError: emailError
      })
      return false
    }

    if (this.state.email.length < 9) {
      emailError = "Please enter a valid email address"
      this.setState({
        emailError: emailError
      })
      return false
    }

    if (this.state.message.length <= 2) {
      messageError = "Please enter a message"
      this.setState({
        messageError: messageError
      })
      return false
    }
    return true
  }

  sendEmail(e) {
    emailjs.sendForm(service_id, template_id, e.target, user_id)
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }

  confirmEmailMessage(){
    this.setState({messageConfirm: "Thanks for your message"})
  }

  resetMessage() {
    this.timerId = setTimeout(() => {
      this.setState({ messageConfirm: "Have a question or want to work together?" });
       this.timerId = null;
    }, 10000);
  }
 
  submitForm(e) {
    e.preventDefault();
    const isValid = this.validateForm();
    if (isValid) {
      this.sendEmail(e)
      this.confirmEmailMessage()
      this.resetMessage()
      e.target.reset()
      this.resetForm()
    }
  }

  render() {
    return (
      <div className="container">
        <div className="contact-form container-fluid d-flex justify-content-center bd-highlight" id="contact-form">
          <form onSubmit={this.submitForm} data-testid="form">
            <h5 className="contact-text">{this.state.messageConfirm}</h5>
            

            <div className="form-group">
              <input
                value={this.state.name}
                onChange={this.handleInput1}
                type="text"
                className="form-control"
                id="inputName"
                placeholder="Name"
                name="user_name"
              />
              <label className="form-error" id="name-error" for="inutName">{this.state.nameError}</label>
            </div>

            <div className="form-group">
              <input
                value={this.state.email}
                onChange={this.handleInput2}
                type="email"
                className="form-control"
                id="inputEmail"
                placeholder="Email address"
                name="user_email"
              />
              <label className="form-error" id="email-error" for="inutEmail">{this.state.emailError}</label>
            </div>

            <div className="form-group">
              <label id="input-message" for="FormTextarea">Your Message</label>
              <textarea
                value={this.state.message}
                onChange={this.handleInput3}
                className="form-control"
                id="FormTextarea"
                name="message"
                cols="70"
                rows="10"
              ></textarea>
              <label className="form-error" id="message-error" for="FormTextarea">{this.state.messageError}</label>
            </div>
            <button type="submit" className="submit-form" id="send">Send</button>
          </form>
        </div>
        <div>
        </div>
      </div>
    )
  }
}

export default ContactForm