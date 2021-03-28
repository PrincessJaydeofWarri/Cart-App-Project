import React, { Component } from "react";
import EmptyCart from "./EmptyCart";
import { ProductConsumer } from "../../context";
import CartList from "./CartList";
import "../../App.css";
import CartTotals from "./CartTotals";
import "bootstrap/dist/css/bootstrap.min.css";

export default class Cart extends Component {
  render() {
    return (
      <section>
        <ProductConsumer>
          {(value) => {
            const { cart } = value;
            if (cart.length > 0) {
              return (
                <React.Fragment>
                  <h3>Review Your Order & Complete Checkout</h3>
                  <div className="container">
                    <table className="table-wrapper">
                      <tr>
                        <h4>Review Your order</h4>
                      </tr>
                      <tr>
                        <CartList value={value} />
                      </tr>
                    </table>
                    <CartTotals value={value} />
                  </div>
                </React.Fragment>
              );
            } else {
              return (
                <React.Fragment>
                  <h3>Review Your order & Complete checkout</h3>
                  <div className="container">
                    <table className="table-wrapper">
                      <tr>
                        <h4>Review Your order</h4>
                      </tr>
                      <tr>
                        <EmptyCart />
                      </tr>
                    </table>
                  </div>
                </React.Fragment>
              );
            }
          }}
        </ProductConsumer>
      </section>
    );
  }
}
