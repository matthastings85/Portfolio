// import Swiper core and required modules
import { Autoplay, EffectCoverflow } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css/bundle";
import { getToolIcon } from "../utilities/utilityFunctions";
import "./styled/swiper-styles.css";

const ToolsSwiper = () => {
  const tools = [
    "React",
    "JavaScript",
    "HTML",
    "CSS",
    "SASS",
    "Bootstrap",
    "GitHub",
    "Codepen",
    "Git",
    "Node",
    "NPM",
    "Shopify",
    "Wordpress",
    "MUI",
  ];

  return (
    <Swiper
      // install Swiper modules
      modules={[EffectCoverflow, Autoplay]}
      centeredSlides={true}
      slidesPerView={4}
      loopedSlides={9}
      effect={"coverflow"}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: true,
      }}
      coverflowEffect={{
        rotate: 0,
        slideShadows: false,
        stretch: 0,
        depth: 250,
        modifier: 1,
        scale: 0.8,
      }}
    >
      {tools.map((tool, index) => {
        return <SwiperSlide key={tool}>{getToolIcon(tool, index)}</SwiperSlide>;
      })}
    </Swiper>
  );
};

export default ToolsSwiper;
