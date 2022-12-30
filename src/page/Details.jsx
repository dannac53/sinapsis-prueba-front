import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import giftService from "../service/gift.service";
import catFactService from "../service/cat-fact.service";
import AlertService from "../service/alert.service";

function Detail() {
  const user = JSON.parse(sessionStorage.getItem("user"));
  const { fact } = useParams();
  const [giftUrl, setGitUrl] = useState("");

  const getGift = () => {
    giftService.getGift(fact).then(({ data }) => {
      setGitUrl(data.data.embed_url);
    });
  };

  const saveCat = () => {
    const body = {
      id: 0,
      fact,
      giftUrl,
      user,
    };
    catFactService
      .save(body)
      .then(() => {
        AlertService.success();
      })
      .catch(() => AlertService.error());
  };

  useEffect(() => getGift(), []);
  return (
    <div className="row">
      <p className="col-lg-6">Url Gift: {giftUrl}</p>
      <p className="col-lg-6">Fact: {fact}</p>
      <div className="col-lg-12 text-center">
        <button className="btn btn-success" onClick={() => saveCat()}>
          Agregar a mis favoritos
        </button>
      </div>
    </div>
  );
}
export default Detail;
