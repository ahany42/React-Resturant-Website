import logo from './assets/logo.png';
import image1 from './assets/img1.png';
import image2 from './assets/img2.jpg';
import image3 from './assets/img3.jpg';
import pizzaGif from './assets/pizza-ad.gif';

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
return <div className="HomePageContainer">
  <section className="pizzagifsection">
  <img className="pizzagif"src={pizzaGif}/>
  </section>
<div className="mainsection">

  <h3 className="mainimagecaption">Our signature pizza<br/><span>Master Cheif Resturant is more than just a place to savor exquisite Italian cuisine. It's a hub of community and celebration, where friends and families gather to create cherished memories. Our welcoming staff strives to provide unparalleled hospitality, ensuring your visit is a journey of flavors and warmth</span></h3>
  <img className="mainimage"src={image1}/>
  
  </div>
  
  </div>

  }
 
  function AboutUsPage(){
    
  }
  function MenuPage(){

  }






