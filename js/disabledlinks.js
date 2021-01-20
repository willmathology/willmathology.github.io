let disabledlinks = document.getElementsByClassName("disabled-link");

for(let i = 0; i < disabledlinks.length; i++) {
    disabledlinks[i].addEventListener("click", function(event) {
        event.preventDefault;
    });
}