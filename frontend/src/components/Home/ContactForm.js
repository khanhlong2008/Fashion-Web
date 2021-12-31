import React from 'react';

const ContactForm = () => {
  return (
    <section className="contact__wrapper">
      <div className="container contact__container">
        <p className="fw-bold">CONNECT TO AVEDA & CO.</p>
        <p className="h1 mb-0">Join Our Newsletter</p>
        <p>
          Hey you, sign up it only takes a second to be the first to find out
          about our latest news and promotions…
        </p>
        <div className="input-container">
          <input type="text" placeholder="Your email" />
          <button className="btn btn-primary">SUBSCRIBE</button>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
