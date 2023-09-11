
/* Fixed nav-bar effect */

window.addEventListener("scroll", function () {
    let header = document.querySelector("header");
    
    header.classList.toggle("sticky", window.scrollY > 0);
    
})


/* Mobile-Menu effects */

$(document).ready (function () {
    $('.mobile-menu').click(function () {
        $('.mobile-menu').toggleClass('active')
        $('.menu').toggleClass('active');
    })
})
