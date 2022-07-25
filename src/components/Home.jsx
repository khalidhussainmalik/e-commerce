import React from "react";
import bg from "./images/bg.jpg";
import Products from "./Products";

function Home() {
  return (
    <div className="homex">
      <div className="card text-white border-0">
        <img src={bg} className="card-img" alt="background" height='600px'/>
        <div className="card-img-overlay d-flex flex-column justify-content-center">
            <div className="container">
            <h5 className="card-title display-3 fw-bolder mb-0">New Arrivals</h5>
          <p className="card-text lead fs-2">
            Check Out All The Trends
          </p>
            </div>
        </div>
      </div>
      <Products/>
    </div>
  );
}

export default Home;
