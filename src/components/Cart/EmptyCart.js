import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import DisabledButton from "./DisabledButton";

export default function EmptyCart() {
  return (
    <div>
      <div className="container">
        <div className="section">
          <hr />
          <div className="row">
            <div className="col-md-6 col-8">
              <h5>
                <span className="light">Subtotal </span>
              </h5>
            </div>
            <div className="col-md-6 col-4 bold text-right">
              <h5>
                <span className="light">£0.00</span>
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
                <span className="light">£0.00</span>
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
                  <span>£0.00</span>
                </strong>
              </h5>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-md-6 col-8"></div>
            <div className="col-md-6 col-4 bold text-right">
              <DisabledButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
