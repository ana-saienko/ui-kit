// var dropmic = new Dropmic(document.querySelector('[data-dropmic="42"]'));
// var dropmic = new Dropmic(document.querySelector('[data-dropmic="43"]'));


// RANGE INPUT

var slider = document.getElementById('slider');

noUiSlider.create(slider, {
    start: [20],
    connect: [true, false],
    range: {
        'min': 0,
        'max': 100
    }
});

var slider = document.getElementById('slider-two');

noUiSlider.create(slider, {
    start: [15, 34],
    connect: true,
    range: {
        'min': 0,
        'max': 50
    }
});

var slider = document.getElementById('slider-three');

noUiSlider.create(slider, {
	
    start: [15, 34],
    connect: true,
    range: {
        'min': 0,
        'max': 50
    },
	 tooltips: true,
	 format: {
		 to: function (value) {
			 return parseInt(value);
		 },
		 from: function (value) {
			 return parseInt(value);
		 },
	 }
});

var slider = document.getElementById('slider-small');

noUiSlider.create(slider, {
	
    start: [15, 34],
    connect: true,
    range: {
        'min': 0,
        'max': 50
    },
	 tooltips: true,
	 format: {
		 to: function (value) {
			 return parseInt(value);
		 },
		 from: function (value) {
			 return parseInt(value);
		 },
	 }
});

var slider = document.getElementById('slider-small-two');

noUiSlider.create(slider, {
	
    start: [15],
    connect: [true, false],
    range: {
        'min': 0,
        'max': 50
    },
	 tooltips: true,
	 format: {
		 to: function (value) {
			 return parseInt(value);
		 },
		 from: function (value) {
			 return parseInt(value);
		 },
	 }
});

const progress = document.querySelector('.progress-done');

progress.style.width = progress.getAttribute('data-done') + '%';
progress.style.opacity = 1;

// -----------------------------------

const circle = document.querySelector('.progress-ring__circle');
const radius = circle.r.baseVal.value;
const circumference = 2 * Math.PI * radius;

circle.style.strokeDasharray = `${circumference} ${circumference}`;
circle.style.strokeDashoffset = circumference;

function setProgress(percent) {
    const offset = circumference - percent / 100 * circumference;
    circle.style.strokeDashoffset = offset;
}

setProgress(69);

// -------------------------------------------
// ------------------------------

// nav 1
// Get the container element
var btnContainer = document.getElementById("nav-1");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("tabs-icon__item");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("tabs-icon__item--active");
    current[0].className = current[0].className.replace(" tabs-icon__item--active", "");
    this.className += " tabs-icon__item--active";
  });
}

// nav 2
// Get the container element
var btnContainer = document.getElementById("nav-2");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("tabs__item");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("tabs__item--active");
    current[0].className = current[0].className.replace(" tabs__item--active", "");
    this.className += " tabs__item--active";
  });
}

// nav 2
// Get the container element
var btnContainer = document.getElementById("nav-3");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("tabs__item");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("tabs--active");
    current[0].className = current[0].className.replace(" tabs--active", "");
    this.className += " tabs--active";
  });
}

// ----------------------------------------------------------------------------
// TABS WITH ICONS 

// tabs 1
// Get the container element
var btnContainer = document.getElementById("tabs-1");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("nav__tab-1");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("nav__tab--active1");
    current[0].className = current[0].className.replace(" nav__tab--active1", "");
    this.className += " nav__tab--active1";
  });
}

// tabs 2
// Get the container element
var btnContainer = document.getElementById("tabs-2");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("nav__tab-2");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("nav__tab--active2");
    current[0].className = current[0].className.replace(" nav__tab--active2", "");
    this.className += " nav__tab--active2";
  });
}

// tabs 3
// Get the container element
var btnContainer = document.getElementById("tabs-3");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("nav__tab-3");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("nav__tab--active3");
    current[0].className = current[0].className.replace(" nav__tab--active3", "");
    this.className += " nav__tab--active3";
  });
}

// ----------------------------------------------------------------------------
// TABS WITHOUT ICONS 

// tabs 1
// Get the container element
var btnContainer = document.getElementById("tab-1");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("nav-1");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("nav__tab--active");
    current[0].className = current[0].className.replace(" nav__tab--active", "");
    this.className += " nav__tab--active";
  });
}

// tabs 2
// Get the container element
var btnContainer = document.getElementById("tab-2");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("nav-2");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("nav--active2");
    current[0].className = current[0].className.replace(" nav--active2", "");
    this.className += " nav--active2";
  });
}

// tabs 3
// Get the container element
var btnContainer = document.getElementById("tab-3");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("nav-3");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("nav__tab--active-3");
    current[0].className = current[0].className.replace(" nav__tab--active-3", "");
    this.className += " nav__tab--active-3";
  });
}