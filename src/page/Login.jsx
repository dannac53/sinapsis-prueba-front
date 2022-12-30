import { Formik, Form, Field } from "formik";
import { NavLink, useNavigate } from "react-router-dom";
import "boxicons";
import image from "../img/feliz.png";
import userService from "../service/user.service";
import AlertService from "../service/alert.service";

function Login() {
  const navigate = useNavigate();
  const initialsValues = { id: 0, email: "", password: "" };
  const submit = (data) => {
    userService
      .login(data)
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
        <div className="image container-fluid">
          <img src={image} />
        </div>
        <h1>BIENVENIDO</h1>
        <div className="cont">
          <div className="card">
            <Formik initialValues={initialsValues} onSubmit={submit}>
              <Form className="row text-center">
                <div className="col-6 offset-lg-3">
                  <box-icon
                    className="icon"
                    type="solid"
                    name="user"
                  ></box-icon>
                  <Field
                    placeholder="email"
                    className="box"
                    name="email"
                    id="email"
                    type="email"
                  />
                </div>
                <div className="col-6 offset-lg-3">
                  <box-icon type="solid" name="lock"></box-icon>
                  <Field
                    placeholder="***********"
                    className="box"
                    name="password"
                    id="password"
                    type="text"
                  />
                </div>
                <div>
                  <button className="btnLog">Login</button>
                </div>
              </Form>
            </Formik>
            <div className="row">
              <p className="">¿No tienes cuenta?</p>
              <NavLink className={"link"} to={"/register"}>
                Registrate
              </NavLink>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Login;
