//video play and Pause

var video = document.querySelector('.video');
var video_poster = document.querySelector('.video_poster');
var videoPlayer = document.getElementById('videoPlayer');

videoPlayer.addEventListener('click', function() {
    if (video.paused == false) {
        video.pause();
        video.firstChild.nodeValue = 'Play';
        video_poster.style.display = "block";
    } else {
        video.play();
        video.firstChild.nodeValue = 'Pause';
        video_poster.style.display = "none";
        videoPlayer.style.display = "none";

        if (video.paused == false) {
            video.addEventListener('click', function() {
                video.pause();
                video.firstChild.nodeValue = 'Play';
                video_poster.style.display = "block";
                videoPlayer.style.display = "block";
            })
        }
    }
})