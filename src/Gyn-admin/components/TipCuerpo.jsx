import React from "react";

export const TipCuerpo = () => {
  return (
    <div class="card">
      <div class="card-header">
        <h4 class="card-title">Test para determinar tu tipo de cuerpo</h4>
        <img src='../../assets/img/determine-body-type.svg' alt="" />
      </div>
      <div class="card-body">
        <p class="card-text">
          Sujeta la muñeca con el pulgar y el dedo índice. Si eres diestro, usa
          tu mano derecha para agarrar tu muñeca izquierda.
        </p>
        <p class="card-text">
          Pulgar e índice: 

          Ectomorfo — los dedos se tocan con facilidad.
          Mesomorfo — apenas se tocan. 
          Endomorfo — no se tocan.
        </p>
      </div>
    </div>
  );
};
