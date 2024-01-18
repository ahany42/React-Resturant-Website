import { Carousel } from 'react-bootstrap';
import pizza from './assets/img1.png';
import pasta from './assets/pasta.png';
function HomeCarouselContent({img,title,caption}){
return <div className="CarouselContent">
  <div className="CarouselContainer">
  <h2 className="CarouselTitle">{title}</h2>
  <div className="CarouselImgContainer">
   <img className="Carouselimg" src={img}></img>
   <h5 className="CarouselCaption">{caption}</h5>
  </div>

</div>
<div className="MobileCarouselContainer">
<h2 className="MobileCarouselTitle">{title}</h2>
  <div className="MobileCarouselImgContainer">
   <img className="MobileCarouselimg" src={img}></img>
   <h5 className="MobileCarouselCaption">{caption}</h5>
  </div>
</div>
<div className="buttonContainer">
<button type="button" class="btn btn-dark">Order Now</button>
</div>
</div>
}
function HomepageCarousel(){
    return (  <Carousel className="Carousel" data-bs-theme="dark">
    <Carousel.Item>
    <HomeCarouselContent caption="We believe in quality, and that starts with our ingredients. Savor the goodness of locally-sourced, fresh produce and premium cheeses that elevate our pizzas to a whole new level." title="Order The Best Pizza In Town" img={pizza}/>
    </Carousel.Item>
    <Carousel.Item>
    <HomeCarouselContent caption="Our pasta menu is a celebration of authenticity, offering a diverse range of pasta shapes and sauces that cater to every craving." title="Order The Finest Pasta In Town" img={pasta}/>
    </Carousel.Item>
    <Carousel.Item>
    <HomeCarouselContent caption="We believe in quality, and that starts with our ingredients. Savor the goodness of locally-sourced, fresh produce and premium cheeses that elevate our pizzas to a whole new level." title="Order The Best Pizza In Town" img={pasta}/>
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