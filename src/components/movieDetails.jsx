import React from "react";

const MovieDetails = ({ match, history }) => {
  return (
    <div>
      <h1>MOVIE FORM {match.params.id}</h1>
      <button
        className="btn btn-primary m-2"
        onClick={() => {
          history.push("/");
        }}
      >
        Save
      </button>
    </div>
  );
};

export default MovieDetails;
