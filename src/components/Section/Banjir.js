import React, { useState } from "react";
import ApaItuBanjir from "./../../assets/images/poster2.png";
import Lingkungan from "./../../assets/images/poster1.png";

const Banjir = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (slideIndex) => {
    setActiveIndex(slideIndex);
  };

  return (
    <div className="container py-5">
      <h1 className="fw-bold text-center">Apa itu Banjir</h1>
      <div
        id="carouselExampleControlsNoTouching"
        className="carousel slide col-xl-6 mx-auto my-5"
        data-bs-touch="false"
        data-bs-interval="false"
      >
        <div className="carousel-inner">
          <div className={`carousel-item ${activeIndex === 0 ? "active" : ""}`}>
            <img
              src={ApaItuBanjir}
              className="d-block w-100"
              alt="Poster Apa itu Banjir"
            />
          </div>
          <div className={`carousel-item ${activeIndex === 1 ? "active" : ""}`}>
            <img
              src={Lingkungan}
              className="d-block w-100"
              alt="Poster Lingkungan Sehat"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControlsNoTouching"
          data-bs-slide="prev"
          onClick={() => handleSlideChange((activeIndex - 1 + 2) % 2)}
        >
          <span
            className="carousel-control-prev-icon bg-dark p-4 rounded"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControlsNoTouching"
          data-bs-slide="next"
          onClick={() => handleSlideChange((activeIndex + 1) % 2)}
        >
          <span
            className="carousel-control-next-icon bg-dark p-4 rounded"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Banjir;
