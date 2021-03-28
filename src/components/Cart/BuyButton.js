import React, { Component } from "react";
import "./CartItem";

export default class BuyButton extends Component {
  async postData(cart) {
    if (!cart.length) return;
    // will evalute to true of cart.length is falsey i.e. 0 and exit the postData function
    try {
      let result = await fetch(
        "https://webhook.site/d6f13f62-7f93-4479-a25f-749a43416c60",
        {
          method: "post",
          mode: "no-cors",
          headers: {
            Accept: "application/json",
            "Content-type": "application/json",
          },
          body: JSON.stringify(cart),
        }
      );
      alert("Sent to database");
      console.log("result " + result);
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    const { cart } = this.props;
    return (
      <div>
        <button
          className="btn btn-primary btn-rounded  px-5"
          disabled={!cart.filter((item) => item.count > 0).length}
          onClick={() => this.postData(cart)}
        >
          Buy Now
        </button>
      </div>
    );
  }
}
