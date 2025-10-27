export interface LoginParams {
  correo: string;
  clave: string;
}

export interface Usuario {
  id: number;
  nombres: string;
  apellidos: string;
  correo: string;
  token: string;
}
