import { useState, useRef } from "react";
import emailjs from "emailjs-com";

export default function LaporWithForm() {
  const [isPending, setIsPending] = useState(false);

  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    message: "",
    gambar: null,
  });

  const form = useRef();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleImageChange = (event) => {
    setFormData((prevData) => ({ ...prevData, gambar: event.target.files[0] }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    let imageUrl = null;
    if (formData.gambar) {
      const formDataImage = new FormData();
      formDataImage.append("file", formData.gambar);
      formDataImage.append("upload_preset", "ml_default");

      try {
        setIsPending(true);
        const response = await fetch(
          "https://api.cloudinary.com/v1_1/dkt10fjtk/image/upload",
          { method: "POST", body: formDataImage }
        );

        if (!response.ok) {
          throw new Error(
            `Gagal mengunggah gambar. Status: ${response.status}`
          );
        }

        const data = await response.json();
        imageUrl = data.secure_url;
      } catch (error) {
        console.error("Error uploading image:", error);
        alert(
          "Gagal mengunggah gambar. Pesan tetap akan dikirim tanpa gambar."
        );
      }
    }

    const templateParams = {
      nama: formData.nama,
      email: formData.email,
      message: formData.message,
      gambar: imageUrl,
    };

    try {
      await emailjs.send(
        "service_2tf24xf",
        "template_6231kl6",
        templateParams,
        "fNaTr2baae3RslbrH"
      );
      alert("Pesan berhasil terkirim!");
      setFormData({ nama: "", email: "", message: "", gambar: null });
      setIsPending(false);
    } catch (error) {
      alert("Terjadi kesalahan saat mengirim pesan. Silakan coba lagi.");
      console.error("Error sending email:", error);
    }
  };

  return (
    <>
      <div className="container">
        <div className="form-container mt-5 pt-5 pb-3">
          <h2 className="text-center fs-1 fw-bold">Lapor</h2>
          <form
            ref={form}
            className="col-lg-5 mx-auto my-5 border p-4 rounded bg-light"
            onSubmit={handleSubmit}
          >
            <div className="form-group mb-3">
              <label htmlFor="nama">Nama</label>
              <input
                type="text"
                className="form-control"
                id="nama"
                name="nama"
                placeholder="Masukkan nama Anda"
                value={formData.nama}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="name@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="message">Pesan Anda</label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                rows="3"
                placeholder="Masukkan pesan anda"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <div className="form-group mb-3">
              <label className="mx-2" htmlFor="gambar">
                Gambar (opsional)
              </label>
              <input
                type="file"
                className="form-control-file"
                id="gambar"
                onChange={handleImageChange}
              />
            </div>
            {isPending ? (
              <button class="btn btn-secondary" type="button" disabled>
                <span
                  class="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                ></span>
                Loading...
              </button>
            ) : (
              <button type="submit" className="btn btn-dark">
                Kirim Pesan
              </button>
            )}
          </form>
        </div>
      </div>
    </>
  );
}
