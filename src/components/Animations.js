import gsap from "gsap";

export const handleCity = (city, target) => {
  gsap.to(target, {
    duration: 0,
    background: `url(${city}) center center`
  });
  gsap.to(target, {
    duration: 0.4,
    opacity: 1,
    ease: "power3.inOut"
  });
  gsap.from(target, {
    duration: 0.4,
    skewY: 2,
    transformOrigin: "right top"
  });
};

export const handleCityReturn = target => {
  gsap.to(target, {
    duration: 0,
    skewY: 0
  });
  gsap.to(target, {
    duration: 0.4,
    opacity: 0,
    skewY: 0
  });
};
