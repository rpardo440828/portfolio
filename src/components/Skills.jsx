import React from "react";
import { CgCPlusPlus } from "react-icons/cg";
import {
  FaReact,
  FaGitAlt,
  FaGithub,
  FaNpm,
  FaHtml5,
  FaCss3,
  FaJira,
} from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { GrHeroku } from "react-icons/gr";
import { SiNetlify } from "react-icons/si";
import { BsFiletypeJson } from "react-icons/bs";

const Skills = ({ skill }) => {
  const icon = {
    HTML: <FaHtml5 />,
    CSS: <FaCss3 />,
    Javascript: <DiJavascript1 />,
    JSON: <BsFiletypeJson />,
    Tailwind: <SiTailwindcss />,
    "C++": <CgCPlusPlus />,
    React: <FaReact />,
    SQL: <SiMysql />,
    API: <TbApi />,
    Heroku: <GrHeroku />,
    Netlify: <SiNetlify />,
    Git: <FaGitAlt />,
    Github: <FaGithub />,
    Npm: <FaNpm />,
    Jira: <FaJira />,
  };

  return (
    <div title={skill} className="SkillBox">
      {icon[skill]}
    </div>
  );
};

export default Skills;