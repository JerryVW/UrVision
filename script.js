const hamburger = document.querySelector('.hamburger');
const navLink = document.querySelector('.nav__link');
const scrollLinks = document.querySelectorAll("a");

hamburger.addEventListener('click', () => {
  navLink.classList.toggle('hide');
});

// $(document).ready(function() {
//     $("scrollLinks").on("click", function(event) {
//       const href = $(this).attr("href"),
//         target = $("#" + hash);
  
//       event.preventDefault();
//       $("html, body").animate({
//           scrollTop: $(target).offset().top
//         },
//         800,
//         function() {
//           window.location.href = href;
//         }
//       );
//     });
//   });

for( const scroll of scrollLinks) {
    scroll.addEventListener("click", clickHandler);
}

// function clickHandler(e) {
//     e.preventDefault();
//     const href = this.getAttribute("href");
//     const offsetTop = document.querySelector(href).offsetTop;

//     scroll({
//         top: offsetTop,
//         behavior: "smooth"
//     });
// }