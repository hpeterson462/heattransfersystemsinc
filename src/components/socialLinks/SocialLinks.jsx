import React from 'react';
// import { FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import './SocialLinks.css';

export default function SocialLinks() {

  return (
    <span className="social">
      {/* <a href="" target="_blank" className="social-link">
        <FaLinkedin size={25} />
      </a> */}
      <a href="mailto:diane@heattransfersystems.com" className="social-link">
        <HiOutlineMail size={25} />
      </a>
    </span>
  )
}
