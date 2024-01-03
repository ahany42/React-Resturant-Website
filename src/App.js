import logo from './assets/logo.png';
import locationPin from './assets/location-pin.png';
export default  function App() {
  
  return (
    <div className="App">
  
       <NavBar/>
        <Header/>
   
   
    </div>
  );
}
function Logo(){
return <img src={logo} className="logo"/>
}
function Title(){
  return <h1 className="name">Master Cheif Resturant</h1>
}
function ResturantInfo(){
  return <div className="infoContainer">
    <div className="locationInfo"><div className="Container"><img src={locationPin} className="locationIcon"/><h4>Cairo,Egypt</h4></div></div>
    <div className="contactInfo"><div className="Container"><h4>+20 1062020784</h4></div></div>
  

  </div>
}
function Header(){
  return <div className="headerContainer">
  <div className="header">
    <Title/><Logo/></div>
  <div className="ResturantInfo"><ResturantInfo/></div>
  </div>
}
function NavBarText({text}){
  return <a className="navBarText">{text}</a>
}
function NavBar(){

    return <div className=" navBarContainer">
    <link to="/about"><NavBarText text="Home" /></link>
     <NavBarText text="About Us" />
     <NavBarText text="Menu" />
   
     
     </div>
}
function HomePage(){
  return<h1 className="test">h</h1>
  }
 
  function AboutUsPage(){
    return<h1 className="test">5o</h1>
  }
  function MenuPage(){
    return<h1 className="test">5o</h1>
  }






