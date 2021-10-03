import React from 'react';
import '../styles/Contact.css'

export default function Contact() {
  return (
    <div className="container">
      <h1 className="contactme">Contact Me</h1>
      <p></p>
      <p>Name:</p>
  <input type="text" className=""></input>
  <p></p>
  <p>Email:</p>
  <input type="text" className=""></input>
  <p></p>
  <p>Message:</p>
  <textarea rows="5" cols="60" name="text"></textarea>
  <p></p>
  <button>Submit</button>
    </div>
  );
}
