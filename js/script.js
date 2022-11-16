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
   slidesToShow: 1,
   infinite: false,
   // autoplay: true,
   prevArrow: '<img class="prev slick-arrow" src="/img/Mobile_bg/arr_up.svg">',
   nextArrow: '<img class="next slick-arrow" src="/img/Mobile_bg/arr_bottom.svg">',

});
