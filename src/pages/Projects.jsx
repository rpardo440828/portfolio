import React from "react";
import ProjectBox from "../components/ProjectBox";
import TattooPic from "../Images/TattooPic.png";
import CollectionPic from "../Images/CollectionPic.png";
import RecipePic from "../Images/RecipePic.png";
import FantasyPic from "../Images/FantasyPic.png";

const Projects = () => {
  return (
    <div>
      <h1 className="projectHeading">
        My <b>Projects</b>
      </h1>
      <div className="project">
        <ProjectBox projectPhoto={FantasyPic} projectName="Fantasy" />
        <ProjectBox projectPhoto={RecipePic} projectName="Recipe" />
        <ProjectBox projectPhoto={CollectionPic} projectName="Collection" />
        <ProjectBox projectPhoto={TattooPic} projectName="Tattoo" />
      </div>
    </div>
  );
};

export default Projects;