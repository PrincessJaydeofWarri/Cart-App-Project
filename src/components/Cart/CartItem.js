import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../App.css";

export default function CartItem({ item, value }) {
  const { id, name, price, total, count } = item;
  const { setCount, removeItem } = value;

  function handleChange(evt) {
    if (parseInt(evt.target.value, 10) > 100) return false;
    if (parseInt(evt.target.value, 10) < 0) return false;
    setCount(id, evt.target.value);
  }
  return (
    <tr className="row my-3 text-capitalize text-center">
      <td className="col-10 mx-auto col-lg-2">{name}</td>
      <td className="col-10 mx-auto col-lg-2">{price}</td>
      <td className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
        <div className="d-flex justify-content-center">
          <input
            className="input"
            min="1"
            max="100"
            required
            pattern="09"
            type="number"
            id="qty"
            name="qty"
            value={count}
            onChange={handleChange}
          />
          <button
            className="btn btn-decrement mx-1"
            onClick={() => setCount(id, count - 1)}
          >
            -
          </button>
          <button
            className="btn btn-increment mx-1"
            onClick={() => setCount(id, count + 1)}
          >
            +
          </button>
        </div>
      </td>
      <td className="col-10 mx-auto col-lg-2">£{total.toFixed(2)}</td>
      <td className="col-10 mx-auto col-lg-2">
        <button className="btn btn-delete mx1" onClick={() => removeItem(id)}>
          Delete
        </button>
      </td>
    </tr>
  );
}
