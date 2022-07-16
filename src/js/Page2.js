import React from "react";
import Typewriter from "typewriter-effect";
import "../css/Page2.css";
import zurag1 from '../assets/2.jpeg';

const Page2 = () => {
  return (
    <div className="cont">
      <div className="rightSide">
        <img className='pic' src={zurag1} alt="tseej zurag"/>
      </div>
      <div className="leftSide">
        <div className="ab">
          <h3 className="head">ABOUT</h3>
          <h1 className="me"><Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Developer")
                .pauseFor(800)
                .deleteAll()
                .typeString("Bilguun")
                .pauseFor(800)
                .deleteAll()
                .typeString("Problem Solver")
                .pauseFor(800)
                .deleteAll()
                .typeString("Half Designer")
                .pauseFor(800)
                .deleteAll()
                .typeString("Fan of Meme")
                .pauseFor(800)
                .deleteAll()
                .typeString("Learner")
                .pauseFor(800)
                .deleteAll()
                .typeString("Good Peer")
                .pauseFor(800)
                .deleteAll()
                .start();
            }}
            options={{
              autoStart: true,
              loop: true,
            }}
          />
          </h1>
          <h4 className="des">I'm Bilguun, a passionate developer bringing you <br/> programming 
          and design solution. I have an <br/> 
          experience in web developing.
          Fan of outdoor activities, <br/>
          TV series and chess. An outgoing person  who can <br/>get along with everyone.
          <br/>
          <br/>
          I only need a chair and wifi to work :{">>"} </h4>
        </div>
      </div>
    </div>
  );
};

export default Page2;
