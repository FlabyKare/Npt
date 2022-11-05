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

const bodyWidth = document.body.clientWidth;
const desktop = document.querySelector(".desktop");
if (bodyWidth > 767) {
   desktop.innerHTML = `
    
    
    
    <ul class="messengers desktop_messengers">
    <li class=" hover_svg">
        <svg width="30" height="30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_212_92)">
                <path
                    d="M29.413 2.458a1.813 1.813 0 00-1.79-.385L1.243 10.77a1.798 1.798 0 00-1.242 1.634c-.035.756.39 1.441 1.083 1.745l6.524 2.854 1.968 9.128c.082.38.274.717.682.821.412.105.704-.12 1.011-.35l4.841-3.625 5.66 4.63a1.8 1.8 0 001.728.314 1.8 1.8 0 001.181-1.3l5.272-22.412a1.813 1.813 0 00-.54-1.75zm-17.721 16.18a.244.244 0 00-.01.026l-1.09 3.812-1.218-5.648 8.374-4.652-5.855 6.121a.882.882 0 00-.201.34zm.346 5.186l.496-1.731.474-1.657 1.699 1.39-2.669 1.998zm16.199-20.02l-5.272 22.413c-.002.01-.006.026-.032.035-.025.008-.038-.002-.046-.009l-6.193-5.067-2.87-2.349 9.218-9.638a.88.88 0 00-1.064-1.38l-13.65 7.584-6.537-2.86c-.02-.008-.03-.013-.029-.047.002-.034.013-.037.034-.044l26.378-8.695c.013-.005.027-.01.048.01s.018.034.015.047z"
                    fill="url(#paint0_linear_212_92)" />
            </g>
            <defs>
                <linearGradient id="paint0_linear_212_92" x1="-2.875" y1="-9.175" x2="32.089"
                    y2="-7.557" gradientUnits="userSpaceOnUse">
                    <stop id="white" stop-color="#00B292" />
                    <stop id="white" offset=".291" stop-color="#2DFFD9" />
                    <stop id="white" offset=".636" stop-color="#54FFE0" />
                    <stop id="white" offset=".978" stop-color="#03776F" />
                </linearGradient>
                <clipPath id="clip0_212_92">
                    <path fill="#fff" d="M0 0h30v30H0z" />
                </clipPath>
            </defs>
        </svg>
    </li>
    <li class="instagram hover_svg">
        <svg width="30" height="30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M27.982 9.644c-.061-1.381-.285-2.331-.605-3.154a6.346 6.346 0 00-1.503-2.306 6.4 6.4 0 00-2.301-1.498c-.828-.32-1.773-.544-3.154-.605C19.027 2.015 18.585 2 15.055 2s-3.971.015-5.358.076c-1.382.061-2.331.285-3.154.605a6.344 6.344 0 00-2.306 1.503 6.401 6.401 0 00-1.499 2.3c-.32.829-.543 1.773-.604 3.155-.066 1.392-.081 1.834-.081 5.364s.015 3.971.076 5.358c.06 1.381.284 2.331.604 3.154a6.41 6.41 0 001.504 2.306 6.399 6.399 0 002.3 1.498c.829.32 1.773.544 3.155.605 1.386.06 1.828.076 5.358.076 3.53 0 3.972-.015 5.359-.076 1.381-.061 2.331-.284 3.154-.604a6.65 6.65 0 003.804-3.805c.32-.828.544-1.773.605-3.154.06-1.387.076-1.828.076-5.358 0-3.53-.005-3.972-.066-5.359zM25.64 20.26c-.056 1.27-.269 1.956-.447 2.413a4.313 4.313 0 01-2.468 2.469c-.457.177-1.148.39-2.413.446-1.371.061-1.782.077-5.252.077-3.469 0-3.885-.016-5.251-.077-1.27-.055-1.956-.269-2.413-.446a4 4 0 01-1.493-.97 4.042 4.042 0 01-.97-1.494c-.178-.457-.391-1.148-.447-2.412-.061-1.372-.076-1.783-.076-5.252 0-3.47.015-3.886.076-5.252.056-1.27.269-1.956.447-2.413a3.952 3.952 0 01.975-1.493c.421-.432.93-.762 1.493-.97.457-.178 1.148-.391 2.413-.447 1.371-.06 1.783-.076 5.251-.076 3.475 0 3.886.015 5.252.076 1.27.056 1.956.27 2.413.447a3.998 3.998 0 011.493.97c.432.422.762.93.97 1.493.178.457.391 1.148.447 2.413.061 1.371.076 1.783.076 5.252s-.015 3.875-.076 5.246z"
                fill="url(#paint0_linear_212_97)" />
            <path
                d="M15.055 8.324a6.68 6.68 0 00-6.679 6.679 6.68 6.68 0 006.679 6.679 6.68 6.68 0 006.68-6.68 6.68 6.68 0 00-6.68-6.678zm0 11.011a4.333 4.333 0 11.001-8.666 4.333 4.333 0 01-.001 8.666z"
                fill="url(#paint1_linear_212_97)" />
            <path d="M23.558 8.06a1.56 1.56 0 11-3.119 0 1.56 1.56 0 013.12 0z"
                fill="url(#paint2_linear_212_97)" />
            <defs>
                <linearGradient id="paint0_linear_212_97" x1="-.439" y1="-9.143" x2="29.874" y2="-7.926"
                    gradientUnits="userSpaceOnUse">
                    <stop id="white" stop-color="#00B292" />
                    <stop id="white" offset=".291" stop-color="#2DFFD9" />
                    <stop id="white" offset=".636" stop-color="#54FFE0" />
                    <stop id="white" offset=".978" stop-color="#03776F" />
                </linearGradient>
                <linearGradient id="paint1_linear_212_97" x1="7.096" y1="2.599" x2="22.672" y2="3.224"
                    gradientUnits="userSpaceOnUse">
                    <stop id="white" stop-color="#00B292" />
                    <stop id="white" offset=".291" stop-color="#2DFFD9" />
                    <stop id="white" offset=".636" stop-color="#54FFE0" />
                    <stop id="white" offset=".978" stop-color="#03776F" />
                </linearGradient>
                <linearGradient id="paint2_linear_212_97" x1="20.14" y1="5.164" x2="23.777" y2="5.31"
                    gradientUnits="userSpaceOnUse">
                    <stop stop-color="#00B292" />
                    <stop id="white" offset=".291" stop-color="#2DFFD9" />
                    <stop id="white" offset=".636" stop-color="#54FFE0" />
                    <stop id="white" offset=".978" stop-color="#03776F" />
                </linearGradient>
            </defs>
        </svg>
    </li>
    <li class=" hover_svg">
        <svg width="46" height="30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M36.188 3H9.811C8.26 3 7 4.295 7 5.875v17.25C7 24.715 8.268 26 9.813 26h26.374C37.728 26 39 24.72 39 23.125V5.875C39 4.297 37.746 3 36.187 3zm-.394 1.917L24.989 15.903a2.766 2.766 0 01-3.98-.002L10.206 4.918h25.588zM8.875 22.735V6.266l8.102 8.24-8.102 8.229zm1.333 1.348l8.099-8.226 1.378 1.402A4.606 4.606 0 0023 18.662c1.252 0 2.43-.498 3.313-1.401l1.38-1.404 8.1 8.226H10.207zm26.917-1.348l-8.102-8.23 8.102-8.239v16.469z"
                fill="url(#paint0_linear_212_102)" />
            <defs>
                <linearGradient id="paint0_linear_212_102" x1="3.933" y1="-6.857" x2="41.192"
                    y2="-4.775" gradientUnits="userSpaceOnUse">
                    <stop id="white" stop-color="#00B292" />
                    <stop id="white" offset=".291" stop-color="#2DFFD9" />
                    <stop id="white" offset=".636" stop-color="#54FFE0" />
                    <stop id="white" offset=".978" stop-color="#03776F" />
                </linearGradient>
            </defs>
        </svg>
    </li>
</ul>
    
    
    
    
    
    `;
   /*
    <ul class="messengers desktop_messengers">
        <li class=" hover_svg">
            <svg width="30" height="30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_212_92)">
                    <path
                        d="M29.413 2.458a1.813 1.813 0 00-1.79-.385L1.243 10.77a1.798 1.798 0 00-1.242 1.634c-.035.756.39 1.441 1.083 1.745l6.524 2.854 1.968 9.128c.082.38.274.717.682.821.412.105.704-.12 1.011-.35l4.841-3.625 5.66 4.63a1.8 1.8 0 001.728.314 1.8 1.8 0 001.181-1.3l5.272-22.412a1.813 1.813 0 00-.54-1.75zm-17.721 16.18a.244.244 0 00-.01.026l-1.09 3.812-1.218-5.648 8.374-4.652-5.855 6.121a.882.882 0 00-.201.34zm.346 5.186l.496-1.731.474-1.657 1.699 1.39-2.669 1.998zm16.199-20.02l-5.272 22.413c-.002.01-.006.026-.032.035-.025.008-.038-.002-.046-.009l-6.193-5.067-2.87-2.349 9.218-9.638a.88.88 0 00-1.064-1.38l-13.65 7.584-6.537-2.86c-.02-.008-.03-.013-.029-.047.002-.034.013-.037.034-.044l26.378-8.695c.013-.005.027-.01.048.01s.018.034.015.047z"
                        fill="url(#paint0_linear_212_92)" />
                </g>
                <defs>
                    <linearGradient id="paint0_linear_212_92" x1="-2.875" y1="-9.175" x2="32.089"
                        y2="-7.557" gradientUnits="userSpaceOnUse">
                        <stop id="white" stop-color="#00B292" />
                        <stop id="white" offset=".291" stop-color="#2DFFD9" />
                        <stop id="white" offset=".636" stop-color="#54FFE0" />
                        <stop id="white" offset=".978" stop-color="#03776F" />
                    </linearGradient>
                    <clipPath id="clip0_212_92">
                        <path fill="#fff" d="M0 0h30v30H0z" />
                    </clipPath>
                </defs>
            </svg>
        </li>
        <li class="instagram hover_svg">
            <svg width="30" height="30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M27.982 9.644c-.061-1.381-.285-2.331-.605-3.154a6.346 6.346 0 00-1.503-2.306 6.4 6.4 0 00-2.301-1.498c-.828-.32-1.773-.544-3.154-.605C19.027 2.015 18.585 2 15.055 2s-3.971.015-5.358.076c-1.382.061-2.331.285-3.154.605a6.344 6.344 0 00-2.306 1.503 6.401 6.401 0 00-1.499 2.3c-.32.829-.543 1.773-.604 3.155-.066 1.392-.081 1.834-.081 5.364s.015 3.971.076 5.358c.06 1.381.284 2.331.604 3.154a6.41 6.41 0 001.504 2.306 6.399 6.399 0 002.3 1.498c.829.32 1.773.544 3.155.605 1.386.06 1.828.076 5.358.076 3.53 0 3.972-.015 5.359-.076 1.381-.061 2.331-.284 3.154-.604a6.65 6.65 0 003.804-3.805c.32-.828.544-1.773.605-3.154.06-1.387.076-1.828.076-5.358 0-3.53-.005-3.972-.066-5.359zM25.64 20.26c-.056 1.27-.269 1.956-.447 2.413a4.313 4.313 0 01-2.468 2.469c-.457.177-1.148.39-2.413.446-1.371.061-1.782.077-5.252.077-3.469 0-3.885-.016-5.251-.077-1.27-.055-1.956-.269-2.413-.446a4 4 0 01-1.493-.97 4.042 4.042 0 01-.97-1.494c-.178-.457-.391-1.148-.447-2.412-.061-1.372-.076-1.783-.076-5.252 0-3.47.015-3.886.076-5.252.056-1.27.269-1.956.447-2.413a3.952 3.952 0 01.975-1.493c.421-.432.93-.762 1.493-.97.457-.178 1.148-.391 2.413-.447 1.371-.06 1.783-.076 5.251-.076 3.475 0 3.886.015 5.252.076 1.27.056 1.956.27 2.413.447a3.998 3.998 0 011.493.97c.432.422.762.93.97 1.493.178.457.391 1.148.447 2.413.061 1.371.076 1.783.076 5.252s-.015 3.875-.076 5.246z"
                    fill="url(#paint0_linear_212_97)" />
                <path
                    d="M15.055 8.324a6.68 6.68 0 00-6.679 6.679 6.68 6.68 0 006.679 6.679 6.68 6.68 0 006.68-6.68 6.68 6.68 0 00-6.68-6.678zm0 11.011a4.333 4.333 0 11.001-8.666 4.333 4.333 0 01-.001 8.666z"
                    fill="url(#paint1_linear_212_97)" />
                <path d="M23.558 8.06a1.56 1.56 0 11-3.119 0 1.56 1.56 0 013.12 0z"
                    fill="url(#paint2_linear_212_97)" />
                <defs>
                    <linearGradient id="paint0_linear_212_97" x1="-.439" y1="-9.143" x2="29.874" y2="-7.926"
                        gradientUnits="userSpaceOnUse">
                        <stop id="white" stop-color="#00B292" />
                        <stop id="white" offset=".291" stop-color="#2DFFD9" />
                        <stop id="white" offset=".636" stop-color="#54FFE0" />
                        <stop id="white" offset=".978" stop-color="#03776F" />
                    </linearGradient>
                    <linearGradient id="paint1_linear_212_97" x1="7.096" y1="2.599" x2="22.672" y2="3.224"
                        gradientUnits="userSpaceOnUse">
                        <stop id="white" stop-color="#00B292" />
                        <stop id="white" offset=".291" stop-color="#2DFFD9" />
                        <stop id="white" offset=".636" stop-color="#54FFE0" />
                        <stop id="white" offset=".978" stop-color="#03776F" />
                    </linearGradient>
                    <linearGradient id="paint2_linear_212_97" x1="20.14" y1="5.164" x2="23.777" y2="5.31"
                        gradientUnits="userSpaceOnUse">
                        <stop stop-color="#00B292" />
                        <stop id="white" offset=".291" stop-color="#2DFFD9" />
                        <stop id="white" offset=".636" stop-color="#54FFE0" />
                        <stop id="white" offset=".978" stop-color="#03776F" />
                    </linearGradient>
                </defs>
            </svg>
        </li>
        <li class=" hover_svg">
            <svg width="46" height="30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M36.188 3H9.811C8.26 3 7 4.295 7 5.875v17.25C7 24.715 8.268 26 9.813 26h26.374C37.728 26 39 24.72 39 23.125V5.875C39 4.297 37.746 3 36.187 3zm-.394 1.917L24.989 15.903a2.766 2.766 0 01-3.98-.002L10.206 4.918h25.588zM8.875 22.735V6.266l8.102 8.24-8.102 8.229zm1.333 1.348l8.099-8.226 1.378 1.402A4.606 4.606 0 0023 18.662c1.252 0 2.43-.498 3.313-1.401l1.38-1.404 8.1 8.226H10.207zm26.917-1.348l-8.102-8.23 8.102-8.239v16.469z"
                    fill="url(#paint0_linear_212_102)" />
                <defs>
                    <linearGradient id="paint0_linear_212_102" x1="3.933" y1="-6.857" x2="41.192"
                        y2="-4.775" gradientUnits="userSpaceOnUse">
                        <stop id="white" stop-color="#00B292" />
                        <stop id="white" offset=".291" stop-color="#2DFFD9" />
                        <stop id="white" offset=".636" stop-color="#54FFE0" />
                        <stop id="white" offset=".978" stop-color="#03776F" />
                    </linearGradient>
                </defs>
            </svg>
        </li>
    </ul> 
    */
}
