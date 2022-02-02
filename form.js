

document.addEventListener('DOMContentLoaded', function(){
    var button = document.getElementById("button");
    console.log(button)
    var onButtonClick = function() {
        var name = document.getElementById("name").value;
        var lang = document.getElementById("lang").value;
        var greeting;
        if (lang === "es") {
            greeting = "Hola, " + name;
        } else if (lang === "plt") {
            greeting = "Ello-hay, " + name;
        } else {
            greeting = "Heyaz, " + name;
        }
        document.getElementById("message").textContent += greeting;


    };

    button.addEventListener("click", onButtonClick);

});