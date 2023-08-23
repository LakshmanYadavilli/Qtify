import React, { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";
import styles from "../Carousel.module.css";
import { ReactComponent as RightArrow } from "../../../assests/rightArrow.svg";
const CarouselRightNavigation = () => {
  const swiper = useSwiper();
  const [isEnd, setIsEnd] = useState(swiper.isEnd);
  useEffect(() => {
    swiper.on("slidechange", () => {
      setIsEnd(swiper.isEnd);
    });
  }, []);
  return (
    <div className={styles.rightNavigation}>
      {!isEnd && <RightArrow onClick={() => swiper.slideNext()} />}
    </div>
  );
};

export default CarouselRightNavigation;
