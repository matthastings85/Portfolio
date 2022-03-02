import React from "react";
import ContactForm from "./reusable/ContactForm";
import SectionHeading from "./reusable/SectionHeading";
import StyledContact from "./styled/Contact.styled";

const Contact = () => {
  return (
    <StyledContact layout="column" id="contact">
      <SectionHeading>Contact</SectionHeading>
      <p>I would love to hear from you!</p>
      <ContactForm />
    </StyledContact>
  );
};

export default Contact;
