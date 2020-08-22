import React from "react";
import me from "../assets/me.jpg";
import resume from "../assets/Resume2020.pdf";

function Home() {
  return (
    <div>
      <div className="columns">
        <div className="column is-1"></div>
        <p className="column">
        Software Development professional having 7+ years of experience who can analyze, design, develop and implement cost-effective, high quality, high performance and innovative technology solutions using Microsoft technology stack.
Experience in working with C#, ASP.NET, Core 1 and 2, ASP.NET MVC, ADO.NET, Entity Framework, SQL Server, LINQ Azure Services, UML and XML.
Proficient in front end development using HTML5, Angular/Angular JS, Bootstrap, JaveScript and jQuery.
Design and develop solutions that streamline workflows and improve business capabilities.
Excellent knowledge of Object Oriented Design and Development.
Analyze client requirements, develop and test innovative applications.
Excellent communication skill.
Works effectively on an independent basis or as part of team. 
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
