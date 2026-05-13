let about = document.getElementById('about')
let close = document.getElementById('close')


function openPopup() {
    document.getElementById("overlay").style.display = "flex";

}

function closePopup() {
    document.getElementById("overlay").style.display = "none";

}





about.addEventListener('click', openPopup)
close.addEventListener('click', closePopup)