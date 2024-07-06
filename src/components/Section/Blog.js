import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function Blog() {
  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    setIsPending(true);
    fetch(
      "https://script.google.com/macros/s/AKfycbzJp9U7nIIoiu38x8kOj5wsypXVKlV7_AAGHKvhM4koyEnWQyrrDq36AP_seMO2HNqW/exec"
    )
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setIsPending(false);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <>
      <div className="container py-5">
        <h1 className="fw-bold text-center">Blog</h1>
        {isPending ? (
          <div className="text-center my-5 py-5 d-flex justify-content-center align-items-center gap-2">
            <div className="spinner-border" role="status">
              <span className="sr-only"></span>
            </div>
            <span>Loading...</span>
          </div>
        ) : (
          <div className="cards-container col-12 col-lg-6 mx-auto my-5">
            {data.map((item, index) => (
              <div className="card mb-4 bg-light p-3" key={item.ID}>
                <img
                  src={item.gambar}
                  className="card-img-top img-thumbnail w-25"
                  alt="Gambar untuk blog"
                />
                <div className="card-body">
                  <h5 className="card-title">{item.judul}</h5>
                  <p className="card-text">{item.teks.slice(0, 200)}...</p>
                  <Link to={`/blog_detail/${index}`} className="btn btn-dark">
                    Baca Selengkapnya
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}