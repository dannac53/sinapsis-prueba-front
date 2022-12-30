import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import catFactService from "../service/cat-fact.service";

function Home() {
  const [facts, setFact] = useState([]);
  const getFacts = () => {
    for (let i = 0; i < 10; i++) {
      catFactService
        .getCatFact()
        .then((result) => setFact([...facts, result.data]));
    }
  };

  const getText = (value) => {
    const array = value.split(" ");
    return `${array[0]} ${array[1]} ${array[2]}`;
  };

  useEffect(() => getFacts(), []);
  return (
    <div className="row">
      {facts.map((fact, index) => {
        const text = getText(fact.fact);
        return (
          <div key={index} className="col-lg-4 mb-1 mt-1">
            <NavLink to={`/detail/${text}`}>{text}</NavLink>
          </div>
        );
      })}
    </div>
  );
}
export default Home;
