import React from "react";
import style from "./Card.module.css";

const Card = ({ data }) => {
  let { follows, title, image } = data;
  console.log({ data });
  return (
    <div className={style.card}>
      <div className={style.cardContainer}>
        <img className={style.cardImg} src={image} alt={title} />
        <div>
          <div className={style.cardFollows}>
            <p className={style.follows}>{follows} Follows</p>
          </div>
        </div>
      </div>
      <div className={style.cardTitle}>
        <h1>{title}</h1>
      </div>
    </div>
  );
};

export default Card;
