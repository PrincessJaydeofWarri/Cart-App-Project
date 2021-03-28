import React from "react";

export default function DisabledButton() {
  return (
    <div>
      <div>
        <button
          className="btn btn-primary btn-rounded mb-3 px-5"
          type="button"
          disabled={true}
        >
          Buy Now
        </button>
      </div>
    </div>
  );
}
