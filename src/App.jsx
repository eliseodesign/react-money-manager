import { useState } from "react";
import Pregunta from "./components/Pregunta";
import Formulario from "./components/Formulario";
import Listado from "./components/Listado";
import Presupuesto from "./components/Presupuesto";

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

  let mostrarQue = presupuesto === 0 || restante === 0;
  return (
    <div className="App">
      <article className="container">
        <h1>Gasto Semanal</h1>

        <section className="contenido-principal contenido">
          {mostrarQue ? (
            <Pregunta
              setPresupuesto={setPresupuesto}
              setRestante={setRestante}
            />
          ) : (
            <div className="row">
              <div className="one-half column">
                <Formulario pasarGasto={pasarGasto} />
              </div>
              <div className="one-half column">
                <Listado gastos={gastos} />
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
