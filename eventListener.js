

document.addEventListener('DOMContentLoaded', function() {
    var nameEvent = document.querySelector('h1');
    nameEvent.innerHTML = "hello, world";
    
    var clicker = document.getElementById("clicker");

    var onButtonClick = function () {
        clicker.textContent = "hi there";

    };
    clicker.addEventListener("click", onButtonClick);

});
