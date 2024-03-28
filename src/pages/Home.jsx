import React from "react";
import Type from "../components/Type";
import Tilt from "react-parallax-tilt";
import Avatar from "../Images/Avatar.jpg";
import { Link } from "react-router-dom";
import { BsPerson } from "react-icons/bs";
import { CgPhone } from "react-icons/cg";

const Home = () => {

    return (
        <div>
          <div className="HomePage">
            <div className="HomeText">
              <h1>Hello there!</h1>
              <h1>
                I'M <b>Rodrigo Pardo</b>
              </h1>
              <Type />
              <Link to="/About">
                <button>
                  About Me
                  <BsPerson />
                </button>
              </Link>
    
              <Link to="/Contact">
                <button>
                  Contact <CgPhone />
                </button>
              </Link>
            </div>
            <Tilt>
              <img className="Avatar" src={Avatar} alt="Image by catalyststuff on Freepik" />
            </Tilt>
          </div>
        </div>
    );
};

export default Home;