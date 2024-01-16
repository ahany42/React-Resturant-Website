import { Carousel } from 'react-bootstrap';
import img3 from './assets/img3.jpg';
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
function HomePage(){

    return <div className="HomePageContainer">
      <div className="HeroSection">
        <div className="HeroSectionContainer">
        
          <HomepageCarousel className="HomePageCarousel"/>
        
        </div>
      </div>
      
    </div>
    }
    export default HomePage;