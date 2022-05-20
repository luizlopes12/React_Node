import React, { useState } from "react";
import API from "../../services/API";
import Styles from "./styled";
import dropImage from "../../img/image.svg";

const Uploader = () => {
  const [image, setImage] = useState('');
  const [url, setUrl] = useState('');

  // Fazendo o upload do formulario
  const formSubmit = async (e) => {
    e.preventDefault();
  // Pegando arquivo do input
    setImage(await e.target.files[0])
    console.log('upload da imagem');
    const formData = new FormData()
    formData.append('image', image)
    API.post('/', formData)
    .then(response=>{
      console.log(response.data)
      setImage('')
    })
    .catch(err=>{
      if(err.response){
        console.log(err.response.data);
      }else{
        console.log(err.message);
      }
    })
  };
  console.log(image);

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
            accept="image/*"
            onChange={formSubmit}
          />
          <img src={dropImage} alt="Imagem de drag and drop" />
          <p>Drag & Drop your image here</p>
        </div>

        <p className="or">or</p>

        {/* Botão de upload */}
        <button className="btn" type="submit">
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={formSubmit}
          />
          Choose a File
        </button>

        {image.name}
        {url}
      </form>
    </Styles>
  );
};

export default Uploader;
