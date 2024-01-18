import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import './App.css';
function Footer(){
    return <div className="footer">
      <h6 className="footercomp">+20 1062020784</h6>
      <h6 className="footercomp">Heliopolis,Cairo,Egypt</h6>
      <h6 className="footercomp">&copy; All Copy Rights Reserved Master Cheif Resturant</h6>
       <div className="socialcontainer">
       <a href="https://github.com/ahany42/" target="_blank"><FaGithub /></a>
       <a href="https://www.linkedin.com/in/aly-hany-261275219/" target="_blank"><FaLinkedin /></a>
       <a href="mailto:ahanyfathy42@gmail.com" target="_blank"><IoMdMail /></a>
     
       </div>
      
      </div>
  }
  export default Footer;