import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/login/Login";
import UserList from "./features/users/UserList";
import MainLayout from "./layouts/MainLayout";
import { useAppSelector } from "./app/hooks";

export default function AppRouter() {
  const { user } = useAppSelector((state) => state.auth);

  return (
    <BrowserRouter>
      <Routes>
        {/* Página de login */}
        <Route
          path="/"
          element={!user ? <Login /> : <Navigate to="/usuarios" />}
        />

        {/* Rutas protegidas dentro del layout */}
        {user && (
          <Route element={<MainLayout />}>
            <Route path="/usuarios" element={<UserList />} />
            {/* Agrega aquí tus demás rutas internas */}
          </Route>
        )}

        {/* Redirección por defecto */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}
