import React, { useState } from "react";
import API from "../../services/API";
import Styles from "./styled";
import dropImage from "../../img/image.svg";

const Uploader = () => {
  const [image, setImage] = useState();
  const [url, setUrl] = useState();

  // Pegando arquivo do input
  const handleFile = (e) => {
    setImage(e.target.files[0]);
    formSubmit(e);
  };

  // Fazendo o upload do formulario
  const formSubmit = async (e) => {
    e.preventDefault();
    // Enviando imagem para o backend
    await API.post("/", {image})
      .then(async (response) => {
        let imageUrl = await response.data.imageUrl;
        setUrl(imageUrl);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <Styles>
      <form encType="multipart/form-data">

        <p className="title">Upload your image</p>
        <p className="subtitle">File should be jpeg, png...</p>

        {/* Drag and drop area */}
        <div className="drop">
          <input
            type="file"
            name="image"
            datatype="multipart"
            accept="image/*"
            onChange={handleFile}
          />
          <img src={dropImage} alt="Imagem de drag and drop" />
          <p>Drag & Drop your image here</p>
        </div>

        <p className="or">or</p>

        {/* Botão de upload */}
        <button className="btn">
          <input
            type="file"
            name="image"
            datatype="multipart"
            accept="image/*"
            onChange={handleFile}
          />
          Choose a File
        </button>

        {url && url}
      </form>
    </Styles>
  );
};

export default Uploader;
