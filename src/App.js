import React, { useState } from "react";
import "./styles.css";

const movieDB = {
  comedy: [
    { name: "Welcome", rating: "5/5" },
    { name: "Coolie Number 1", rating: "4/5" }
  ],

  sports: [
    {
      name: "Dangal",
      rating: "4/5"
    },
    {
      name: "Chak De India!",
      rating: "5/5"
    }
  ],
  romance: [
    {
      name: "DDLJ",
      rating: "4/5"
    },
    {
      name: "Love Aaj Kal",
      rating: "3.5/5"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("comedy");
  function genreHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1> 🎞 Movie Helper </h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        Checkout some of my movie recommendations. Select a genre to get started{" "}
      </p>
      <div>
        {Object.keys(movieDB).map((genre) => (
          <button
            onClick={() => genreHandler(genre)}
            style={{
              background: "#e2b7fc",
              border: "1px solid black",
              borderRadius: "1rem",
              padding: "0.5rem  0.5rem",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "center" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {movieDB[selectedGenre].map((movie) => (
            <li
              style={{
                listStyle: "none",
                backgroundColor: "#9a55c3",
                border: "2px solid #390b54",
                borderRadius: "0.5rem",
                width: "60%",
                margin: "1rem 0rem",
                padding: "1.5rem"
              }}
              key={movie.name}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {movie.name} </div>
              <div style={{ fontSize: "medium" }}> {movie.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
