import logo from './assets/logo.png';
import pizzaGif from './assets/pizza-ad.gif';
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import img1 from './assets/img1.png';
<meta content="width=device-width, initial-scale=1" name="viewport" />

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
    <Title/><Logo/></div>
    <SubNavBar/>
  </div>
}
function NavBarText({text}){
  return <a className="navBarText">{text}</a>
}
function SubNavBarText({text}){
  return <a className="subNavBarText">{text}</a>
}
function SubNavBar(){
  return <div className=" subNavBarContainer">
     
     <SubNavBarText text="searchicon"/>
      <SubNavBarText className="likeicon" text="likeicon" />
     <SubNavBarText text="deliveryicon" />
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
      <PlateContainer productName="Pizza" productInfo="Lorem ispum Lorem ispum Lorem ispum" productPrice="250 LE"/>
      <PlateContainer productName="Pizza" productInfo="Lorem ispum Lorem ispum Lorem ispum" productPrice="250 LE"/>
      <PlateContainer productName="Pizza" productInfo="Lorem ispum Lorem ispum Lorem ispum" productPrice="250 LE"/>
      <PlateContainer productName="Pizza" productInfo="Lorem ispum Lorem ispum Lorem ispum" productPrice="250 LE"/>
      <PlateContainer productName="Pizza" productInfo="Lorem ispum Lorem ispum Lorem ispum" productPrice="250 LE"/>
      <PlateContainer productName="Pizza" productInfo="Lorem ispum Lorem ispum Lorem ispum" productPrice="250 LE"/>
      <PlateContainer productName="Pizza" productInfo="Lorem ispum Lorem ispum Lorem ispum" productPrice="250 LE"/>
      <PlateContainer productName="Pizza" productInfo="Lorem ispum Lorem ispum Lorem ispum" productPrice="250 LE"/>
      <PlateContainer productName="Pizza" productInfo="Lorem ispum Lorem ispum Lorem ispum" productPrice="250 LE"/>
    
      </div>
    </div>
    <div className="MenuSection">
      <h1 className="SectionTitle">Pastas</h1>
      <div className="CategoryContainer">
      <PlateContainer productName="Pasta" productInfo="Lorem ispum Lorem ispum Lorem ispum" productPrice="250 LE" />
      <PlateContainer productName="Pasta" productInfo="Lorem ispum Lorem ispum Lorem ispum" productPrice="250 LE" />
      <PlateContainer productName="Pasta" productInfo="Lorem ispum Lorem ispum Lorem ispum" productPrice="250 LE" />
      <PlateContainer productName="Pasta" productInfo="Lorem ispum Lorem ispum Lorem ispum" productPrice="250 LE" />
      <PlateContainer productName="Pasta" productInfo="Lorem ispum Lorem ispum Lorem ispum" productPrice="250 LE" />
      <PlateContainer productName="Pasta" productInfo="Lorem ispum Lorem ispum Lorem ispum" productPrice="250 LE" />
      <PlateContainer productName="Pasta" productInfo="Lorem ispum Lorem ispum Lorem ispum" productPrice="250 LE" />
      <PlateContainer productName="Pasta" productInfo="Lorem ispum Lorem ispum Lorem ispum" productPrice="250 LE" />
      <PlateContainer productName="Pasta" productInfo="Lorem ispum Lorem ispum Lorem ispum" productPrice="250 LE" />
      </div>
    </div>
    <div className="MenuSection">
      <h1 className="SectionTitle">Desserts</h1>
      <div className="CategoryContainer">
      <PlateContainer productName="Pasta" productInfo="Lorem ispum Lorem ispum Lorem ispum" productPrice="250 LE" />
      <PlateContainer productName="Pasta" productInfo="Lorem ispum Lorem ispum Lorem ispum" productPrice="250 LE" />
      <PlateContainer productName="Pasta" productInfo="Lorem ispum Lorem ispum Lorem ispum" productPrice="250 LE" />
      <PlateContainer productName="Pasta" productInfo="Lorem ispum Lorem ispum Lorem ispum" productPrice="250 LE" />
      <PlateContainer productName="Pasta" productInfo="Lorem ispum Lorem ispum Lorem ispum" productPrice="250 LE" />
      <PlateContainer productName="Pasta" productInfo="Lorem ispum Lorem ispum Lorem ispum" productPrice="250 LE" />
      <PlateContainer productName="Pasta" productInfo="Lorem ispum Lorem ispum Lorem ispum" productPrice="250 LE" />
      <PlateContainer productName="Pasta" productInfo="Lorem ispum Lorem ispum Lorem ispum" productPrice="250 LE" />
      <PlateContainer productName="Pasta" productInfo="Lorem ispum Lorem ispum Lorem ispum" productPrice="250 LE" />
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
      <div className="HeroSectionSubContainer">
        <h1 className="HeroSectionCaption">Order Now the finest pizza in town</h1>
      <div className="desccontainer">
      <img className="HeroSectionimg" src={img1}/>
      <h5 className="mainimagecaption">Master Chief Resturant<br/><span> is more than just a place to savor exquisite Italian cuisine. It's a hub of community and celebration, where friends and families gather to create cherished memories. Our welcoming staff strives to provide unparalleled hospitality, ensuring your visit is a journey of flavors and warmth</span></h5>
      </div>
      <div className="ordernowcontainer">
      <h3 className="ordernow">Order Now!</h3>
      </div>
      </div>
    </div>
  </div>
</div>
}


