import React, { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";
import styles from "../Carousel.module.css";
import { ReactComponent as LeftArrow } from "../../../assests/leftArrow.svg";
const CarouselLeftNavigation = () => {
  const swiper = useSwiper();
  const [isBegining, setIsBegining] = useState(swiper.isBeginning);
  useEffect(() => {
    swiper.on("slidechange", () => {
      setIsBegining(swiper.isBeginning);
    });
  }, []);
  console.log({ isBegining });
  return (
    <div className={styles.leftNavigation}>
      {!isBegining && <LeftArrow onClick={() => swiper.slidePrev()} />}
    </div>
  );
};

export default CarouselLeftNavigation;
