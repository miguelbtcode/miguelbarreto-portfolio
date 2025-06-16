"use client";

import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

const WorkSliderBtns = ({
  containerStyles,
  btnStyles,
  iconsStyles,
  className = "",
}) => {
  const swiper = useSwiper();

  const handlePrevClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (swiper) {
      swiper.slidePrev();
    }
  };

  const handleNextClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (swiper) {
      swiper.slideNext();
    }
  };

  return (
    <div className={`${containerStyles} ${className}`}>
      <button
        className={btnStyles}
        onClick={handlePrevClick}
        type="button"
        aria-label="Proyecto anterior"
      >
        <PiCaretLeftBold className={iconsStyles} />
      </button>
      <button
        className={btnStyles}
        onClick={handleNextClick}
        type="button"
        aria-label="Proyecto siguiente"
      >
        <PiCaretRightBold className={iconsStyles} />
      </button>
    </div>
  );
};

export default WorkSliderBtns;
