import LaporWithForm from "./LaporWithForm";
import LaporWithSocialMedia from "./LaporWithSocialMedia";

export default function Lapor() {
  return (
    <>
      <LaporWithForm />
      <span className="d-block fs-2 fw-bold text-center border-top border-bottom bg-light">
        Atau
      </span>
      <LaporWithSocialMedia />
    </>
  );
}
