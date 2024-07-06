import LogoKelurahan from "./../../assets/images/logo_kelurahan.png";
import LogoKKN from "./../../assets/images/logo_kkn.png";
import LogoUSM from "./../../assets/images/lppm_dan_usm.png";

export default function Logo() {
  const images = [
    {
      src: LogoUSM,
      id: "1",
    },
    {
      src: LogoKelurahan,
      id: "2",
    },
    {
      src: LogoKKN,
      id: "3",
    },
  ];

  return (
    <section className="container d-lg-flex bg-light rounded-4 p-5 border">
      {images.map(function (image) {
        return (
          <div className="col-lg-4 d-flex justify-content-center">
            <img src={image.src} alt="logo" className="w-50 h-auto my-4 my-lg-0" />
          </div>
        );
      })}
    </section>
  );
}
