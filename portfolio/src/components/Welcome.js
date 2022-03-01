import React, { useEffect, useState } from "react";
import StyledWelcome from "./styled/Welcome.styled";
import welcomeContent from "../welcomeContent";

const Welcome = () => {
  const [display, setDisplay] = useState("");
  const [index, setIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [message, setMessage] = useState(welcomeContent[0]);
  const speed = 65;
  const pause = 500;

  useEffect(() => {
    const type = setInterval(() => {
      setCurrentIndex((currentIndex) => {
        /*This setState function will set the index
        to index+1 if there is more content otherwise
        it will clear this animation and move on to the next line*/

        if (currentIndex >= message.length) {
          clearInterval(type);
          setIndex((index) => {
            if (index >= welcomeContent.length - 1) {
              setTimeout(() => {
                setDisplay("");
              }, pause);
              return index;
            }
            return index + 1;
          });
          return currentIndex;
        }
        return currentIndex + 1;
      });
    }, speed);
  }, [message]);

  useEffect(() => {
    setTimeout(() => {
      setDisplay("");
      setCurrentIndex(0);
      setMessage(welcomeContent[index]);
    }, pause);
  }, [index]);

  useEffect(() => {
    setDisplay(message.slice(0, currentIndex));
  }, [currentIndex]);

  return <StyledWelcome>{display}</StyledWelcome>;
};

export default Welcome;
