import React from "react";
import ContactForm from "./ContactForm";
import SectionHeading from "./SectionHeading";
import StyledContact from "./styled/Contact.styled";

const Contact = () => {
  return (
    <StyledContact layout="column" id="contact">
      <SectionHeading>Contact</SectionHeading>

      <ContactForm />
    </StyledContact>
  );
};

export default Contact;
