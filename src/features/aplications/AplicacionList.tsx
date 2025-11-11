import { useEffect, useState } from "react";
import type { Aplicacion } from "./types";
import { obtenerAplicaciones } from "./api";

export default function AplicacionList() {
  const [aplicaciones, setAplicaciones] = useState<Aplicacion[]>([]);

  useEffect(() => {
    obtenerAplicaciones().then((res) => setAplicaciones(res.data));
  }, []);

  return (
    <div className="container mt-5">
      <h4 className="text-center font-monospace fw-bold text-white">
        LISTA DE APLICACIONES
      </h4>
      <table className="table table-sm table-striped mt-3 table-hover">
        <thead className="table-primary">
          <tr>
            <th className="text-center">Id</th>
            <th className="text-center">Descripcion</th>
            <th className="text-center">Estado</th>
          </tr>
        </thead>
        <tbody>
          {aplicaciones.map((a) => (
            <tr className="text-center" key={a.id}>
              <td>{a.id}</td>
              <td>{a.descripcion}</td>
              <td>{a.estado}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
