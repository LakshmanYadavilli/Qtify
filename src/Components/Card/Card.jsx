import React from "react";
import style from "./Card.module.css";
import { Tooltip } from "@mui/material";

const Card = ({ data }) => {
  let { follows, title, image, songs, likes } = data;
  console.log({ data });
  return (
    <Tooltip title={songs && songs.length} placement="top" arrow>
      <div className={style.card}>
        <div className={style.cardContainer}>
          <img className={style.cardImg} src={image} alt={title} />
          <div>
            <div className={style.cardFollows}>
              {likes ? (
                <p className={style.follows}>{likes} Likes</p>
              ) : (
                <p className={style.follows}>{follows} Follows</p>
              )}
            </div>
          </div>
        </div>
        <div className={style.cardTitle}>
          <h1>{title}</h1>
        </div>
      </div>
    </Tooltip>
  );
};

export default Card;
