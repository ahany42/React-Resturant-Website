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

  <h3 className="mainimagecaption">Master Cheif Resturant<br/><span> is more than just a place to savor exquisite Italian cuisine. It's a hub of community and celebration, where friends and families gather to create cherished memories. Our welcoming staff strives to provide unparalleled hospitality, ensuring your visit is a journey of flavors and warmth</span></h3>
  <img className="mainimage"src={image1}/>

  </div>
  <section>
    <h1 class="sectiontitle">Our Location</h1>
  <div className="Map">
   
      <iframe
        title="Restaurant Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27610.935230916544!2d31.323251092147!3d30.112312942894064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145815dcc3e4e599%3A0x6c67c22e4aa39206!2sHeliopolis%2C%20Al%20Matar%2C%20El%20Nozha%2C%20Cairo%20Governorate%204470351!5e0!3m2!1sen!2seg!4v1704391699821!5m2!1sen!2seg"
        width="500"
        height="500"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
  
  </div>
  
  </section>
  </div>
  }
 
  function AboutUsPage(){
    
  }
  function MenuPage(){

  }






