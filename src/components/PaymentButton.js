import React, { useState } from "react";

import PaymentStatus from "./PaymentStatus";
import "./PaymentButton.css";
import Card from "./UI/Card";
import Loader from "./UI/Loader";

export default function PaymentButton() {
  // const num = Math.random();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("PENDING");

  let content;
  if (status == "PENDING") content = "Pay";

  if (status == "DONE") content = "PAYMENT DONE✔️";

  if (status == "REJECTED") content = "Failed- Try Again";

  if (loading) content = <Loader></Loader>;

  const paymentClickHandler = () => {
    const num = Math.random();

    // /spin loader for 1 sec
    setLoading(true);
    setTimeout(() => {
      setLoading(false);

      if (num > 0.5) setStatus("DONE");
      else setStatus("REJECTED");
      if (status == "REJECTED") setStatus("PENDING");
    }, 1000);
  };

  if (status === "REJECTED") {
    setTimeout(() => {
      setStatus("PENDING");
    }, 3000);
  }

  return (
    <Card className="payment-card">
      {
        <button onClick={paymentClickHandler} className={`pay-btn ${status}`}>
          {content}
        </button>
      }
    </Card>
  );
}
