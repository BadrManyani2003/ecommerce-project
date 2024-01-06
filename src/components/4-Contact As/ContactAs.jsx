import React from "react";
import "./ContactAs.css";
function ContactAs() {
  return (
    <>
      <section className="contact-us">
        <h1>Contact Us</h1>
        <p>
          If you have any questions or inquiries, feel free to reach out to us.
          We are here to help!
        </p>

        <form>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>
          </div>

          <button type="submit">Submit</button>
        </form>
      </section>
    </>
  );
}

export default ContactAs;
