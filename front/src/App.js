import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { ProductsCards } from "./components/ProductCards";
import { Loader } from "./components/Loader";
import { ProductsDetail } from "./components/ProductsDetail";
import ShoppingCarItem from "./components/ShoppingCarItem";

const App = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [carItem, setCarItem] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      getApiProducts();
    }, 1500);
  }, []);

  const getApiProducts = async () => {
    let response = await fetch("http://localhost:5000/api/products");
    let data = await response.json();
    setProducts(data);
    setIsLoading(true);
  };

  const addToCar = (id, data) => {
    let product = data;
    let array = [];
    array.push(product);
    setCartItems(array);
  };

  return (
    <Router>
      <section>
        <Header counter={carItem} />

        <Switch>
          <Route path="/products/:id">
            <ProductsDetail />
          </Route>

          <Route path="/car">
            <section className="padding flex-wrap center">
              {cartItems.map((item) => (
                <ShoppingCarItem key={item._id} data={item} />
              ))}
            </section>
          </Route>

          <Route path="/">
            {!isLoading && <Loader />}
            {isLoading && (
              <section className="flex-wrap padding center">
                {products.map((item) => (
                  <>
                    <ProductsCards
                      key={item._id}
                      image={item.image}
                      name={item.name}
                      brand={item.brand}
                      price={item.price}
                      rating={item.rating}
                      reviews={item.numReviews}
                      disable={item.countInStock === 0 ? "disable" : ""}
                      productId={item._id}
                      add={() => addToCar(item._id, item)}
                    />
                  </>
                ))}
              </section>
            )}
          </Route>
        </Switch>
      </section>
    </Router>
  );
};

export default App;
