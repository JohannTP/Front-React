import { Link, Outlet } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useEffect } from "react";

declare global {
  interface Window {
    bootstrap: any;
  }
}
export default function MainLayout() {
  useEffect(() => {
    const tooltipTriggerList = Array.from(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    tooltipTriggerList.forEach((tooltipTriggerEl) => {
      new window.bootstrap.Tooltip(tooltipTriggerEl);
    });
  }, []);
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor02"
            aria-controls="navbarColor02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor02">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Home
                  <span className="visually-hidden">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/usuarios">
                  Usuarios
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Aplicaciones
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Perfiles
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container mt-4">
        <Outlet />
      </div>
    </>
  );
}
