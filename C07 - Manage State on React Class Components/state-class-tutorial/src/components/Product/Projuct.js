import React, { Component } from "react";
import "./Product.css";

export default class Product extends Component {
/* 
* The state of a React class is a special property that controls the rendering of a page. When you change the state, React knows that the component is out-of-date and will automatically re-render. When a component re-renders, it modifies the rendered output to include the most up-to-date information in state. In this example, the component will re-render whenever you add a product to the cart or remove it from the cart. You can add other properties to a React class, but they won’t have the same ability to trigger re-rendering.
*/
    state = {
        cart: [],
        total: 0
    }
  render() {
    return (
      <div className="wrapper">
        <div>Shopping Cart : {this.state.cart.length} total items.</div>
        <div>Total: {this.state.total}</div>
        <div className="product">
          <span role="img" aria-label="ice cream">
            🍦
          </span>
        </div>
        <button>Add</button> <button>Remove</button>
      </div>
    );
  }
}
