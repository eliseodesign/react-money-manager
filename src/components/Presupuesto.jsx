import React from "react";
import { revisar } from "../assets/revisar";
const Presupuesto = ({ presupuesto, restante }) => {
  return (
    <>
      <div className="alert alert-primary">Presupuesto: $ {presupuesto}</div>
      <div className={revisar(presupuesto, restante)}>
        Restante: ${restante}
      </div>
    </>
  );
};

export default Presupuesto;
