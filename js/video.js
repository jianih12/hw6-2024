var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.autoplay = false;
	video.loop = false;
	console.log("Autoplay is set to" + video.autoplay);
	console.log("Loop is set to" + video.loop);
})

// Play video
document.querySelector("#play").addEventListener("click", function() {
 video.play();
 console.log("Play Video");
})

// Pause video
document.querySelector("#pause").addEventListener("click", function() {
 video.pause();
 console.log("Pause Video");
})

// Speed up video
document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate *= 0.9;
	console.log("Speed is " + video.playbackRate);
})

// Slow down video
document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate /= 0.9;
	console.log("Speed is " + video.playbackRate);
})

// Skip ahead
document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip ahead");
	video.currentTime += 10;
	console.log("Current location " + video.currentTime);
	if (video.currentTime >= video.duration) {
		video.currentTime = 0;
		console.log("Video Current Time is " + video.currentTime);
	}
})

// Mute/Unmute video
document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted) {
		video.muted = false;
		console.log("Unmuted");
		document.querySelector("#mute").innerHTML = "Mute";
	}
	else {
		video.muted = true;
		console.log("Muted");
		document.querySelector("#mute").innerHTML = "Unmute";
	}
})



// Volume Slider


// Styled

// Original

