var video = document.getElementById('player1');

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video.autoplay = false;
	video.loop = false;
	console.log("Auto play is set to " + video.autoplay);
	console.log("Loop is set to " + video.loop);
})

// Play video
document.querySelector('#play').addEventListener('click', function() {
	video.play();
	console.log("Play Video");
	document.querySelector('#volume').innerHTML = video.volume * 100 + "%";
})

// Pause video
document.querySelector('#pause').addEventListener('click', function() {
	video.pause();
	console.log("Pause Video");
})

// Slow down video
document.querySelector('#slower').addEventListener("click", function() {
	video.playbackRate *= 0.9;
	console.log("Slow down video");
	console.log("Speed is " + video.playbackRate);
})

// Speed up video
document.querySelector('#faster').addEventListener("click", function() {
	video.playbackRate /= 0.9;
	console.log("Speed up video");
	console.log("Speed is " + video.playbackRate);
})

// Skip ahead
document.querySelector('#skip').addEventListener("click", function() {
	console.log("Skip ahead");
	if (video.currentTime + 10 > video.duration){
		video.currentTime = 0;
	} else{
		video.currentTime += 10;
	}
	console.log("Video current time is " + video.currentTime);
})

// Mute and unmute video
document.querySelector('#mute').addEventListener("click", function() {
	if (video.muted) {
		video.muted = false;
		console.log("Unmute");
		document.querySelector('#mute').innerHTML = "Mute";
	}
	else {
		video.muted = true;
		console.log("Mute");
		document.querySelector('#mute').innerHTML = "Unmute";
	}
})

// Volume slider
document.querySelector('#slider').addEventListener('input', function() {
	video.volume = this.value / 100;
	document.querySelector("#volume").innerHTML = this.value + "%";
	console.log("The current value is " + this.value + "%");
})

// Styled video (old school)
document.querySelector('#vintage').addEventListener("click", function() {
	video.classList.add("oldSchool");
	console.log("Old School Style");
})

// Original video
document.querySelector('#orig').addEventListener("click", function() {
	video.classList.remove("oldSchool");
	console.log("Original Style");
})
