import flood from "./../../assets/images/flood.jpg";
import emergencyCall from "./../../assets/images/emergency_call.jpg";
import { Link } from "react-router-dom";

export default function Main() {
  const floodImage = flood;
  return (
    <>
      <div className="container mb-5 py-lg-5">
        <section className="d-flex flex-column flex-lg-row justify-content-start align-items-center my-4">
          <img src={floodImage} alt="flood" className="w-50 border-0" />
          <div className="d-flex flex-column d-lg-block">
            <h2 className="fs-1 fw-bold">Banjir dan Lingkungan Sehat</h2>
            <p className="text-body-secondary">
              Apa itu banjir? Apa yang menyebabkan Banjir? Apa yang harus
              dilakukan? Dan upaya menjaga lingkungan.
            </p>
            <Link to="/banjir" className="btn btn-dark col-5">
              Baca Selengkapnya
            </Link>
          </div>
        </section>
        <section className="d-flex flex-column-reverse flex-lg-row justify-content-start align-items-center">
          <div className="d-flex flex-column d-lg-block">
            <h1 className="fs-1 fw-bold">Nomor Darurat Kebencanaan</h1>
            <p className="text-body-secondary">
              Apa saja nomor darurat yang dapat dihubungi apabila terjadi
              bencana?
            </p>
            <Link to="/call" className="btn btn-dark col-5">
              Baca Selengkapnya
            </Link>
          </div>
          <img
            src={emergencyCall}
            alt="flood"
            className="w-50 border-1 rounded-4"
          />
        </section>
      </div>
    </>
  );
}
