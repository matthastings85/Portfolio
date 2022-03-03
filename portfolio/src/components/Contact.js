import React, { useState, useEffect } from "react";
import { contactDelay } from "../utilities/loader";
import ContactForm from "./reusable/ContactForm";
import SectionHeading from "./reusable/SectionHeading";
import StyledContact from "./styled/Contact.styled";

const Contact = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), contactDelay);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <>
      {isMounted && (
        <StyledContact layout="column" id="contact">
          <SectionHeading>Contact</SectionHeading>
          <h3>I hope you've enjoyed my site. I would love to hear from you!</h3>
          <ContactForm />
        </StyledContact>
      )}
    </>
  );
};

export default Contact;
