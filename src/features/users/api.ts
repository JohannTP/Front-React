import axios from "axios";
import type { Usuario } from "./types";

const api = "https://localhost:7049/api/usuarios";

export const obtenerUsuarios = () => axios.get<Usuario[]>(`${api}/obtener`);

export const obtenerUsuarioPorId = (id: number) =>
  axios.get<Usuario>(`${api}/obtener/${id}`);

export const actualizarUsuario = (id: number, data: Usuario) =>
  axios.put(`${api}/editar/${id}`, data);
