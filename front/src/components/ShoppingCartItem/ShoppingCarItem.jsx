import React ,{ useState ,useEffect} from "react";
import '../ShoppingCartItem/ShoppingCartItem.css';

const ShoppingCarItem = ({ data , cartItems, setCartItems}) => {
  let { name, countInStock, price, image } = data;
  const [count, setCount] = useState(1);
  const [totalPrice, setTotalPrice] = useState(price);

const increaseCount = () => {
if (count < countInStock) {
setCount(count + 1);
}
}

const decreaseCount = () => {
if (count > 1) {
setCount(count - 1);
}
}

const handleRemoveItem = () => {
  if (cartItems) {
  const index = cartItems.findIndex((item) => item._id === data._id);
  if (index !== -1) {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
  }
}

};

useEffect(() => {
  setTotalPrice(price * count);
}, [count, price]);

  return (
    <section className="shopping-card-item padding scale">
      <figure className="shopping-card-item__image">
        <img src={`http://localhost:5000${image}`} alt="products" />
      </figure>
      <section className="shopping-card-item__info flex-column">
        <h2 className="shopping-card-item__name">{name}</h2>
        <p className="shopping-card-item__stock">{countInStock}</p>
        <p className="shopping-card-item__price">$ {totalPrice.toFixed(2)}</p>
      </section>
      <section className="shopping-card-item__buy">
        <button
          onClick={decreaseCount}
          className="shopping-card-item__buy-less button transition-button"
        >
          <span className="fas fa-minus"></span>
        </button>
        <p className="shopping-card-item__buy-count flex-center">{count}</p>

        <button
          className="shopping-card-item__buy-more button transition-button"
          onClick={increaseCount}
          
        >
          <span className="fas fa-plus"></span>
        </button>

        <button
          className="shopping-card-item__remove button transition-button"
          onClick={handleRemoveItem}
        >
          <span className="fas fa-trash"></span>
        </button>
        
      </section>
      
    </section>
  );
};

export default ShoppingCarItem;
