import img1 from './assets/img1.png';
import './App.css';
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
    export default MenuPage;