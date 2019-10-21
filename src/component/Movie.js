import React from "react";

export default function Movie(props) {
  return (
    <div className="col-md-4">
      <div className="card mb-4 box-shadow">
        <img
          src={`https://image.tmdb.org/t/p/original/${props.imgURL}`}
          className="card-img-top"
          alt="Thumbnail"
          style={{ height: "225px", width: "100%", display: "block" }}
          data-holder-rendered="true"
        />
        <div className="card-body" style={{ height: "600px" }}>
          <h1>
            <p className="card-text" style={{ height: "100px" }}>
              {props.title}
            </p>
          </h1>
          <p
            className="card-text"
            style={{ height: "200px", overflowY: "scroll", marginTop: "100px" }}
          >
            {props.des}
          </p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="list-group-item" style={{ fontSize: "15px" }}>
              <span style={{ fontWeight: "bold", fontSize: "20px" }}>
                Ratting: {props.Ratings}{" "}
              </span>
              Vote: {props.Vote}
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <div className="list-group-item" style={{ fontSize: "15px" }}>
              <span style={{ fontWeight: "bold", fontSize: "20px" }}>
                Release Date{" "}
              </span>
              {props.release_date}
            </div>
          </div>
        </div>
        <ul style={{listStyleType:"none"}}>
          {props.genreName.map((g, i) => {
          return (<li key={g + i}>{g}</li>)
          })}
        </ul>
        <button type="button" className="btn btn-primary btn-lg" onClick={() => {
          props.handelModal(props.id)}}>
          View Trailer
        </button>
      </div>
    </div>
  );
}
