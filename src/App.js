import logo from './assets/logo.png';
import image1 from './assets/img1.png';
import image2 from './assets/img2.jpg';
import image3 from './assets/img3.jpg';
import locationPin from './assets/location-pin.png';



export default  function App() {
  
  return (
    <div className="App">
       
    
        <Header />
        <HomePage/>
   
   
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
    <NavBar/>
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
   <NavBarText text="Home" />
     <NavBarText text="About Us" />
     <NavBarText text="Menu" />
   
     
     </div>
}


function HomePage(){
return <div className="mainsection">
  <h3>Our signature dish</h3>
  <img className="mainimage"src={image1}/></div>

  }
 
  function AboutUsPage(){
    
  }
  function MenuPage(){

  }






