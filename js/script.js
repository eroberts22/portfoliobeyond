// set active page, doesnt work
$(document).ready(function () {
    $('.navbar-links ul li a').click(function () {
        //removing the previous selected menu state
        $('.navbar').find('a.active').removeClass('active');
        //adding the state for this parent menu
        $(this).parents("a").addClass('active');

    });
});

// insert nav.html into each page
$(function () { $("#navbar-placeholder").load("nav.html"); });

// toggle for dropdown menu
function myFunc() {
    const toggleButton = document.getElementsByClassName('toggle-button')[0];
    const navbarlinks = document.getElementsByClassName('navbar-links')[0];
    const bar0 = document.getElementsByClassName('bar')[0];
    const bar1 = document.getElementsByClassName('bar')[1];
    const bar2 = document.getElementsByClassName('bar')[2];

    toggleButton.addEventListener('click', function() {
    navbarlinks.classList.toggle('active');
    bar0.classList.toggle('active');
    bar1.classList.toggle('active');
    bar2.classList.toggle('active');
});
};

window.onload = myFunc;

