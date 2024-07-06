export default function Emergency() {
  const numbers = [
    {
      id: "1",
      nama: "Panggilan Darurat",
      nomor: "112",
    },
    {
      id: "2",
      nama: "Ambulans",
      nomor: "119",
    },
    {
      id: "3",
      nama: "Ambulans Hebat",
      nomor: "1500-132",
    },
    {
      id: "4",
      nama: "Pemadam Kebakaran",
      nomor: "113",
    },
    {
      id: "5",
      nama: "Polisi",
      nomor: "110",
    },
    {
      id: "6",
      nama: "BASARNAS",
      nomor: "115",
    },
    {
      id: "7",
      nama: "Posko Bencana Alam",
      nomor: "129",
    },
    {
      id: "8",
      nama: "PLN",
      nomor: "123",
    },
    {
      id: "9",
      nama: "PUPR",
      nomor: "158",
    },
    {
      id: "10",
      nama: "Pertamina",
      nomor: "135",
    },
  ];

  return (
    <>
      <div className="container py-5">
        <div className="d-flex flex-wrap gap-4 justify-content-center py-5 my-5 rounded">
          <h1 className="fw-bold text-center w-100 pb-5">
            Nomor Darurat Kebencanaan
          </h1>
          {numbers.map((data) => (
            <div className="card col-8 col-lg-2" key={data.id}>
              <div className="card-body bg-light">
                <h2 className="card-title text-center">{data.nomor}</h2>
                <p className="card-text text-center">{data.nama}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
