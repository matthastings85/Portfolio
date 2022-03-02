import React from "react";
import ContactForm from "./reusable/ContactForm";
import SectionHeading from "./reusable/SectionHeading";
import StyledContact from "./styled/Contact.styled";

const Contact = () => {
  return (
    <StyledContact layout="column" id="contact">
      <SectionHeading>Contact</SectionHeading>
      <h3>I hope you've enjoyed my site. I would love to hear from you!</h3>
      <ContactForm />
    </StyledContact>
  );
};

export default Contact;
