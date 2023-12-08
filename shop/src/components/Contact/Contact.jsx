import React from "react";
import "./Contact.scss";

import { FaGoogle } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact">
      <div className="wrapper">
        <span>BE IN TOUCH WITH US:</span>
        <div className="mail">
          <input type="text" placeholder="Enter your e-mail..." />
          <button>JOIN US</button>
        </div>
        <div className="icons">
          

          <a href="mailto:alievgitd@gmail.com" target="_blank">
          <FaGoogle />
          </a>

          <a href="https://t.me/alievv_15" target="_blank">
            <FaTelegram />
          </a>
          <a href="https://github.com/alievdavlat" target="_blank">
            <FaGithub />
          </a>
          <a href="https://instagram.com/1.al1evv?igshid=MzRlODBiNWFlZA==" target="_blank">
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
