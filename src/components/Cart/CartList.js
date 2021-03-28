import React from "react";
import CartItem from "./CartItem";
import "bootstrap/dist/css/bootstrap.min.css";

export default function CartList({ value }) {
  const { cart } = value;
  console.log(value, cart);

  return (
    <div className="container">
      <table className="container-fluid text-center mg-t-5 d-none d-lg-block">
        <tr className="row">
          <th className="col-10 mx-auto col-lg-2">Product</th>
          <th className="col-10 mx-auto col-lg-2">Price</th>
          <th className="col-10 mx-auto col-lg-2">Quantity</th>
          <th className="col-10 mx-auto col-lg-2">Cost</th>
          <th className="col-10 mx-auto col-lg-2"></th>
        </tr>
        {cart.map((item) => {
          return <CartItem key={item.id} item={item} value={value} />;
        })}
      </table>
    </div>
  );
}
