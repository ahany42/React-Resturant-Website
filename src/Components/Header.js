import logo from '../assets/logo.png';
import { TiThMenu } from "react-icons/ti";
var isclicked=false;
var displaymenubar;
function Logo(){
return <img src={logo} className="logo"/>
}
function Title(){
  return <h1 className="name">Master Chief Resturant</h1>
}

function Header(){
  return <div className="headerContainer">
    <NavBar display={isclicked}/>
   
  <div className="header">

    <Title/><Logo/> </div>
  </div>
}
function NavBarText({text}){
  return <a className="navBarText">{text}</a>
}

function NavBar(){
  if(isclicked)
  {
    displaymenubar="flex";
  }
  else{
    displaymenubar="none";
  }
      return <div>
      
      <TiThMenu className="Menuicon" onClick={Clicktoggle}/>
     <div className="navBarContainer" >
      <div style={{display:displaymenubar}}>
      <MobileNavBar/>
      </div>
      <NavBarText text="Home"/>
      <NavBarText text="Menu" />
      <NavBarText text="Reserve" />
      <NavBarText text="About Us" />
      </div>
      </div>
    
}
function Clicktoggle(){
  isclicked=!isclicked;
  console.log(isclicked);
  
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