import React, { useState, useRef, useEffect } from "react";

import StyledFadeInSection from "./styled/FadeInSection.styled";

const FadeInSection = (props) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();
  useEffect(() => {
    const current = domRef.current;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    observer.observe(current);
    return () => observer.unobserve(current);
  }, []);
  return (
    <StyledFadeInSection
      visibility={`${isVisible ? "is-visible" : ""}`}
      ref={domRef}
    >
      {props.children}
    </StyledFadeInSection>
  );
};

export default FadeInSection;
