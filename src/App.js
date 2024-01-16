import logo from './assets/logo.png';
import pizzaGif from './assets/pizza-ad.gif';
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { PiShoppingBagOpenFill } from "react-icons/pi";
import { BiSolidLike } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";
import img1 from './assets/img1.png';
import img3 from './assets/img3.jpg';
import 'bootstrap/dist/css/bootstrap.css';
import { Carousel } from 'react-bootstrap';

import './App.css';
  <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0" />
export default  function App() {
  
  return (
    <div className="App">
        <Header />
        <HomePage className="Homepage"/>
      
         {/* <MenuPage /> */}
       
   {/* <AboutUsPage/> */}
    </div>
  );
}


   
function HomepageCarousel(){
  return (  <Carousel className="Carousel" data-bs-theme="light">
  <Carousel.Item>
    <img 
      className="Carouselimg"
      src={img3}
      alt="First slide"
    />
   
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="Carouselimg"
      src={img3}
      alt="Second slide"
    />
  
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="Carouselimg"
      src={img3}
      alt="Third slide"
    />
    
  </Carousel.Item>
</Carousel>
    );
}
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
    <SubNavBar/>
  </div>
}
function NavBarText({text}){
  return <a className="navBarText">{text}</a>
}
function SubNavBarText({text}){
  return <a className="subNavBarText">{text}</a>
}
function SearchBar(){
  return <div className="inputBox_container">
  <svg className="search_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" alt="search icon">
    <path d="M46.599 46.599a4.498 4.498 0 0 1-6.363 0l-7.941-7.941C29.028 40.749 25.167 42 21 42 9.402 42 0 32.598 0 21S9.402 0 21 0s21 9.402 21 21c0 4.167-1.251 8.028-3.342 11.295l7.941 7.941a4.498 4.498 0 0 1 0 6.363zM21 6C12.717 6 6 12.714 6 21s6.717 15 15 15c8.286 0 15-6.714 15-15S29.286 6 21 6z">
    </path>
  </svg>
  <input className="inputBox" id="inputBox" type="text" placeholder="Search For Plates"/>
</div>
}
function SubNavBar(){
  return <div className=" subNavBarContainer">
     
     <SubNavBarText text=<SearchBar/> />
     
     </div>
    
}
function NavBar(){

    return <div className=" navBarContainer">
    
     <NavBarText text="Home"/>
     <NavBarText text="Menu" />
     <NavBarText text="Order" />
     <NavBarText text="About Us" />
     </div>
}

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
function AboutUsPage(){
return <div className="AboutUsPageContainer">
  <section className="pizzagifsection">
  <img className="pizzagif"src={pizzaGif}/>
  </section>
<div className="AboutUsPageMainsection">
  <h3 className="mainimagecaption">Master Chief Resturant<br/><span> is more than just a place to savor exquisite Italian cuisine. It's a hub of community and celebration, where friends and families gather to create cherished memories. Our welcoming staff strives to provide unparalleled hospitality, ensuring your visit is a journey of flavors and warmth</span></h3>
 
  </div>
  <section className="footersection">
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
  <Footer/>
  </section>
  </div>
  }
