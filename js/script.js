//!    Preloader

window.onload = function () {
   document.body.classList.add("loaded_hiding");
   window.setTimeout(function () {
      document.body.classList.add("loaded");
      document.body.classList.remove("loaded_hiding");
   }, 500);
};

//! Плавная прогрузка Элементов

function onEntry(entry) {
   entry.forEach((change) => {
      if (change.isIntersecting) {
         change.target.classList.add("element-show");
      }
   });
}

let options = {
   threshold: [0.5],
};
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll(".element-animation");

for (let elm of elements) {
   observer.observe(elm);
}

//!   Menu button

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
const mainHeader = document.querySelector(".main_header_wrapper");
const body = document.querySelector("body");
function btn_animation() {
   const currentState = button.getAttribute("data-state");
   if (!currentState || currentState === "opened") {
      button.setAttribute("data-state", "closed");
      button.setAttribute("aria-expanded", "false");
   }
}
const menuWrapper = () => {
   menu_wrapper.classList.toggle("menu_active");
   body.classList.toggle("mainHeader_active");
};

function toggleMenu() {
   menuWrapper();
}

menu_btn.addEventListener("click", () => {
   toggleMenu();
});

menuLinks.forEach((link) =>
   link.addEventListener("click", () => {
      toggleMenu();
      btn_animation();
   })
);

//!   Плавный переход по "Якорным ссылкам"
$(document).ready(function () {
   $("a.scrollto").click(function (event) {
      event.preventDefault();
      $("html, body").animate(
         { scrollTop: $($(this).attr("href")).offset().top },
         650
      );
   });
});
// слайдер из таблиц

$(".table_slider").slick({
   vertical: true,
   verticalSwiping: false,
   swipe: false,
   dots: false,
   slidesToShow: 1,
   infinite: false,
   prevArrow: $(".prev"),
   nextArrow: $(".next"),
});

//!   Увеличение таблицы после нажатия

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

//!    Plan text slider
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
            // autoplay: true,
         },
      },
   ],
});

//!   Footer "Слайдер"

const left_arrow = document.querySelectorAll(".left_arrow");
const right_arrow = document.querySelectorAll(".right_arrow");
const roadmapSliderItemClose = document.querySelectorAll(".close_svg");
const roadmapSliderItem = document.querySelectorAll(
   ".roadmap_before_slider_item"
);
const roadmapList = document.querySelector(".roadmap_list");
const footerArrows = document.querySelectorAll(".arrow_down_list");
const roadmapBeforeSlider = document.querySelector(".roadmap_before_slider");
function roadmapSliderItemClear() {
   roadmapSliderItem.forEach((roadmapItem) => {
      roadmapItem.classList.remove("roadmap_before_slider_item_show");
   });
   footerArrows.forEach((footerArrow) => {
      footerArrow.classList.remove("rotate_arrow");
   });
}

for (let i = 0; i < left_arrow.length; i++) {
   (function (index) {
      left_arrow[index].addEventListener("click", () => {
         roadmapSliderItemClear();
         roadmapSliderItem[index].classList.toggle(
            "roadmap_before_slider_item_show"
         );
         footerArrows[index].classList.add("rotate_arrow");
      });
   })(i);
}

for (let i = 0; i < right_arrow.length; i++) {
   (function (index) {
      right_arrow[i].addEventListener("click", () => {
         roadmapSliderItemClear();
         footerArrows[index + 1].classList.add("rotate_arrow");

         if (index <= 5) {
            roadmapSliderItem[index + 1].classList.toggle(
               "roadmap_before_slider_item_show"
            );
         }
      });
   })(i);
}

for (let counter = 0; counter < footerArrows.length; counter++) {
   (function (index) {
      footerArrows[counter].addEventListener("click", () => {
         roadmapList.classList.add("m-top250");
         footerArrows.forEach((footerArrow) => {
            footerArrow.classList.add("footerArrowHide");
         });
         footerArrows[index].classList.add("rotate_arrow");
         roadmapSliderItem[index].classList.toggle(
            "roadmap_before_slider_item_show"
         );
      });
   })(counter);
}

for (let close of roadmapSliderItemClose) {
   close.addEventListener("click", () => {
      roadmapList.classList.remove("m-top250", "m-top300");
      roadmapSliderItemClear();
      footerArrows.forEach((footerArrow) => {
         footerArrow.classList.remove("footerArrowHide", "rotate_arrow");
      });
   });
}

//* Popup

const popupBackBlack = document.querySelector(".popup_back_black");
const popup = document.querySelectorAll(".popup");
const popupWrapper = document.querySelector(".popup_wrapper");
const close = document.querySelector(".close");
const popupItemValues = document.querySelectorAll(".popup_item_value");

let bodyWidth = document.body.clientWidth;
const name = document.querySelector(".form_name");
const phone = document.querySelector(".form_tel");
const email = document.querySelector(".form_site");

function popupActive() {
   popup.forEach((popup_page) => {
      popup_page.classList.toggle("active");
   });

   popupItemValues.forEach((popupItemValuesNull) => {
      popupItemValuesNull.value = "";
   });
}
popupBackBlack.addEventListener("click", () => {
   popupActive();
});
close.addEventListener("click", () => {
   popupActive();
});

const emailIcons = document.querySelectorAll(".popup_call");
for (icon of emailIcons) {
   icon.addEventListener("click", () => {
      popupActive();
   });
}

// маска ввода телефона

window.addEventListener("DOMContentLoaded", function () {
   [].forEach.call(document.querySelectorAll(".tel"), function (input) {
      var keyCode;
      function mask(event) {
         event.keyCode && (keyCode = event.keyCode);
         var pos = this.selectionStart;
         if (pos < 3) event.preventDefault();
         var matrix = "+7 (___) ___ ____",
            i = 0,
            def = matrix.replace(/\D/g, ""),
            val = this.value.replace(/\D/g, ""),
            new_value = matrix.replace(/[_\d]/g, function (a) {
               return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
            });
         i = new_value.indexOf("_");
         if (i != -1) {
            i < 5 && (i = 3);
            new_value = new_value.slice(0, i);
         }
         var reg = matrix
            .substr(0, this.value.length)
            .replace(/_+/g, function (a) {
               return "\\d{1," + a.length + "}";
            })
            .replace(/[+()]/g, "\\$&");
         reg = new RegExp("^" + reg + "$");
         if (
            !reg.test(this.value) ||
            this.value.length < 5 ||
            (keyCode > 47 && keyCode < 58)
         )
            this.value = new_value;
         if (event.type == "blur" && this.value.length < 17) this.value = "";
      }

      input.addEventListener("input", mask, false);
      input.addEventListener("focus", mask, false);
      input.addEventListener("blur", mask, false);
      input.addEventListener("keydown", mask, false);
   });
});
