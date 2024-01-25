import logo from '../assets/logo.png';
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

    return <div className=" navBarContainer">
    
     <NavBarText text="Home"/>
     <NavBarText text="Menu" />
     <NavBarText text="Reserve" />
     <NavBarText text="About Us" />
     </div>
}
export default Header;