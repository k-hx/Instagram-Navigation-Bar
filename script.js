//the unordered list
let mainNav = document.getElementById('js-menu');

//the hamburger three lines bar
let navBarToggle = document.getElementById('js-navbar-toggle');

navBarToggle.addEventListener('click', function() {
    mainNav.classList.toggle('active');
});

/* DR.SIM'S CODE
----------------
let mainNav = document.getElementById('js-menu');

let navBarToggle = document.getElementById('js-navbar-toggle');

navBarToggle.addEventListener('click', function()
{
	mainNav.classList.toggle('active');
});
*/

/* Make sure the variable name and the id is always right!!!*/