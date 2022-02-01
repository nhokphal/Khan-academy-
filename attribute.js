
document.addEventListener('DOMContentLoaded', function(){
    nameStyle  = document.querySelector("#heading");
    nameStyle.style.color = "red";
    nameStyle.style.backgroundColor = "green"; // background-color is not working in javascript
    nameStyle.style.textAlign = "center";
   

    var nameEls = document.querySelectorAll("p .animal");
    for (var i = 0; i < nameEls.length; i++) {
        // <strong>
        var strongEl = document.createElement("strong");
        //strongEl.textContent = "cat";
        // 'cat'
        var strongText = document.createTextNode("cat");
        // <strong>cat</strong>
        strongEl.appendChild(strongText);
        nameEls[i].innerHTML = "";
        nameEls[i].appendChild(strongEl);
        nameEls[i].className += " catcolors";
    }
    // new create elements 

    var catEL = document.createElement("img");
    catEL.src = "https://www.kasandbox.org/programming-images/animals/dogs_collies.png"; // we already declare but we havent call it yet
    catEL.alt = "photo of cute cate";

    // declare create element 
    document.body.appendChild(catEL); // passing elements to last child of DOM


});