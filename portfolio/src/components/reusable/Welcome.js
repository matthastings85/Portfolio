import React, { useEffect, useRef, useState } from "react";
import StyledWelcome from "../styled/Welcome.styled";
import welcomeContent from "../../content/welcomeContent";
import { welcomeDelay } from "../../utilities/loader";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRepeat } from "@fortawesome/free-solid-svg-icons";

const Welcome = () => {
  const [display, setDisplay] = useState("");
  const [index, setIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [message, setMessage] = useState("");
  const [complete, setComplete] = useState(false);
  const isMounted = useRef(false);
  const speed = 65;
  const pause = 500;

  useEffect(() => {
    const timeout = setTimeout(
      () => setMessage(welcomeContent[0]),
      welcomeDelay
    );
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (isMounted.current) {
      const type = setInterval(() => {
        setCurrentIndex((currentIndex) => {
          /*This setState function will set the currentIndex
          to currentIndex+1 if there is more content otherwise
          it will clear this animation and move on to the next line*/

          if (currentIndex >= message.length) {
            clearInterval(type);
            setIndex((index) => {
              if (index >= welcomeContent.length - 1) {
                setTimeout(() => {
                  setDisplay("");
                  setComplete(true);
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
      return () => clearInterval(type);
    }
  }, [message]);

  useEffect(() => {
    if (isMounted.current) {
      const timeout = setTimeout(() => {
        setDisplay("");
        setCurrentIndex(0);
        setMessage(welcomeContent[index]);
      }, pause);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  useEffect(() => {
    if (isMounted.current) {
      setDisplay(message.slice(0, currentIndex));
    } else {
      isMounted.current = true;
    }
  }, [currentIndex]);

  const repeatMessage = () => {
    setIndex(0);
    setCurrentIndex(0);
    setComplete(false);
    const timeout = setTimeout(() => setMessage(welcomeContent[0]), 500);
    return () => clearTimeout(timeout);
  };

  return (
    <StyledWelcome>
      {complete && (
        <FontAwesomeIcon
          style={{ cursor: "pointer" }}
          icon={faRepeat}
          onClick={repeatMessage}
        />
      )}
      {!complete && <div>{display}</div>}
    </StyledWelcome>
  );
};

export default Welcome;
