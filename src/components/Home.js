import React from "react";
import me from "../assets/me.jpg";
import resume from "../assets/Resume2020.pdf";

function Home() {
  return (
    <div>
      <div className="columns">
        <div className="column is-1"></div>
        <p className="column">
          abc
          <br />
          <br />
         abcd <br />
          <br />
        </p>
        <div className="column is-1"></div>å
      </div>

      <div className="column is-full has-text-centered">
        <img src={me} alt="Yubaraj"></img>
        <br></br>
        <a href="https://github.com/yubraj" target="blank">
          Github
        </a>
        <br />
        <a href={resume} target="blank">
          Resume
        </a>
        <br />
        <a
          href="https://www.linkedin.com/in/yubraj/"
          target="blank"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
}

export default Home;
