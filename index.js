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
const sizeRem = size / 16;
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

//change slider function
function changeSlider(e) {
  const oldThumbnail = e.target;
  const newThumbnail = document.querySelector(".slider-container img").src;
  const titleText = oldThumbnail.getAttribute("alt");
  carouselSlide.innerHTML = "";
  const firstImage = oldThumbnail.src;
  oldThumbnail.setAttribute("src", newThumbnail);
  console.log(e);

  const slide = document.createElement("div");
  // let name = n;
  slide.innerHTML = ` <div class="image slide-1">
      <h2 class=" title-text">${titleText}</h2>
      <p class="slider-text">From full-time guided packages for completly stress free trips, to fully tailored itenaries for those who choose to venture alone.</p>
      <img class="image" src=${firstImage}>
    </div>
     <div class="slide-2">
      <h2 class=" title-text">${titleText}</h2>
      <p class="slider-text">>From full-time guided packages for completly stress free trips, to fully tailored itenaries for those who choose to venture alone.</p>
      <img class="image" src=/${e.target.alt}-2.jpg>
    </div>
     <div class="slide-3">
      <h2 class="title-text">${titleText}</h2>
      <p class="slider-text">>From full-time guided packages for completly stress free trips, to fully tailored itenaries for those who choose to venture alone.</p>
      <img class="image" src=/${e.target.alt}-3.jpg>
    </div>
     <div class="slide-4">
      <h2 class="title-text">${titleText}</h2>
      <p class="slider-text">From full-time guided packages for completly stress free trips, to fully tailored itenaries for those who choose to venture alone.</p>
      <img class="image" src=/${e.target.alt}-4.jpg>
    </div>`;
  //save each image as the Alt text - number (i.e. "Osaka-2")
  carouselSlide.appendChild(slide);
}

//event listeners
//slider buttons
btnRight.addEventListener("click", nextSlide);
btnLeft.addEventListener("click", prevSlide);
