// Preloader

window.onload = function () {
   document.body.classList.add("loaded_hiding");
   window.setTimeout(function () {
      document.body.classList.add("loaded");
      document.body.classList.remove("loaded_hiding");
   }, 500);
};

// Menu button

const button = document.querySelector(".btn_menu");

button.addEventListener("click", () => {
   const currentState = button.getAttribute("data-state");
   if (!currentState || currentState === "closed") {
      button.setAttribute("data-state", "opened");
      button.setAttribute("aria-expanded", "true");
   } else {
      button.setAttribute("data-state", "closed");
      button.setAttribute("aria-expanded", "false");
   }
});

const menu_btn = document.querySelector(".examples");
const menu_wrapper = document.querySelector(".menu_wrapper");
const menu_close = document.querySelector(".closeMenu");
const body_hidden = document.querySelectorAll(".body_hide");
const menuLinks = document.querySelectorAll(".menu_link");

function btn_animation() {
   const currentState = button.getAttribute("data-state");
   if (!currentState || currentState === "opened") {
      button.setAttribute("data-state", "closed");
      button.setAttribute("aria-expanded", "false");
   }
}
const menuWrapper = () => {
   menu_wrapper.classList.toggle("menu_active");
};
const appenedClasses = () => {
   body_hidden.forEach((item) => {
      item.classList.toggle("body_hiden");
   });
};

function toggleMenu() {
   menuWrapper();
   appenedClasses();
}

menu_btn.addEventListener("click", toggleMenu);
// menu_close.addEventListener("click", toggleMenu);
menuLinks.forEach((link) =>
   link.addEventListener("click", () => {
      toggleMenu();
      btn_animation();
   })
);

const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
   anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const blockID = anchor.getAttribute("href").substr(1);

      document.getElementById(blockID).scrollIntoView({
         behavior: "smooth",
         block: "start",
      });
   });
}

// слайдер из таблиц

$(".table_slider").slick({
   vertical: true,
   verticalSwiping: true,
   dots: false,
   slidesToShow: 1,
   infinite: false,
   // autoplay: true,
   //    appendArrows: ".slider-arrows",
   //    prevArrow: '<img class="prev slick-arrow" src="/img/Mobile_bg/arr_up.svg">',
   //    nextArrow:'<img class="next slick-arrow" src="/img/Mobile_bg/arr_bottom.svg">',
   prevArrow: $(".prev"),
   nextArrow: $(".next"),
   //    responsive: [
   //       {
   //          breakpoint: 576,
   //          settings: {},
   //       },
   //    ],
});

const table = document.querySelector(".table_visible");
const viewFull = document.querySelector(".view_full");
const table_visible_item = document.querySelector(".table_visible_item");

viewFull.addEventListener("click", toggleActiveTable);
table_visible_item.addEventListener("click", removeActiveTable);
table.addEventListener("click", toggleActiveTable);

function toggleActiveTable() {
   table.classList.toggle("table_active");
}
function removeActiveTable() {
   table.classList.remove(".table_active");
}

// Plan text slider
$(".plan-slider").slick({
   arrows: false,
   responsive: [
      {
         breakpoint: 576,
         settings: {
            dots: true,
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: false,
            autoplay: true,
         },
      },
   ],
});
