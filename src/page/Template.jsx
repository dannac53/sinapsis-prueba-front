import "../assets/css/Template.css";
import "boxicons";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Template() {
  const user = JSON.parse(sessionStorage.getItem("user"));
  return (
    <div className="wrapper">
      <div className="barra">
        <div className="title">
          <box-icon name="cat" type="solid"></box-icon>
          <header>Social Cat</header>
        </div>

        <div className="menu">
          <div className="submenu">
            <NavLink className={"link"} to={"/home"}>
              Inicio
            </NavLink>
          </div>
          <div className="submenu">
            <NavLink className={"link"} to={"/favorite"}>
              Mis Favorios
            </NavLink>
          </div>
        </div>
        <footer className="">
          <box-icon name="exit"></box-icon>
          <NavLink className={"link"} to={"/Login"}>
            Salir
          </NavLink>
        </footer>
      </div>
      <div className="content">
        <div className="header">
          <p>Hola {user.name} Bienvenidos al Himalaya</p>
          <box-icon name="user-circle"></box-icon>
        </div>
        <div className="card-t">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Template;
