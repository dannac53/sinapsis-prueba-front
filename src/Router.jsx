import { createBrowserRouter } from "react-router-dom";
import Login from "./page/Login";
import Register from "./page/Register";
import Template from "./page/Template";
import Home from "./page/Home";
import Favorite from "./page/Favorite";
import Detail from "./page/Details";
import UpDate from "./page/UpDate";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Template></Template>,
    children: [
      { path: "home", element: <Home /> },
      { path: "favorite", element: <Favorite /> },
      { path: "detail/:fact", element: <Detail /> },
      { path: "update/:id", element: <UpDate /> },
    ],
  },
  {
    path: "login",
    element: <Login></Login>,
  },
  {
    path: "register",
    element: <Register></Register>,
  },
]);

export default router;
