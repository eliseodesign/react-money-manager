import { useState } from "react";
import Pregunta from "./components/Pregunta";
import Formulario from "./components/Formulario";
import Listado from "./components/Listado";
import Presupuesto from "./components/Presupuesto";

import CashIcon from "./assets/CashIcon";

function App() {
  const [presupuesto, setPresupuesto] = useState(0);
  const [restante, setRestante] = useState(0);
  const [gastos, setGastos] = useState([]);

  // actualiza restate

  function pasarGasto(nuevo) {
    setGastos([...gastos, nuevo]);
    const res = restante - nuevo.cantidad;
    setRestante(res);
  }

  function eliminarGasto(id) {
    let nuevos = gastos.filter((gasto) => gasto.id !== id);
    let eliminado = gastos.filter((gasto) => gasto.id === id);
    setGastos(nuevos);
    setRestante(restante + eliminado[0].cantidad);
  }

  function reiniciar() {
    setPresupuesto(0);
    setRestante(0);
    setGastos([]);
  }

  let mostrarQue = presupuesto === 0 || restante === 0;
  return (
    <div className="App">
      <article className="c">
        <h1>
          MoneyManager <CashIcon width={40} />
        </h1>
        <section className="contenido-principal contenido">
          {mostrarQue ? (
            <Pregunta
              setPresupuesto={setPresupuesto}
              setRestante={setRestante}
            />
          ) : (
            <div className="row">
              <div className="one-half column">
                <Formulario pasarGasto={pasarGasto} reiniciar={reiniciar} />
              </div>
              <div className="r one-half column">
                <Listado gastos={gastos} eliminarGasto={eliminarGasto} />
                <Presupuesto presupuesto={presupuesto} restante={restante} />
              </div>
            </div>
          )}
        </section>
      </article>
    </div>
  );
}

export default App;
