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
      <h2>Lista de Usuarios</h2>
      <table className="table table-bordered mt-3">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Correo</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((u) => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.nombre}</td>
              <td>{u.correo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
