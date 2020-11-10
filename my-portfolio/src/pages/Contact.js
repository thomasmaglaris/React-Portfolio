import React from "react";
import "./Style.css";

function Contact() {
  return (
    <div className="contact-form">
      <div>
        <h1 className="is-family-monospace title is-1 is-size-3-mobile">
          Contact Me
        </h1>
      </div>
      <div className="is-family-monospace field">
        <label className="label">Name</label>
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="Enter your name here"
          ></input>
        </div>
        <div className="field">
          <label className="label">Email</label>
          <div className="control has-icons-left has-icons-right">
            <input
              className="input is-danger"
              type="email"
              placeholder="Enter your Email here"
            ></input>
            <span className="icon is-small is-left">
              <i className="fas fa-envelope"></i>
            </span>
            <span className="icon is-small is-right">
              <i className="fas fa-exclamation-triangle"></i>
            </span>
          </div>
        </div>
        <div className="field">
          <label className="label">Message</label>
          <div className="control">
            <textarea className="textarea" placeholder="Textarea"></textarea>
          </div>
        </div>
        <div className="field">
          <div className="control">
            <label className="checkbox">
              <input type="checkbox"></input>I agree to the{" "}
              <a href="#">terms and conditions</a>
            </label>
          </div>
        </div>

        <div className="field">
          <div className="control">
            <label className="radio">
              <input type="radio" name="question"></input>
              Yes
            </label>
            <label className="radio">
              <input type="radio" name="question"></input>
              No
            </label>
          </div>
        </div>

        <div className="field is-grouped">
          <div className="control">
            <button className="is-family-monospace button is-link has-background-black">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
