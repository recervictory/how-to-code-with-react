import React, { Component } from "react";
import "./Product.css";

const products = [
  {
    emoji: "🍦",
    name: "ice cream",
    price: 5,
  },
  {
    emoji: "🍩",
    name: "donuts",
    price: 2.5,
  },
  {
    emoji: "🍉",
    name: "watermelon",
    price: 4,
  },
];

export default class Product extends Component {
  /*
   * The state of a React class is a special property that controls the rendering of a page. When you change the state, React knows that the component is out-of-date and will automatically re-render. When a component re-renders, it modifies the rendered output to include the most up-to-date information in state. In this example, the component will re-render whenever you add a product to the cart or remove it from the cart. You can add other properties to a React class, but they won’t have the same ability to trigger re-rendering.
   */
  state = {
    cart: [],
    
  };

  currencyOptions = {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  };

  getTotal = () => {
    //* Create a method called getTotal() that takes the state and converts it to a localized string using an array of currencyOptions.
    const total = this.state.cart.reduce(
      (totalCost, item) => totalCost + item.price,
      0
    );
    return total.toLocaleString(undefined, this.currencyOptions);
  };

  add = (product) => {
    //* To update state, React developers use a special method called setState that is inherited from the base Component class.
    this.setState((state) => ({
      cart: [...state.cart, product],
    }));
  };

  remove = (product) => {
    //* Remove all item from cart and setState total to 0
    this.setState((state) => {
      const cart = [...state.cart];
      const productIndex = cart.findIndex((p) => p.name === product.name);
      if (productIndex < 0) {
        return;
      }
      cart.splice(productIndex, 1);

      return { cart };
    });
  };
  render() {
    return (
      <div className="wrapper">
        <div>Shopping Cart : {this.state.cart.length} total items.</div>
        <div>Total: {this.getTotal()}</div>
        <div>
          {products.map((product) => (
            <div key={product.name}>
              <div className="product">
                <span role="img" aria-label={product.name}>
                  {product.emoji}
                </span>
              </div>
              <button onClick={() => this.add(product)}>Add</button>
              <button onClick={() => this.remove(product)}>Remove</button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
