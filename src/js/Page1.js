import React, { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import "../css/Page1.css";

const Page1 = () => {
  const [scrolled, setScrolled] = useState(false);
  function handleScroll(e) {
    setScrolled(true);
  }
  useEffect(() => {
    window.addEventListener("mousemove", (e) => handleScroll(e));
  });
  return (
    <div className="con">
      <h1 className="mainText">
        Hi ,
        <br />
        I'm Bilguun ,
        <br />
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("a developer")
              .pauseFor(5000)
              .deleteAll()
              .start();
          }}
          options={{
            autoStart: true,
            loop: true,
          }}
        />
      </h1>
      <h1 className="sideText">
      {scrolled && (
        <Typewriter
          onInit={(typewriter) => {
            typewriter
                .changeDelay(1)
              .typeString("There you go!")
              
              .callFunction(() => {
                console.log("String typed out!");
              })
              .start();
          }}
        />
      )}
      </h1>
    </div>
  );
};

export default Page1;
