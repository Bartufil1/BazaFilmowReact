import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const AddMovie = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [content, setContent] = useState("");
  const nav = useNavigate();
  const sendData = (event) => {
    event.preventDefault();
    const data = {
      title,
      image,
      content,
    };
    axios({
      method: "post",
      url: "https://at.usermd.net/api/movies",
      data: data,
    })
      .then((response) => nav("/"))
      .catch((error) => console.log(error));
    console.log(data);
  };
  return (
    <div className="registerForm">
      <form onSubmit={sendData}>
        <h3> Dodaj film </h3>
        <div className="mb-3">
          <label>Tytuł</label>
          <input
            type="text"
            className="form-control"
            placeholder="Wpisz nazwe "
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Obraz</label>
          <input
            type="text"
            className="form-control"
            placeholder="Podaj adres URL"
            value={image}
            onChange={(event) => setImage(event.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Opis</label>
          <input
            type="text"
            className="form-control"
            placeholder="Wpisz Opis"
            value={content}
            onChange={(event) => setContent(event.target.value)}
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            {" "}
            Dodaj
          </button>
        </div>
      </form>
    </div>
  );
};
export default AddMovie;
