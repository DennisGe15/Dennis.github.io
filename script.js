const video = document.querySelector("#custom-video-player");
const rewindBtn = document.querySelector("#rewind-btn");
const fastforwardBtn = document.querySelector("#fast-forward-btn");
const playPauseBtn = document.querySelector("#play-pause-btn");
const playPauseImg = document.querySelector("#play-pause-img");
const muteUnmuteBtn = document.querySelector("#mute-unmute-btn");
const muteUnmuteImg = document.querySelector("#mute-unmute-img");
const progressBar = document.querySelector("#progress-bar-fill");
const fullscreenBtn = document.querySelector("#fullscreen-btn");
const volumecontrolBar = document.querySelector("#volume-control-bar");
const likesBtn = document.querySelector("#like-btn");
const likes = document.querySelector("#likes");
let likesValue = 15
likes.innerHTML =likesValue
let oldValue 
video.removeAttribute("controls");
// playPauseBtn.addEventListener("click", togglePlayPause);
video.addEventListener("timeupdate", updateProgressBar);
function togglePlayPause() {
  if (video.paused || video.ended) {
    video.play();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v1.png";
  } else {
    video.pause();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v1.png";
  }
}
function updateProgressBar() {
  const value = (video.currentTime / video.duration) * 100;
  progressBar.style.width = value + "%";
}
// mute-unmute-btn 
muteUnmuteBtn.addEventListener('click',function(){
  if (video.muted ){
    video.muted = false;
    muteUnmuteImg.src = "https://img.icons8.com/?size=100&id=41563&format=png&color=000000";
    
    volumecontrolBar.value = oldValue; 
  }
  else {
    oldValue = video.volume
  
    video.muted = true;
    muteUnmuteImg.src = "https://img.icons8.com/?size=100&id=9976&format=png&color=000000";
    volumecontrolBar.value = 0;
  }
})

// fastforwardBtn
fastforwardBtn.addEventListener('click',function(){
  video.currentTime += 30;
})

// rewindBtn
rewindBtn.addEventListener('click',function(){
  video.currentTime -= 30;
})

// fullscreenBtn
fullscreenBtn.addEventListener('click',function(){
  video.requestFullscreen();
})

// volumncontrolBar
volumecontrolBar.addEventListener('input', function(){
  console.log(volumecontrolBar.value )
  video.volume = volumecontrolBar.value
  if (video.volume === 0 ){
    muteUnmuteImg.src = "https://img.icons8.com/?size=100&id=9414&format=png&color=000000";
  }
  else {
    muteUnmuteImg.src = "https://img.icons8.com/?size=100&id=41563&format=png&color=000000";
  }
})

// likesBtn
likesBtn.addEventListener('click',function(){
  likesValue++
  console.log(likesValue)
  likes.innerHTML = likesValue
})