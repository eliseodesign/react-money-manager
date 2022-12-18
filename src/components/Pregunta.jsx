import React, { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

const Pregunta = ({ setPresupuesto, setRestante }) => {
  const [cantidad, setcantidad] = useState(0);

  const definirPresupuesto = (e) => {
    e.preventDefault();

    //validar
    if (cantidad <= 0 || isNaN(cantidad)) {
      MySwal.fire({
        icon: "warning",
        title: <p>Presupuesto Invalido</p>,
      });
    }

    setPresupuesto(cantidad);
    setRestante(cantidad);
  };

  return (
    <>
      <h2>Coloca tu presupuesto </h2>
      <form onSubmit={definirPresupuesto}>
        <input
          type="number"
          className="u-full-width"
          placeholder="Coloca tu presupuesto"
          onChange={(e) => {
            setcantidad(Number(e.target.value));
          }}
        />

        <input type="submit" className="u-full-width" value="definir" />
      </form>
    </>
  );
};

export default Pregunta;
