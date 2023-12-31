import React, { useState } from "react";
// import { CircularProgress } from "@mui/material";
import Card from "../Card/Card";
import styles from "./Section.module.css";
import Carousel from "../Carousel/Carousel";

const Section = ({ title, data, type, children }) => {
  const [carouselToggle, setCarouselToggle] = useState(true);
  const handleToggle = () => {
    setCarouselToggle(!carouselToggle);
  };
  return (
    <div>
      <div className={styles.header}>
        <h3>{title}</h3>

        {!children && (
          <h4 className={styles.toggleText} onClick={handleToggle}>
            {carouselToggle ? "show All" : "collapse All"}
          </h4>
        )}
      </div>
      {children !== undefined && children}
      <br />
      {data?.length === 0 ? (
        // <CircularProgress />
        <></>
      ) : (
        <div className={styles.cardWrapper}>
          {!carouselToggle ? (
            <div className={styles.wrapper}>
              {data.map((ele) => (
                <Card data={ele} type={type} key={ele.id} />
              ))}
            </div>
          ) : (
            <Carousel
              data={data}
              renderComponent={(item) => <Card data={item} type={type} />}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Section;
