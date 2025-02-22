import React from "react";
import { Link } from "react-router-dom";
import "./styles/card.css";

export default function Card({src, top, nama, jenis, fllwr, link}) {
  return (
    <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
      <div className="card cardD h-100 hover-shadow" href="google.com">
        <img
          src={src}
          className="tinggi card-img img-card"
          alt="Card Influencer"
        />
        {top ? (
          <div className="card-img-overlay float-end p-2 fw-bold fs-6">top</div>
        ) : null}

        <div className="card-body">
          <div className="fw-bolder fs-5">{nama}</div>
          <div className="text-secondary">{jenis}</div>
          <div className="fw-bolder mt-2 textColor">{fllwr} Followers</div>
          <Link to="/form-pengajuan" class="stretched-link"></Link>
        </div>
      </div>
    </div>
  );
}
