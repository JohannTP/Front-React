import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/login/login";
import UserList from "./features/users/UserList";
import { useAppSelector } from "./app/hooks";

export default function AppRouter() {
  const { user } = useAppSelector((state) => state.auth);

  return (
    <BrowserRouter>
      <Routes>
        {/* Si no hay usuario logeado, redirige al login */}
        <Route
          path="/"
          element={user ? <Navigate to="/usuarios" /> : <Login />}
        />

        {/* Ruta protegida para la lista de usuarios */}
        <Route
          path="/usuarios"
          element={user ? <UserList /> : <Navigate to="/" />}
        />

        {/* Si no existe la ruta, redirige */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}
