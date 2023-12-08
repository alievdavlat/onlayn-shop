import React from "react";
import "./Card.scss";
import { Link } from "react-router-dom";
const baseUrl = import.meta.env.VITE_APP_API_media_URL


const Card = ({ item }) => {

  return (
    <Link className="link" to={`/product/${item.id}`}>
      <div className="card">
        <div className="image">
          {item?.attributes?.isNew ? <span>New Season</span> : <span>{item?.attributes?.type}</span>}
          <img
            src={baseUrl  +  item?.attributes?.img?.data?.attributes?.url}
            alt=""
            className="mainImg"
          />
          <img
            src={baseUrl + item?.attributes?.img2?.data?.attributes?.url}
            alt=""
            className="secondImg"
          />
        </div>
        <h2>{item?.attributes?.title}</h2>
        <div className="prices">
          <h3>${ parseInt(item?.attributes?.price) +  20}</h3>
          <h3>${parseInt(item?.attributes?.price)}</h3>
        </div>
      </div>
    </Link>
  );
};

export default Card;



