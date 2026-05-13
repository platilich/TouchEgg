let music_button = document.querySelector('.music_button') // music button
let audio = document.querySelector('audio') // audio



function toggleMusic() {
    if (audio.paused) {
        audio.currentTime = 0;
        audio.play();
        music_button.innerHTML = 'Stop Sound';

    } else {
        audio.pause();
        music_button.innerHTML = 'Play Sound';
    }
}




music_button.addEventListener('click', function() {
    toggleMusic()


})