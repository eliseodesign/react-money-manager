import React from "react";
import DeleteIcon from "../assets/DeleteIcon";

const Gasto = ({ id, gasto, eliminarGasto }) => {
  return (
    <li className="gastos">
      <p>{gasto.nombre}</p>

      <span className="con">
        <span className="gasto">
          $ <b>{gasto.cantidad}.00</b>
        </span>
        <DeleteIcon
          className={"delete"}
          onClick={() => {
            eliminarGasto(id);
          }}
          width={30}
          height={30}
          fill={"#9F1C24"}
        />
      </span>
    </li>
  );
};

export default Gasto;
