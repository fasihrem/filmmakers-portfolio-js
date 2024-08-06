document.addEventListener('DOMContentLoaded', function () {
    const openIcon = document.getElementById('openIcon');
    const closeIcon = document.getElementById('closeIcon');
    const overlay = document.getElementById('overlay');
    const navigationPanel = document.querySelector('.navigation-panel');

    openIcon.addEventListener('click', function () {
        overlay.style.display = 'block';
        navigationPanel.style.left = '0';
    });

    closeIcon.addEventListener('click', function () {
        overlay.style.display = 'none';
        navigationPanel.style.left = '-300px';
    });
});

var videos = ["vid/ccc.mp4", "vid/dubai.mp4", "vid/bear.mp4", "vid/rover.mp4", "vid/uni.mp4", "vid/illvzn.mp4", "vid/9daysleft.mp4", "vid/bethak.mp4"]; // Add more video sources as needed
var currentVideoIndex = 0;

// Initialize the video player
var player = videojs('my-video', {
    controls: true,
    autoplay: false,
    preload: 'auto',
    fluid: true
});

function changeVideo(direction) {
    currentVideoIndex += direction;

    // Wrap around if reaching the end or beginning
    if (currentVideoIndex >= videos.length) {
        currentVideoIndex = 0;
    } else if (currentVideoIndex < 0) {
        currentVideoIndex = videos.length - 1;
    }

    // Fade out the current video
    player.addClass('video-fade');

    // Wait for the fade out transition to complete
    setTimeout(function () {
        // Update video source
        player.src({ type: 'video/mp4', src: videos[currentVideoIndex] });

        // Play the new video
        player.play();

        // Remove fade class to trigger fade-in transition
        player.removeClass('video-fade');
    }, 500); // 500 milliseconds is the duration of the fade-out transition
}