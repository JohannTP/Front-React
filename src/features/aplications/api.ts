import axios from "axios";
import type { Aplicacion } from "./types";

const api = "https://localhost:7049/api/aplicaciones";

export const obtenerAplicaciones = () =>
  axios.get<Aplicacion[]>(`${api}/obtener`);

export const obtenerAplicacionPorId = (id: number) =>
  axios.get<Aplicacion[]>(`${api}/obtener/${id}`);
