document.addEventListener("DOMContentLoaded", function () {
    function reveal() {
        var reveals = document.querySelectorAll(".reveal");

        reveals.forEach((reveal) => {
            var windowHeigh = window.innerHeight;
            var elementsTop = reveal.getBoundingClientRect().top;
            var elementsVisible = 100;

            if (elementsTop < windowHeigh - elementsVisible) {
                reveal.classList.add("active");
            } else {
                reveal.classList.remove("active");
            }
        });
    }

    window.addEventListener("scroll", reveal);
});