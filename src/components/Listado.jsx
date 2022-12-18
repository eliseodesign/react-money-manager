import React from "react";
import Gasto from "./Gasto";

const Listado = ({ gastos, eliminarGasto }) => {
  return (
    <div className="gastos-realizados">
      <h2>Listado</h2>
      {gastos.map((item) => (
        <Gasto
          gasto={item}
          key={item.id}
          id={item.id}
          eliminarGasto={eliminarGasto}
        />
      ))}
    </div>
  );
};

export default Listado;
