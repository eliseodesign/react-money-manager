import React, { useState } from "react";
import Swal from "sweetalert2";
const MySwal = withReactContent(Swal);
import withReactContent from "sweetalert2-react-content";
import shortid from "shortid";

const Fomulario = ({ pasarGasto }) => {
  const [nombre, setNombre] = useState("");
  const [cantidad, setCantidad] = useState("");

  const agregarGasto = (e) => {
    e.preventDefault();

    // validar
    if (nombre === "" || cantidad === 0) {
      MySwal.fire({
        icon: "warning",
        title: <p>Gasto invalido</p>,
      });
    }
    const GASTO = {
      nombre,
      cantidad,
      id: shortid.generate(),
    };
    pasarGasto(GASTO);
    // resetear
    setCantidad("");
    setNombre("");
  };
  return (
    <form onSubmit={agregarGasto}>
      <h2>Agrega tus gastos</h2>

      <div className="campo">
        <label>Nombre del gasto</label>
        <input
          type="text"
          placeholder="Ej. Transporte"
          className="u-full-width"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      </div>

      <div className="campo">
        <label>Cantidad</label>
        <input
          type="number"
          placeholder="Ej. $ 100.00"
          className="u-full-width"
          value={cantidad}
          onChange={(e) => setCantidad(Number(e.target.value))}
        />
      </div>

      <input
        type="submit"
        value="Agregar Gasto"
        className="definir u-full-width"
      />
    </form>
  );
};

export default Fomulario;
