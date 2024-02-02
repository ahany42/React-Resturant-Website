import logo from '../assets/logo.png';
import { TiThMenu } from "react-icons/ti";
import { useState } from 'react';
function Logo(){
return <img src={logo} className="logo"/>
}
function Title(){
  return <h1 className="name">Master Chief Resturant</h1>
}

function Header(){
  
  return <div className="headerContainer">
    <NavBar/>
   
  <div className="header">

    <Title/><Logo/> </div>
  </div>
}
function NavBarText({text}){
  return <a className="navBarText">{text}</a>
}

function NavBar(){
  const [show,setShow]=useState(false);
      return <div>
      
      <TiThMenu className="Menuicon" onClick={()=>setShow(!show)}/>
     <div className="navBarContainer" >
     {show && <div className="mobilenav">
      <MobileNavBar/>
      </div>}
     
      <NavBarText text="Home"/>
      <NavBarText text="Menu" />
      <NavBarText text="Reserve" />
      <NavBarText text="About Us" />
      </div>
      </div>
    
}

function MobileNavBar(){
  return <div className="MobileNavBarContainer">
    <a>Home</a>
    <a>Menu</a>
    <a>Reserve</a>
    <a>About Us</a>
  </div>
}
export default Header;