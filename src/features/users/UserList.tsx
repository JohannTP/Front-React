import { useEffect, useState } from "react";
import axios from "axios";

interface Usuario {
  id: number;
  nombre: string;
  correo: string;
}

export default function UserList() {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);

  useEffect(() => {
    axios.get("https://localhost:7049/api/usuarios/obtener").then((res) => {
      setUsuarios(res.data);
    });
  }, []);

  return (
    <div className="container mt-5">
      <h4 className="text-center font-monospace fw-bold text-white">
        LISTA DE USUARIOS
      </h4>
      <table className="table table-striped mt-3 table-hover">
        <thead className="table-primary">
          <tr>
            <th className="text-center">ID</th>
            <th className="text-center">NOMBRE</th>
            <th className="text-center">CORREO</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((u) => (
            <tr className="text-center" key={u.id}>
              <td>{u.id}</td>
              <td>{u.nombre}</td>
              <td>{u.correo}</td>
              <td>
                <a className="btn btn-warning">
                  <img
                    src="/icons/pencil-square.svg"
                    data-bs-toggle="tooltip"
                    data-bs-title="Editar"
                  />
                </a>
              </td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
