import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Header from './Components/Header.js';
import AboutUsPage from './Components/AboutUsPage.js';
import HomePage from './Components/HomePage.js';
import ReservePage from './Components/ReservePage.js';
import MenuPage from'./Components/MenuPage.js';


  <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0" />
export default  function App() {
  
  return (
   
    <div className="App">

      {/* <div>

      <HomePage className="Homepage"/> 
      </div> */}
       
       
       <div>
      <Header />
      <MenuPage />
      </div>  
      
     
          {/* <ReservePage /> */}

          {/* <div>
          <Header />
          <AboutUsPage/>   
          </div> */}
     
         
    </div>
  );
    
}








