import React from "react";
import "./ImageLingForm.css";

const ImageLingForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
      <p className="f3">
        {"Cette application va détecter une face sur l'url de ton image."}
        <br></br>
        {" Essayez d'en détecter le plus possible pour un meilleur score 🧐"}
      </p>
      <div className="center">
        <div className=" form center pa4 br3 shadow-5">
          <input
            className="f4 pa2 w-70 center"
            type="text"
            onChange={onInputChange}
          />
          <button
            className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple"
            onClick={onButtonSubmit}
          >
            Détection
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLingForm;
