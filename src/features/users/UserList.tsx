import { useEffect, useState } from "react";
import pencilIcon from "../../assets/icons/pencil-square.svg";
import trashIcon from "../../assets/icons/trash3-fill.svg";
import { Link } from "react-router-dom";
import { obtenerUsuarios } from "./api";
import type { Usuario } from "./types";

export default function UserList() {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);

  useEffect(() => {
    obtenerUsuarios().then((res) => setUsuarios(res.data));
  }, []);

  return (
    <div className="container mt-5">
      <h4 className="text-center font-monospace fw-bold text-white">
        LISTA DE USUARIOS
      </h4>
      <table className="table table-sm table-striped mt-3 table-hover">
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
                <Link
                  to={`/usuarios/editar/${u.id}`}
                  className="btn btn-warning me-2"
                >
                  <img
                    src={pencilIcon}
                    data-bs-toggle="tooltip"
                    data-bs-title="Editar"
                  />
                </Link>
                <a className="btn btn-danger">
                  <img
                    src={trashIcon}
                    data-bs-toggle="tooltip"
                    data-bs-title="Eliminar"
                  />
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
