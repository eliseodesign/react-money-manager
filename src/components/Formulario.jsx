import React, { useState } from "react";
import Swal from "sweetalert2";
const MySwal = withReactContent(Swal);
import withReactContent from "sweetalert2-react-content";
import shortid from "shortid";

const Fomulario = ({ pasarGasto, reiniciar, res }) => {
  const [nombre, setNombre] = useState("");
  const [cantidad, setCantidad] = useState("");

  const agregarGasto = (e) => {
    e.preventDefault();

    // validar
    if (nombre === "" || cantidad === 0 || cantidad === "") {
      MySwal.fire({
        icon: "warning",
        title: <p className="txtAlert">Gasto invalido</p>,
      });
      return;
    }

    if (cantidad > res) {
      MySwal.fire({
        icon: "error",
        title: <p className="txtAlert">Gasto mayor a restante</p>,
      });
      return;
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

  function eliminarPresupuesto() {
    MySwal.fire({
      title: (
        <p className="txtAlert">¿Quiere eliminar el presupuesto actual?</p>
      ),
      showDenyButton: true,
      confirmButtonText: "Si",
      confirmButtonColor: "#FF8791",
      denyButtonColor: "#83BFFF",
    }).then((result) => {
      if (result.isConfirmed) {
        reiniciar();
      } else if (result.isDenied) {
        return;
        Swal.fire("", "", "info");
      }
    });
  }
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
      <p
        className="red"
        onClick={() => {
          eliminarPresupuesto();
        }}
      >
        Eliminar presupuesto
      </p>
    </form>
  );
};

export default Fomulario;
