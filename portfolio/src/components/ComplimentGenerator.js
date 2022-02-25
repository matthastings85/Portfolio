import React, { useState } from "react";

import Button from "./Button";
import compliments from "../compliments";
import StyledComplimentGenerator from "./styled/ComplimentGenerator.styled";

const ComplimentGenerator = () => {
  const [opacity, setOpacity] = useState(1);
  const [compliment, setCompliment] = useState(
    "Thanks for visiting my site! Feeling down?"
  );

  const getCompliment = () => {
    setOpacity(0);
    const randomIndex = Math.floor(Math.random() * compliments.length);
    let newCompliment;
    if (compliments[randomIndex] === compliment) {
      if (randomIndex === compliments.length - 1) {
        newCompliment = compliments[randomIndex - 1];
      } else {
        newCompliment = compliments[randomIndex + 1];
      }
    } else {
      newCompliment = compliments[randomIndex];
    }

    setTimeout(() => {
      setCompliment(newCompliment);
      setOpacity(1);
    }, 500);
  };
  return (
    <StyledComplimentGenerator opacity={opacity}>
      <p>{compliment}</p>
      <Button text="Click Me" type="alt" callback={getCompliment} />
      <h3>Click this button for a free compliment.</h3>
    </StyledComplimentGenerator>
  );
};

export default ComplimentGenerator;
