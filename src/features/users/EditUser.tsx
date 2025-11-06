import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import type { Usuario } from "./types";
import { obtenerUsuarioPorId } from "./api";

export default function EditUser() {
  const { id } = useParams(); // id obtenido desde la URL
  const navigate = useNavigate();

  const [usuario, setUsuario] = useState<Usuario>({
    id: 0,
    nombre: "",
    apellidos: "",
    correo: "",
  });

  // Cargar datos del usuario al entrar
  useEffect(() => {
    const idUsuario = Number(id);
    obtenerUsuarioPorId(idUsuario).then((res) => setUsuario(res.data));
  }, [id]);

  // Detectar cambios en los inputs
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsuario({ ...usuario, [e.target.name]: e.target.value });
  };

  // Guardar cambios
  const handleSubmit = async () => {
    await axios.put(
      `https://localhost:7049/api/usuarios/editar/${id}`,
      usuario
    );
    navigate("/usuarios"); // volver a la lista después de guardar
  };

  return (
    <div className="container mt-5 text-white">
      <h4 className="text-center font-monospace fw-bold text-white">
        EDITAR USUARIO
      </h4>

      <label>Nombre</label>
      <input
        className="form-control"
        name="nombre"
        value={usuario.nombre}
        onChange={handleChange}
      />
      <label>Apellidos</label>
      <input
        className="form-control"
        name="apellidos"
        value={usuario.apellidos}
        onChange={handleChange}
      />
      <label>Correo</label>
      <input
        className="form-control"
        name="correo"
        value={usuario.correo}
        onChange={handleChange}
      />

      <button className="btn btn-success mt-4" onClick={handleSubmit}>
        Guardar Cambios
      </button>

      <button
        className="btn btn-secondary mt-4 ms-2"
        onClick={() => navigate("/usuarios")}
      >
        Cancelar
      </button>
    </div>
  );
}
