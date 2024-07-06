import { Instagram, Globe, Telephone } from "react-bootstrap-icons";

export default function LaporWithSocialMedia() {
  return (
    <div className="container py-4 mb-lg-5">
      <ul className="list-unstyled d-flex flex-column flex-lg-row justify-content-center gap-4">
        <li className="d-flex align-self-center d-lg-block">
          <a
            href="https://www.instagram.com/kelurahancabean?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            className="d-flex flex-row align-items-center text-decoration-none"
            target="_blank"
            rel="noreferrer"
          >
            <Instagram size={40} className="text-primary" />
            <span className="fs-6 fs-lg-5 text-primary mx-2">Instagram</span>
          </a>
        </li>
        <li className="d-flex align-self-center d-lg-block">
          <a
            href="https://cabean.semarangkota.go.id"
            className="d-flex flex-row align-items-center text-decoration-none"
            target="_blank"
            rel="noreferrer"
          >
            <Globe size={40} className="text-primary" />
            <span className="fs-6 fs-lg-5 mx-2 text-primary">Kelurahan Cabean</span>
          </a>
        </li>
        <li className="d-flex align-self-center d-lg-block">
          <a
            href="https://www.instagram.com/kelurahancabean?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            className="d-flex flex-row align-items-center text-decoration-none"
            target="_blank"
            rel="noreferrer"
          >
            <Telephone size={40} className="text-primary" />
            <span className="fs-6 fs-lg-5 mx-2 text-primary">024-7620930</span>
          </a>
        </li>
      </ul>
    </div>
  );
}
