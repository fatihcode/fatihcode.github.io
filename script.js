const badge = document.querySelectorAll(".badge")


badge.forEach(element => {

    element.onclick = () => {

        for (let i = 0; i < badge.length; i++) {

            if (badge[i].innerHTML == element.innerHTML) {

                badge[i].classList.toggle("badgefocus")

            }
        }
    }
});