import { Field, Formik, Form } from "formik";
import { NavLink, useNavigate } from "react-router-dom";
import AlertService from "../service/alert.service";
import userService from "../service/user.service";

function Register() {
  const navigate = useNavigate();
  const initialsValues = { id: 0, name: "", email: "", password: "" };
  const submit = (data) => {
    userService
      .register(data)
      .then((response) => {
        sessionStorage.setItem("user", JSON.stringify(response.data));
        AlertService.success();
        navigate("/home");
      })
      .catch(() => {
        AlertService.error();
      });
  };
  return (
    <div className="log">
      <header className="container ">
        <h1>REGISTRO DE USUARIO</h1>
        <div className="cont">
          <div className="card">
            <Formik initialValues={initialsValues} onSubmit={submit}>
              <Form className="row">
                <div>
                  <label className="col-2">Nombre</label>
                  <Field
                    className=" box-r col-7 offset-lg-2"
                    name="name"
                    id="name"
                    type="text"
                  />
                </div>
                <div className=" ">
                  <label className="col-2">Correo</label>
                  <Field
                    className=" box-r col-7 offset-lg-2"
                    name="email"
                    id="email"
                    type="text"
                  />
                </div>
                <div className="">
                  <label className="col-2">Contraseña</label>
                  <Field
                    className="box-r col-7 offset-lg-2"
                    name="password"
                    id="password"
                    type="text"
                  />
                </div>
                <div className=" btnF">
                  <button
                    style={{ color: "#fff" }}
                    className="btnLog"
                    type="submit"
                  >
                    Guardar
                  </button>
                  <NavLink className={"btnLog"} to={"/home"}>
                    Salir
                  </NavLink>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </header>
    </div>
  );
}
export default Register;
