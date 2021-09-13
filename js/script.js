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