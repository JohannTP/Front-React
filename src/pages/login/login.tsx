import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { login } from "../../features/auth/authThunks";

export default function Login() {
  const dispatch = useAppDispatch();
  const { loading, error } = useAppSelector((state: any) => state.auth);

  const [correo, setCorreo] = useState("");
  const [clave, setClave] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Envento de envio ejecutado");
    dispatch(login({ correo, clave }));
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow-lg border-0" style={{ width: "25rem" }}>
        <div className="card-body">
          <h4 className="card-title text-center mb-4 fw-bold">
            INICIAR SESIÓN
          </h4>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="correo" className="form-label">
                Correo electrónico
              </label>
              <input
                type="email"
                id="correo"
                className="form-control"
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
                placeholder="Ingrese su correo"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="clave" className="form-label">
                Contraseña
              </label>
              <input
                type="password"
                id="clave"
                className="form-control"
                value={clave}
                onChange={(e) => setClave(e.target.value)}
                placeholder="Ingrese su contraseña"
                required
              />
            </div>

            <button
              type="submit"
              className="btn btn-secondary w-100"
              disabled={loading}
            >
              {loading ? "Cargando..." : "Ingresar"}
            </button>

            {error && <p className="text-danger text-center mt-3">{error}</p>}
          </form>
        </div>
      </div>
    </div>
  );
}
