import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const date = new Date();
  let year = date.getFullYear();
  return (
    <footer>
      <h4>Copyright &copy; {year} | All Rights Reserved.</h4>
      <div className="footerLinks">
        <a href="https://github.com/rpardo440828" target="_blank">
          <FaGithub />
        </a>
        <a href="https://instagram.com/rodrigopardo_1" target="_blank">
          <FaInstagram />
        </a>
        <a href="https://www.linkedin.com/in/rodrigo-pardo-a48773213/" target="_blank">
          <FaLinkedin />
        </a>
      </div>
    </footer>
  );
};

export default Footer;