import margherita from '../assets/margheritaPizza.png';
import marinara from'../assets/marinaraPizza.png';
import quattro from '../assets/quattroPizza.png';
import quattroFromage from'../assets/quattroFromagePizza.png';
import napoletana from'../assets/napoletanaPizza.png';
import bianca from'../assets/biancaPizza.png';
import romana from'../assets/romanaPizza.png';
import calzone from'../assets/calzonePizza.png';
import siciliana from'../assets/sicilianaPizza.png';
import bolognese from'../assets/bolognesePasta.png';
import alfreedo from'../assets/alferedoPasta.png';
import vongole from'../assets/linguineallevongolePasta.png';
import lasgna from'../assets/lasgnaPasta.png';
import ravioli from'../assets/ravioliPasta.png';
import carbonara from'../assets/carbonaraPasta.png';
import orecchiette from'../assets/orecchiettePasta.png';
import gnocchi from'../assets/gnocchiPasta.png';
import puttanesca from'../assets/puttanescaPasta.png';
import taramisu from'../assets/taramisuDessert.png';
import cannoli from'../assets/cannoliDessert.png';
import gelato from'../assets/gelatoDessert.png';
import chocolatecake from'../assets/chocolatecakeDessert.png';
import cheesecake from'../assets/cheesecakeDessert.png';
import eclairs from'../assets/eclairsDessert.png';
import tresleches from'../assets/treslechesDessert.png';
import churros from'../assets/churrosDessert.png';
import moltencake from'../assets/moltencakeDessert.png';
import '../App.css';
function PlateContainer({productName,productInfo,productPrice,img}){
    return <div className="PlateCardContainer">
        <h6 className="PlateTitle">{productName}</h6>
        <hr/>
        <div className="PlateImageContainer">
        <img className="PlateImage"src={img}/>
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
        <PlateContainer img={margherita} productName="Margherita" productInfo="Tomato sauce,mozzarella cheese, basil, and olive oil" productPrice="250 LE"/>
        <PlateContainer img={marinara} productName="Marinara" productInfo="Tomato sauce, garlic, oregano, and olive oil" productPrice="240 LE"/>
        <PlateContainer img={quattro} productName="Quattro Stagioni" productInfo="Four sections, each representing a season" productPrice="280 LE"/>
        <PlateContainer img={quattroFromage} productName="Quattro Formaggi" productInfo="Mozzarella,Gorgonzola, Parmesan,and fontina cheeses" productPrice="310 LE"/>
        <PlateContainer img={napoletana} productName="Napoletana" productInfo="Tomatoes, fresh Mozzarella, basil, and olive oil" productPrice="270 LE"/>
        <PlateContainer img={bianca} productName=" Bianca" productInfo="Simple, white pizza. Olive oil, salt, and rosemary" productPrice="250 LE"/>
        <PlateContainer img={romana} productName="Romana" productInfo="A thin, crispy crust.Tomatoes, Mozzarella, and fresh basil" productPrice="300 LE"/>
        <PlateContainer img={calzone} productName="Calzone" productInfo="Folded pizza,filled with ricotta, Mozzarella and salami" productPrice="230 LE"/>
        <PlateContainer img={siciliana} productName="Siciliana" productInfo="Mozzarella,tomato sauce,anchovies and olives" productPrice="350 LE"/>
      
        </div>
      </div>
      <div className="MenuSection">
        <h1 className="SectionTitle">Pastas</h1>
        <div className="CategoryContainer">
        <PlateContainer img={bolognese} productName="Spaghetti Bolognese " productInfo="Rich meat-based sauce tomatoes, onions and carrots" productPrice="200 LE" />
        <PlateContainer img={alfreedo} productName="Fettuccine Alfredo" productInfo="Creamy sauce , heavy cream, and Parmesan cheese" productPrice="280 LE" />
        <PlateContainer img={vongole} productName="Linguine alle Vongole" productInfo="Linguine pasta served with a savory clam sauce " productPrice="390 LE" />
        <PlateContainer img={lasgna} productName="Lasagna" productInfo="Layered pasta with ground meat and tomato sauce" productPrice="310 LE" />
        <PlateContainer img={ravioli} productName="Ravioli" productInfo="Pasta parcels filled with ricotta,spinach and meat" productPrice="320 LE" />
        <PlateContainer img={carbonara} productName="Carbonara" productInfo="Coated in a sauce made with eggs and Romano cheese " productPrice="270 LE" />
        <PlateContainer img={orecchiette} productName="Orecchiette" productInfo="Orecchiette pasta with sautéed broccoli rabe" productPrice="210 LE" />
        <PlateContainer img={gnocchi} productName="Gnocchi" productInfo="Soft potato dumplings served with tomato sauce" productPrice="250 LE" />
        <PlateContainer img={puttanesca}productName="Puttanesca" productInfo="Tomatoes,olives, capers, anchovies, and olive oil" productPrice="420 LE" />
        </div>
      </div>
      <div className="MenuSection">
        <h1 className="SectionTitle">Desserts</h1>
        <div className="CategoryContainer">
        <PlateContainer img={taramisu} productName="Tiramisu" productInfo="Layers of ladyfingers and a cheese mixture" productPrice="110 LE" />
        <PlateContainer img={moltencake}productName="Molten Cake" productInfo="Fluffy cake with a rich chocolate center" productPrice="250 LE" />
        <PlateContainer img={cannoli} productName="Cannoli" productInfo="Crispy pastry tubes filled with a sweet ricotta cheese filling" productPrice="140 LE" />
        <PlateContainer img={gelato} productName="Gelato" productInfo="Gelato comes in a variety of flavors" productPrice="70 LE" />
        <PlateContainer img={chocolatecake} productName="Chocolate Cake" productInfo="Vanilla,Eggs,Milk and hot Chocolate sauce" productPrice="130 LE" />
        <PlateContainer img={cheesecake} productName="Cheesecake" productInfo="Cream cheese, sugar, and eggs topped with jam." productPrice="110 LE" />
        <PlateContainer img={eclairs} productName="Éclairs" productInfo="choux dough,filled with cream ,and topped with chocolate " productPrice="120 LE" />
        <PlateContainer img={tresleches} productName="Tres Leches Cake" productInfo="A sponge cake soaked in milk topped with chocolate" productPrice="90 LE" />
        <PlateContainer img={churros} productName="Churros" productInfo="Served with chocolate sauce or dulce de leche." productPrice="110 LE" />
        
        </div>
      </div>
      <div className="MobileMenuSection">
     
        <div className="MobileCategoryContainer">
        <h1 className="MobileSectionTitle">Pizzas</h1>
        <PlateContainer img={margherita} productName="Margherita" productInfo="Tomato sauce,mozzarella cheese, basil, and olive oil" productPrice="250 LE"/>
        <PlateContainer img={marinara} productName="Marinara" productInfo="Tomato sauce, garlic, oregano, and olive oil" productPrice="240 LE"/>
        <PlateContainer img={quattro} productName="Quattro Stagioni" productInfo="Four sections, each representing a season" productPrice="280 LE"/>
        <PlateContainer img={quattroFromage} productName="Quattro Formaggi" productInfo="Mozzarella,Gorgonzola, Parmesan,and fontina cheeses" productPrice="310 LE"/>
        <PlateContainer img={napoletana} productName="Napoletana" productInfo="Tomatoes, fresh Mozzarella, basil, and olive oil" productPrice="270 LE"/>
        <PlateContainer img={bianca} productName=" Bianca" productInfo="Simple, white pizza. Olive oil, salt, and rosemary" productPrice="250 LE"/>
        <PlateContainer img={romana} productName="Romana" productInfo="A thin, crispy crust.Tomatoes, Mozzarella, and fresh basil" productPrice="300 LE"/>
        <PlateContainer img={calzone} productName="Calzone" productInfo="Folded pizza,filled with ricotta, Mozzarella and salami" productPrice="230 LE"/>
        <PlateContainer img={siciliana} productName="Siciliana" productInfo="Mozzarella,tomato sauce,anchovies and olives" productPrice="350 LE"/>
      
        </div>
      </div>
 
      <div className="MobileMenuSection">
        <div className="MobileCategoryContainer">
        <h1 className="MobileSectionTitle">Pastas</h1>
        <PlateContainer img={bolognese} productName="Spaghetti Bolognese " productInfo="Rich meat-based sauce tomatoes, onions and carrots" productPrice="200 LE" />
        <PlateContainer img={alfreedo} productName="Fettuccine Alfredo" productInfo="Creamy sauce , heavy cream, and Parmesan cheese" productPrice="280 LE" />
        <PlateContainer img={vongole} productName="Linguine alle Vongole" productInfo="Linguine pasta served with a savory clam sauce " productPrice="390 LE" />
        <PlateContainer img={lasgna} productName="Lasagna" productInfo="Layered pasta with ground meat and tomato sauce" productPrice="310 LE" />
        <PlateContainer img={ravioli} productName="Ravioli" productInfo="Pasta parcels filled with ricotta,spinach and meat" productPrice="320 LE" />
        <PlateContainer img={carbonara} productName="Carbonara" productInfo="Coated in a sauce made with eggs and Romano cheese " productPrice="270 LE" />
        <PlateContainer img={orecchiette} productName="Orecchiette" productInfo="Orecchiette pasta with sautéed broccoli rabe" productPrice="210 LE" />
        <PlateContainer img={gnocchi} productName="Gnocchi" productInfo="Soft potato dumplings served with tomato sauce" productPrice="250 LE" />
        <PlateContainer img={puttanesca}productName="Puttanesca" productInfo="Tomatoes,olives, capers, anchovies, and olive oil" productPrice="420 LE" />
        </div>
      </div>
   
      <div className="MobileMenuSection">
        <div className="MobileCategoryContainer">
        <h1 className="MobileSectionTitle">Desserts</h1>
        <PlateContainer img={taramisu} productName="Tiramisu" productInfo="Layers of ladyfingers and a cheese mixture" productPrice="110 LE" />
        <PlateContainer img={moltencake}productName="Molten Cake" productInfo="Fluffy cake with a rich chocolate center" productPrice="250 LE" />
        <PlateContainer img={cannoli} productName="Cannoli" productInfo="Crispy pastry tubes filled with a sweet ricotta cheese filling" productPrice="140 LE" />
        <PlateContainer img={gelato} productName="Gelato" productInfo="Gelato comes in a variety of flavors" productPrice="70 LE" />
        <PlateContainer img={chocolatecake} productName="Chocolate Cake" productInfo="Vanilla,Eggs,Milk and hot Chocolate sauce" productPrice="130 LE" />
        <PlateContainer img={cheesecake} productName="Cheesecake" productInfo="Cream cheese, sugar, and eggs topped with jam." productPrice="110 LE" />
        <PlateContainer img={eclairs} productName="Éclairs" productInfo="choux dough,filled with cream ,and topped with chocolate " productPrice="120 LE" />
        <PlateContainer img={tresleches} productName="Tres Leches Cake" productInfo="A sponge cake soaked in milk topped with chocolate" productPrice="90 LE" />
        <PlateContainer img={churros} productName="Churros" productInfo="Served with chocolate sauce or dulce de leche." productPrice="110 LE" />
        
        </div>
      </div>
    
    </div>
    }
    export default MenuPage;