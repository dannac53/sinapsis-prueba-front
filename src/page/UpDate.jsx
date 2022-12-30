import { Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import AlertService from "../service/alert.service";
import catFactService from "../service/cat-fact.service";

function UpDate() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [values, setValues] = useState({ id: 0, fact: "", giftUrl: "" });
  const submit = (data) => {
    catFactService.update(data).then(() => {
      AlertService.success();
      navigate("/favorite");
    });
  };
  const getCat = () => {
    catFactService.findById(id).then(({ data }) => setValues(data));
  };
  useEffect(() => getCat(), []);
  return (
    <div className="log">
      <header className="container ">
        <h1>EDITAR</h1>
        <div className="">
          <div className="">
            <Formik initialValues={values} onSubmit={submit} enableReinitialize>
              <Form className="row">
                <div className=" ">
                  <label className="col-2">Frase</label>
                  <Field
                    className=" box-r col-7 offset-lg-2"
                    name="fact"
                    id="fact"
                    type="text"
                  />
                </div>
                <div className="">
                  <label className="col-2">Gif</label>
                  <Field
                    className="box-r col-7 offset-lg-2"
                    name="giftUrl"
                    id="giftUrl"
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
                  <NavLink className={"btnLog"} to={"/favorite"}>
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
export default UpDate;
