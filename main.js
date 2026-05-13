let egg = document.querySelector('.egg1') // for update skin

let count_left = document.querySelector('.count_left') // for update counter
let card_egg = document.querySelector('main')

let container = document.querySelector('main') // main container

let countElement = document.getElementById('count') // counter






// images
let images = [
        'media/egg/egg0.png',
        'media/egg/egg1.png',
        'media/egg/egg2.png',
        'media/egg/egg3.png',
        'media/egg/egg4.png'
]





let clicks = 0







function handleInteraction(e) {
    e.preventDefault();
    clicks += 1;
    countElement.innerHTML = `${clicks} $`;

    if (clicks < 10) {
        egg.src = images[0];
        count_left.innerHTML = `${10 - clicks} clicks left`;


    } else if (clicks < 50) {
        egg.src = images[1];
        count_left.innerHTML = `${50 - clicks} clicks left`;


    } else if (clicks < 100) {
        egg.src = images[2];
        count_left.innerHTML = `${100 - clicks} clicks left`;


    } else if (clicks < 150) {
        egg.src = images[3];
        count_left.innerHTML = `${150 - clicks} clicks left`


    } else {
        egg.src = images[4];
        count_left.innerHTML = 'This is the last egg<br>Your second name Sigma';
    }


    anime({
        targets: card_egg,
        scale: 1.01,
        duration: 50,
        easing: 'linear',
        complete: function() {
            anime({
                targets: card_egg,
                scale: 1,
                duration: 50,
                easing: 'linear',
            });

        }
    });
}



// handlers
card_egg.addEventListener('click', handleInteraction); // for pc
card_egg.addEventListener('touchstart', handleInteraction); // for phones and tablets