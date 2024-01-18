
import './App.css';
import Header from './Header.js';
import MenuPage from './MenuPage.js';
import AboutUsPage from './AboutUsPage.js';
import HomePage from './HomePage.js';


  <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0" />
export default  function App() {
  
  return (
   
    <div className="App">
         <Header />
        <div>
        <HomePage className="Homepage"/>
        </div>
       <div >
       {/* <MenuPage /> */}
       </div>
          <div>
        {/* <AboutUsPage/>   */}
          </div>
         
    </div>
  );
    
}








