import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import BuyButton from "./BuyButton";

export default function CartTotals({ value }) {
  const { cartSubtotal, cartVat, cartTotal, cart } = value;

  return (
    <React.Fragment>
      <div className="container">
        <hr />
        <div className="section">
          <div className="row">
            <div className="col-md-6 col-8">
              <h5>
                <span className="light">Subtotal </span>
              </h5>
            </div>
            <div className="col-md-6 col-4 bold text-right">
              <h5>
                <span className="light">£{cartSubtotal.toFixed(2)}</span>
              </h5>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-8">
              <h5>
                <span className="light">VAT @ 20 % </span>
              </h5>
            </div>
            <div className="col-md-6 col-4 bold text-right">
              <h5>
                <span className="light">£{cartVat.toFixed(2)}</span>
              </h5>
            </div>
          </div>
        </div>

        <hr />

        <div className="section">
          <div className="row">
            <div className="col-md-6 col-8 bold">
              <h5>
                <strong>
                  <span>Total </span>
                </strong>
              </h5>
            </div>
            <div className="col-md-6 col-4 bold text-right size-lg">
              <h5>
                <strong>
                  <span>£{cartTotal.toFixed(2)}</span>
                </strong>
              </h5>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-md-6 col-8"></div>
            <div className="col-md-6 col-4 bold text-right">
              <BuyButton cart={cart} />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
