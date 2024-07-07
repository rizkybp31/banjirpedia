import NoData from "./../../assets/images/no_data.png";

export default function NotFound() {
  return (
    <div className="container d-flex flex-column align-items-center py-5">
      <img src={NoData} className="col-4 mx-auto" alt="No data found"/>
      <span className="fs-1 fw-bold">No data found</span>
    </div>
  );
}
