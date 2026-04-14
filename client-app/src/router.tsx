import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Persons from "./pages/Persons";
import Form from "./pages/Form";
import Charts from "./pages/Charts";
import PrivateRoute from "./components/PrivateRoute";

export const router = createBrowserRouter([
  { path: "/", element: <Login /> },
  {
    path: "/dashboard",
    element: <PrivateRoute><Dashboard /></PrivateRoute>
  },
  {
    path: "/persons",
    element: <PrivateRoute><Persons /></PrivateRoute>
  },
  {
    path: "/form",
    element: <PrivateRoute><Form /></PrivateRoute>
  },
  {
    path: "/charts",
    element: <PrivateRoute><Charts /></PrivateRoute>
  }
]);

export default router;