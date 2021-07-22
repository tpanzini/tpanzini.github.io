const carouselSlide = document.querySelector(".slider-container");
const carouselImages = document.querySelectorAll(".slider-container img");
const img = document.querySelector(".slider-container img");

//Button
const btnLeft = document.querySelector(".btn-left");
const btnRight = document.querySelector(".btn-right");

//thumbnails
const tokyoThumbnail = document.querySelector(".tokyo-thumbnail");
const osakaThumbnail = document.querySelector(".osaka-thumbnail");
const naraThumbnail = document.querySelector(".nara-thumbnail");
const kyotoThumbnail = document.querySelector(".kyoto-thumbnail");
//counter
let counter = 0;
const size = carouselImages[0].clientWidth;
const sizeRem = (size / 16) * 1.5;
// const getWidthElement = window.getComputedStyle("img");
// console.log(getWidthElement);
// const size = getWidthElement.getPropertyValue("width");
//720px

function nextSlide() {
  if (counter >= carouselImages.length - 1) {
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    carouselSlide.style.transform =
      "translateX(" + -sizeRem * carouselImages.length + "rem)";
    counter = -1;
  }
  counter++;
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  carouselSlide.style.transform = "translateX(" + -sizeRem * counter + "rem)";
}

function prevSlide() {
  if (counter <= 0) {
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    carouselSlide.style.transform =
      "translateX(" + -sizeRem * (carouselImages.length - 1) + "rem)";
    counter = carouselImages.length;
  }
  counter--;
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  carouselSlide.style.transform = "translateX(" + -sizeRem * counter + "rem)";
}

//event listeners
//slider buttons
btnRight.addEventListener("click", nextSlide);
btnLeft.addEventListener("click", prevSlide);

//Slide in Content
const scrollElements = document.querySelectorAll(".js-scroll");

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;
  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el);
    }
  });
};
window.addEventListener("scroll", () => {
  handleScrollAnimation();
});