function PlateContainer({productName,productInfo,productPrice}){
  return <div className="PlateCardContainer">
      <h6 className="PlateTitle">{productName}</h6>
      <hr/>
      <div className="PlateImageContainer">
      <img className="PlateImage"src={img1}/>
      </div>
      <div className="PlateInfo">
        <h2 className="PlateDescription">{productInfo}</h2>
        <h4 className="PlatePrice">{productPrice}</h4>
      </div>
      </div>
}

  function MenuPage(){
  return <div className="MenuPage">
    <div className="MenuSection">
      <h1 className="SectionTitle">Pizzas</h1>
      <div className="CategoryContainer">
      <PlateContainer productName="Margherita" productInfo="Tomato sauce,mozzarella cheese, basil, and olive oil" productPrice="250 LE"/>
      <PlateContainer productName="Marinara" productInfo="Tomato sauce, garlic, oregano, and olive oil" productPrice="250 LE"/>
      <PlateContainer productName="Quattro Stagioni" productInfo="Four sections, each representing a different season" productPrice="250 LE"/>
      <PlateContainer productName="Quattro Formaggi" productInfo="Mozzarella,Gorgonzola, Parmesan,and fontina cheeses" productPrice="250 LE"/>
      <PlateContainer productName="Napoletana" productInfo="Tomatoes, fresh Mozzarella, basil, and olive oil" productPrice="250 LE"/>
      <PlateContainer productName=" Bianca" productInfo="Simple, white pizza. Olive oil, salt, and rosemary" productPrice="250 LE"/>
      <PlateContainer productName="Romana" productInfo="A thin, crispy crust.Tomatoes, Mozzarella, and fresh basil" productPrice="250 LE"/>
      <PlateContainer productName="Calzone" productInfo="Folded pizza,filled with ricotta, Mozzarella and salami" productPrice="250 LE"/>
      <PlateContainer productName="Siciliana" productInfo="Mozzarella,tomato sauce,anchovies and olives" productPrice="250 LE"/>
    
      </div>
    </div>
    <div className="MenuSection">
      <h1 className="SectionTitle">Pastas</h1>
      <div className="CategoryContainer">
      <PlateContainer productName="Spaghetti Bolognese " productInfo="Rich meat-based sauce tomatoes, onions and carrots" productPrice="250 LE" />
      <PlateContainer productName="Fettuccine Alfredo" productInfo="Creamy sauce , heavy cream, and Parmesan cheese" productPrice="250 LE" />
      <PlateContainer productName="Linguine alle Vongole" productInfo="Linguine pasta served with a savory clam sauce " productPrice="250 LE" />
      <PlateContainer productName="Lasagna" productInfo="Layered pasta with ground meat and tomato sauce" productPrice="250 LE" />
      <PlateContainer productName="Ravioli" productInfo="Pasta parcels filled with ricotta,spinach and meat" productPrice="250 LE" />
      <PlateContainer productName="Carbonara" productInfo="Coated in a sauce made with eggs and Romano cheese " productPrice="250 LE" />
      <PlateContainer productName="Orecchiette" productInfo="Orecchiette pasta with sautéed broccoli rabe" productPrice="250 LE" />
      <PlateContainer productName="Gnocchi" productInfo="Soft potato dumplings served with tomato sauce" productPrice="250 LE" />
      <PlateContainer productName="Puttanesca" productInfo="Tomatoes, garlic, olives, capers, anchovies, and olive oil" productPrice="250 LE" />
      </div>
    </div>
    <div className="MenuSection">
      <h1 className="SectionTitle">Desserts</h1>
      <div className="CategoryContainer">
      <PlateContainer productName="Tiramisu" productInfo="Layers of ladyfingers and a cheese mixture" productPrice="250 LE" />
      <PlateContainer productName="Cannoli" productInfo="Crispy pastry tubes filled with a sweet ricotta cheese filling" productPrice="250 LE" />
      <PlateContainer productName="Gelato" productInfo="Gelato comes in a variety of flavors" productPrice="250 LE" />
      <PlateContainer productName="Chocolate Cake" productInfo="Vanilla,Eggs,Milk and hot Chocolate sauce" productPrice="250 LE" />
      <PlateContainer productName="Cheesecake" productInfo="Cream cheese, sugar, and eggs topped with jam or chocolate" productPrice="250 LE" />
      <PlateContainer productName="Éclairs" productInfo="choux dough,filled with cream ,and topped with chocolate " productPrice="250 LE" />
      <PlateContainer productName="Tres Leches Cake" productInfo="A sponge cake soaked in milk topped with choclate" productPrice="250 LE" />
      <PlateContainer productName="Churros" productInfo="Served with chocolate sauce or dulce de leche." productPrice="250 LE" />
      <PlateContainer productName="Molten Cake" productInfo="Fluffy cake with a rich chocolate center" productPrice="250 LE" />
      </div>
    </div>
  </div>
  }
function OrderPage(){
  
}

function HomePage(){
return <div className="HomePageContainer">
  <div className="HeroSection">
    <div className="HeroSectionContainer">
    
      <HomepageCarousel className="HomePageCarousel"/>
    
    </div>
  </div>
  
</div>
}


