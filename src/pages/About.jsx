import React from "react";
// import Skills from "./Skills.jsx";
import { FaFileDownload } from "react-icons/fa";
import Resume from "../constants/Résumé.pdf";
import Skills from "../components/Skills";

const About = () => {
  return (
    <>
      <div className="AboutPage">
        <div className="AboutText">
          <h1 className="AboutTextHeading">
            Get to know me!
          </h1>
          <p>
            Hi, my name is <b>Rodrigo Pardo</b> and I am from Rockville,
            Maryland. I'm a <b>Frontend web developer</b> who has a <b>Bachelors Degree in Computer Science</b>. <br />
            <br />
            These past few months, I have been creating many <b>React JS Projects</b>.
            I have been expanding my horizons by learning <b>Next JS</b>, <b>RESTful API`s</b>, <b>Server Development</b>, <b>Agile Development using Jira</b>, and many more.
            I love to create React projects with beautiful designs and putting my own
            twists on it, you can check out some of my work in the <b>Projects</b> section.
            <br />
            <br />I am currently pursuing a front end developer role in the industry where I can
            contribute and grow. Feel free to connect with me, links are in the
            footer.
            <br />
          </p>
          <a href={Resume} download="Résumé.pdf" className="resume-btn">
            <button>
              Download Resume <FaFileDownload></FaFileDownload>
            </button>
          </a>
        </div>

        <h1 className="SkillsHeading"> Skillset</h1>
        <div className="skills">
            <Skills skill="HTML" />
            <Skills skill="CSS" />
            <Skills skill="Tailwind" />
            <Skills skill="Javascript" />
            <Skills skill="JSON" />
            <Skills skill="React" />
            <Skills skill="SQL" />
            <Skills skill="API" />
            <Skills skill="Heroku" />
            <Skills skill="Netlify" />
            <Skills skill="Jira" />
            <Skills skill="Git" />
            <Skills skill="Github" />
            <Skills skill="C++" />
            <Skills skill="Npm" />
        </div>
      </div>
    </>
  );
};

export default About;