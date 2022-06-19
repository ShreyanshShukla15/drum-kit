for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var but = this.innerHTML;
        givesound(but);
        keyanimate(but);
    });
}
document.addEventListener("keydown", function(event) {
    givesound(event.key);
    keyanimate(event.key)
});

function givesound(key) {
    switch (key) {
        case "w":
            var audiow = new Audio("sounds/tom-1.mp3");
            audiow.play();
            break;
        case "a":
            var audioa = new Audio("sounds/tom-2.mp3");
            audioa.play();
            break;
        case "s":
            var audios = new Audio("sounds/tom-3.mp3");
            audios.play();
            break;
        case "d":
            var audiod = new Audio("sounds/tom-4.mp3");
            audiod.play();
            break;
        case "j":
            var audioj = new Audio("sounds/snare.mp3");
            audioj.play();
            break;
        case "k":
            var audiok = new Audio("sounds/crash.mp3");
            audiok.play();
            break;
        case "l":
            var audiol = new Audio("sounds/kick.mp3");
            audiol.play();
            break;
    }
}

function keyanimate(key) {
    document.querySelector("." + key).classList.add("pressed");
    setTimeout(function() {
        document.querySelector("." + key).classList.remove("pressed");
    }, 100);
}