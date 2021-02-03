import React from 'react';
import { AiFillYoutube, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <h4>Would you like to get daily movie recommendations?</h4>
        <div className="footer__subscribe">
          <input type="text" placeholder="Enter your email address" />
          <button>subscribe</button>
        </div>
        <div className="footer__media">
          <a href="https://www.youtube.com/" target="_blank">
            <AiFillYoutube />
          </a>
          <a
            href="https://www.linkedin.com/in/ernestas-lak%C5%A1tinis-1334241bb?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BjITOZGWZS7CRCyYvqWq5BA%3D%3D"
            target="_blank"
          >
            <AiFillLinkedin />
          </a>
          <a href="https://github.com/Ernestas-wq/moviedb-react" target="_blank">
            <AiFillGithub />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
