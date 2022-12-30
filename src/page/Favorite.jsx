import { NavLink, useNavigate } from "react-router-dom";
import catFactService from "../service/cat-fact.service";
import AlertService from "../service/alert.service";
import { useEffect, useState } from "react";

function Favorite() {
  const navigate = useNavigate();
  const user = JSON.parse(sessionStorage.getItem("user"));
  const [cats, setCats] = useState([]);
  const getCats = () => {
    catFactService.findAllByUser(user.id).then(({ data }) => setCats(data));
  };
  useEffect(() => getCats(), []);
  const confirmDelete = (catId) => {
    AlertService.confirmDelete().then((result) => {
      if (result.isConfirmed) {
        catFactService.deleteById(catId).then(() => {
          setCats(cats.filter((cat) => cat.id !== catId));
          AlertService.success();
        });
      }
    });
  };
  return (
    <div className="home">
      <header>Mis Favoritos</header>
      <table className="table">
        <thead>
          <tr>
            <th>Frase</th>
            <th>Gif</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {cats.map((cat) => {
            return (
              <tr key={cat.id}>
                <td>{cat.fact}</td>
                <td>{cat.giftUrl}</td>
                <td>
                  <box-icon
                    className="text-primary"
                    type="solid"
                    name="edit-alt"
                    onClick={() => navigate(`/update/${cat.id}`)}
                  ></box-icon>
                  <box-icon
                    className="text-danger"
                    type="solid"
                    name="trash-alt"
                    onClick={() => confirmDelete(cat.id)}
                  ></box-icon>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="text-center">
        <NavLink className={"btn btn-success"} to="/home">
          Agregar nuevo favorito
        </NavLink>
      </div>
    </div>
  );
}
export default Favorite;
