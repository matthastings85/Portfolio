import React, { useState } from "react";
import Button from "./Button";
import StyledContactFrom from "../styled/ContactForm.styled";

const FORM_ENDPOINT =
  "https://public.herotofu.com/v1/e91b5340-968d-11ec-bdf8-dd9c99f898ec";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <>
        <h2>Thank you!</h2>
        <div>We'll be in touch soon.</div>
      </>
    );
  }

  return (
    <StyledContactFrom
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
      target="_blank"
      rel="noreferrer"
    >
      <input type="text" placeholder="Your name" name="name" required />
      <input type="email" placeholder="Email" name="email" required />
      <textarea placeholder="Your message" name="message" required />
      <Button text="Send a message" type="submit" />
    </StyledContactFrom>
  );
};

export default ContactForm;
