import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function BlogDetail() {
  const { id } = useParams(); // id is now the index (0, 1, 2, etc.)
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    setIsPending(true);
    fetch(
      "https://script.google.com/macros/s/AKfycbzJp9U7nIIoiu38x8kOj5wsypXVKlV7_AAGHKvhM4koyEnWQyrrDq36AP_seMO2HNqW/exec" // Fetch the entire data
    )
      .then((response) => response.json())
      .then((allData) => {
        const selectedData = allData[id];

        if (selectedData) {
          setData(selectedData);
        } else {
          setData(null);
        }
        setIsPending(false);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [id]);

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

  if (!data) {
    return <div>No data found</div>;
  }

  return (
    <div className="container py-5">
      <div className="mb-4 bg-light p-3 rounded">
        <h1 className="fw-bold text-center py-5">{data.judul}</h1>
        <img
          src={data.gambar}
          className="card-img-top rounded w-25 mx-auto"
          alt="Gambar untuk blog"
        />
        <div className="card-body my-4">
          <p className="card-title text-secondary">
            Diunggah pada: {data.waktu.slice(0, 10)}
          </p>
          <p className="card-text text-justify">{data.teks}</p>
        </div>
      </div>
    </div>
  );
}

export default BlogDetail;
