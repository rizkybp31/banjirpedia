import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NotFound from "./NotFound";

export default function Blog() {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    fetch(
      "https://script.google.com/macros/s/AKfycbzJp9U7nIIoiu38x8kOj5wsypXVKlV7_AAGHKvhM4koyEnWQyrrDq36AP_seMO2HNqW/exec"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched data:", data);
        if (data && data.length > 0 && data.some(item => item.id !== null)) {
          setData(data);
        } else {
          setHasError(true);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setHasError(true);
      })
      .finally(() => setIsPending(false));
  }, []);

  if (isPending) {
    return (
      <div className="text-center my-5 py-5 d-flex justify-content-center align-items-center gap-2">
        <div className="spinner-border" role="status">
          <span className="sr-only"></span>
        </div>
        <span>Loading...</span>
      </div>
    );
  }

  if (hasError || !data) {
    console.log("Rendering NotFound component");
    return <NotFound />;
  }

  return (
    <div className="container py-5">
      <h1 className="fw-bold text-center">Blog</h1>
      <div className="cards-container col-12 col-lg-6 mx-auto my-5">
        {data.map((item, index) => (
          <div className="card mb-4 bg-light p-3" key={item.id}>
            <img
              src={item.gambar}
              className="card-img-top img-thumbnail w-25"
              alt={`Gambar untuk blog ${item.judul}`}
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
    </div>
  );
}