import React from "react";
import { FaGithub } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";

const ProjectBox = ({ projectPhoto, projectName }) => {
  const desc = {
    FantasyDesc:
      "This website is for helping people with NFL Fantasy teams. The site shows top news stories, individual player stats, and injury updates organized by teams and positions. I learned how to efficiently use RESTful API`s.",
    FantasyGithub: "https://github.com/rpardo440828/nfl-fantasy-info-app",
    FantasyWebsite: "https://nflfantasyinfo.netlify.app/",

    RecipeDesc:
      "This website helps you search for recipes based off of some parameters. The site searches through an API and displays up to 20 options. Once clicked they display more information about the recipes.",
    RecipeGithub: "https://github.com/rpardo440828/recipe-edamam-app-frontend",
    RecipeWebsite: "https://recipesearchsite.netlify.app/",

    CollectionDesc:
      "This website allows the user to register and create a collection based off of TV Shows, Movies, and Books. This project helped me understand full stack development, and helped me practice with MySQL.",
    CollectionGithub: "https://github.com/rpardo440828/mysql-app-frontend",
    CollectionWebsite: "https://collectionwebsite.netlify.app/",

    TattooDesc:
      "This website allows the user to view the portfolio of a local tattoo artist located in Gaithersburg, MD. This project helped me learn how to develop for a client. I also used Jira to track progress and plan sprints for this client.",
    TattooGithub: "https://github.com/rpardo440828/Tattoo_App_Deployment",
    TattooWebsite: "https://beeztattz.com/",
  };

  return (
    <div className="projectBox">
      <img className="projectPhoto" src={projectPhoto} alt="Project display" />
      <div>
        <br />
        <h3>{projectName}</h3>
        <br />
        {desc[projectName + "Desc"]}
        <br />

        <a href={desc[projectName + "Github"]} target="_blank">
          <button className="mt-[20px]">
            <FaGithub /> Github
          </button>
        </a>

        <a href={desc[projectName + "Website"]} target="_blank">
          <button className="mt-[20px]">
            <CgFileDocument /> Site
          </button>
        </a>
      </div>
    </div>
  );
};
export default ProjectBox;