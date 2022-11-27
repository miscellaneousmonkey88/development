import './App.css';
import { useState } from "react";
import PlantItem from "./components/PlantItem.js";
import plantData from "./plant-data.json";

plantData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
  item.count = 0;
});

function App() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0.0);
  const [plantD, setData] = useState(plantData);


  const addToCart = (item) => {
    item.count += 1;
    if (item.count == 1) {
      setCart([...cart, item]);
    }
    const newTotal = Math.round((total + item.price)*100)/100;
    setTotal(newTotal);
  };
  
  const removeFromCart = (item) => {
    item.count -= 1;
    if (item.count == 0) {
      let hardCopy = [...cart];

      const index = hardCopy.indexOf(item);
      if (index != -1) {
        hardCopy.splice(index, 1);
        setCart(hardCopy);
    }}
    if (item.count >= 0) {
      const newTotal = Math.round(((total - item.price))*100)/100;
      setTotal(newTotal);
    }
  };

  /* sorting functions */
  const sortHighLow = (data) => {
    let hardCopy = [...data];
    hardCopy = hardCopy.sort((a, b) => b.difficulty - a.difficulty);
    setData(hardCopy);
  }
  const sortLowHigh = (data) => {
    let hardCopy = [...data];
    hardCopy = hardCopy.sort((a, b) => a.difficulty - b.difficulty);
    setData(hardCopy);
  }

  const sortWarm  = (data) => {
    let hardCopy = [...data];
    hardCopy = hardCopy.filter((dataItem) => dataItem.climate === "warm");
    setData(hardCopy);
  }
  const sortTropical  = (data) => {
    let hardCopy = [...data];
    hardCopy = hardCopy.filter((dataItem) => dataItem.climate === "tropical");
    setData(hardCopy);
  }
  const sortUnderwater  = (data) => {
    let hardCopy = [...data];
    hardCopy = hardCopy.filter((dataItem) => dataItem.climate === "underwater");
    setData(hardCopy);
  }
  const sortUnder10  = (data) => {
    let hardCopy = [...data];
    hardCopy = hardCopy.filter((dataItem) => dataItem.price < 10);
    setData(hardCopy);
  }
  const sortUnder20  = (data) => {
    let hardCopy = [...data];
    hardCopy = hardCopy.filter((dataItem) => dataItem.price < 20);
    setData(hardCopy);
  }
  const resetD = (data) => {
    setData(plantData);
  }

  const cartItems = cart.map((item) => (
    <div key={item.id}>
      {`${item.name}: $${item.price} x${item.count} `}
      <input type="submit" value="➕" onClick={() => addToCart(item)} />
      <input type="submit" value="➖" onClick={() => removeFromCart(item)} />
    </div>
  ));


  return (
    <div className="App">
      <div id="title">Salomon Sun Plant Nursery 🌞🪴</div>
      <div id="sort">
        <div id="txt4">Reset: <input type="submit" value="reset all filters" onClick={() => resetD(plantD)} /></div>
        <div id="txt4">
        Sort by difficulty: 
        <input type="submit" value="low to high" onClick={() => sortLowHigh(plantD)} />
        <input type="submit" value="high to low" onClick={() => sortHighLow(plantD)} />
        </div><div id="txt4">
        Filter by climate:
          <input type="submit" value="warm climate" onClick={() => sortWarm(plantD)} />
          <input type="submit" value="tropical" onClick={() => sortTropical(plantD)} />
          <input type="submit" value="underwater" onClick={() => sortUnderwater(plantD)} />
        </div><div id="txt4">
        Filter by price:
          <input type="submit" value="Under $10" onClick={() => sortUnder10(plantD)} />
          <input type="submit" value="Under $20" onClick={() => sortUnder20(plantD)} />
      </div>
      </div>


      <div class="flexouter">
      <div class="flex1">

      {plantD.map((item, index) => (
        <div key={item.id}>
          <div className="PlantItem"><PlantItem image={item.image} 
          name={item.name} price={item.price} difficulty={item.difficulty} climate={item.climate}
          addbutton = {<input type="submit" value="➕" onClick={() => addToCart(item)} />}
          removebutton = {<input type="submit" value="➖" onClick={() => removeFromCart(item)} />}
          >
            </PlantItem>
          </div>
      </div>
      ))}
      </div>

      <div class="flexcart">
        <div id="txt">Cart</div>
        {cartItems}
        <div id="txt3">Total price: ${total}</div>
        <div id="txt2">Proceed to checkout</div>
      </div>
      </div>
    </div>
  );
}

export default App;
