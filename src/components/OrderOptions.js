// src/components/OrderOptions.js
import React from "react";

const OrderOptions = (props) => {
  const options = [
    { text: "Order Status", handler: props.actionProvider.handleOrderStatus, id: 1 },
    { text: "Cancel Order", handler: props.actionProvider.handleCancelOrder, id: 2 },
    { text: "Modify Order", handler: props.actionProvider.handleModifyOrder, id: 3 },
    { text: "Track Order", handler: props.actionProvider.handleTrackOrder, id: 4 },
  ];

  return (
    <div>
      {options.map((option) => (
        <button key={option.id} onClick={option.handler}>
          {option.text}
        </button>
      ))}
    </div>
  );
};

export default OrderOptions;
