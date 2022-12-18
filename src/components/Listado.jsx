import React from "react";
import Gasto from "./Gasto";

const Listado = ({ gastos }) => {
  return (
    <div className="gastos-realizados">
      <h2>Listado</h2>
      {gastos.map((item) => (
        <Gasto gasto={item} id={item.id} />
      ))}
    </div>
  );
};

export default Listado;
