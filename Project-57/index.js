const video = document.getElementById('video');
  const playBtn = document.getElementById('play');
  const muteBtn = document.getElementById('mute');
  const volSlider = document.getElementById('volume');
  const backBtn = document.getElementById('backward');
  const forwardBtn = document.getElementById('forward');
  const progress = document.getElementById('progress');
  const timeDisplay = document.getElementById('time');
  const fullscreenBtn = document.getElementById('fullscreen');

  function formatTime(t) {
    const minutes = Math.floor(t / 60);
    const seconds = Math.floor(t % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  }

  playBtn.onclick = () => {
    if (video.paused) {
      video.play();
      playBtn.textContent = '❚❚';
    } else {
      video.pause();
      playBtn.textContent = '▶️';
    }
  };

  muteBtn.onclick = () => {
    video.muted = !video.muted;
    muteBtn.textContent = video.muted ? '🔇' : '🔊';
  };

  volSlider.oninput = (e) => {
    video.volume = e.target.value;
    video.muted = e.target.value == 0;
    muteBtn.textContent = video.muted ? '🔇' : '🔊';
  };

  video.ontimeupdate = () => {
    const percent = (video.currentTime / video.duration) * 100;
    progress.value = percent;
    timeDisplay.textContent = `${formatTime(video.currentTime)} / ${formatTime(video.duration)}`;
  };

  progress.oninput = (e) => {
    video.currentTime = (e.target.value / 100) * video.duration;
  };

  backBtn.onclick = () => video.currentTime -= 10;
  forwardBtn.onclick = () => video.currentTime += 10;

  fullscreenBtn.onclick = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      video.parentElement.requestFullscreen();
    }
  };