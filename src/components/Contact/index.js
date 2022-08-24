//using the useState, this is to develop a controlled component to do client-side validation.  to sync the form data of the user input wiht the componetn's state
import React, { useState } from "react";

function ContactForm() {
  //hooks that manage the form data
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  //formState has 3 key-value pairs to represent the 3 user inputs.
  const { name, email, message } = formState;
  //JSX

  //handleChagne funciton will sync the internal state of the component formState with the user input from the DOM.
  //setFormState function is used to update the formState value for the name property.  We assigned the value taken from the input field in the UI with e.target.value and assign this value to the property formState.name, with the spread operator, ...formState, to retain the other key-value pairs in this object. as the user type, it is being recorded
  function handleChange(e) {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  }

  //handles the submission of the form data and console.log the input information
  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }

  //for & class attributes are only in Javascript, so we used htmlFor and className instead
  //we add defaultValue attribut to each form elements, to assign initial state values to the input fields in the DOM
  //onChange event listner will ensure that the handleChange function fires whenever a keystroke is typed into the input field
  return (
    <section>
      <h1> Contact Me</h1>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            defaultValue={name}
            onChange={handleChange}
            name="name"
          />
        </div>
        <div>
          <label htmlFor="email">Email address:</label>
          <input
            type="email"
            defaultValue={email}
            name="email"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            defaultValue={message}
            onChange={handleChange}
            rows="5"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default ContactForm;
