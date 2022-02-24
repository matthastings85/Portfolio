import React from "react";

// Styles
import { StyledSectionHeading } from "./styled/SectionHeading.styled";

const SectionHeading = ({ children }) => {
  return <StyledSectionHeading>{children}</StyledSectionHeading>;
};

export default SectionHeading;
