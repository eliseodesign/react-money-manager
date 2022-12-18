import React from "react";

const Gasto = ({ id, gasto }) => {
  return (
    <li className="gastos">
      <p>
        {gasto.nombre}

        <span className="gasto">$ {gasto.cantidad}.00</span>
      </p>
    </li>
  );
};

export default Gasto;
