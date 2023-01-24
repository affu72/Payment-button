import React from "react";
import "./Loader.css";

export default function Loader() {
  return (
    <div className="loading-container">
      <div className="loader"></div>
      <span className="loading-content">Paying...</span>
    </div>
  );
}
