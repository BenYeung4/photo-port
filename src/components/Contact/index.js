//using the useState, this is to develop a controlled component to do client-side validation.  to sync the form data of the user input wiht the componetn's state
import React, { useState } from "react";

//validators for contact inputs
import { validateEmail } from "../../utils/helpers";

function ContactForm() {
  //hooks that manage the form data
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  //formState has 3 key-value pairs to represent the 3 user inputs.
  const { name, email, message } = formState;

  //use with isValid, in the case if entered information is not valid, then reply back that specific error message
  const [errorMessage, setErrorMessage] = useState("");

  //JSX

  //handleChange funciton will sync the internal state of the component formState with the user input from the DOM.
  function handleChange(e) {
    //validator for email
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      console.log(isValid);
      // isValid conditional statement
      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      } else {
        if (!e.target.value.length) {
          setErrorMessage(`${e.target.name} is required.`);
        } else {
          setErrorMessage("");
        }
      }
    }
    //setFormState function is used to update the formState value for the name property.  We assigned the value taken from the input field in the UI with e.target.value and assign this value to the property formState.name, with the spread operator, ...formState, to retain the other key-value pairs in this object. as the user type, it is being recorded
    //set as a if statement, so that the state only updats if the form dat has passed the qulaity tests
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }

    console.log("errorMessage", errorMessage);
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
          {/*the onBlur lets user input information and then displays the invalid but onChange immediatley shows, personal perference */}
          <input
            type="text"
            defaultValue={name}
            onBlur={handleChange}
            name="name"
          />
        </div>
        <div>
          <label htmlFor="email">Email address:</label>
          <input
            type="email"
            defaultValue={email}
            name="email"
            onBlur={handleChange}
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            defaultValue={message}
            onBlur={handleChange}
            rows="5"
          />
        </div>
        {/*the errorMessage below is incase the errorMessage contains an error.  the && operator, is being used as a short circuit.  if the first valeu resovles to true, the second expression is evaluated, this displays the error message on the front-end */}
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default ContactForm;
