let scrolled = false;
window.onscroll = function(ev) {
    if (!scrolled)
        document.getElementById("header").classList.add("header--active");
        scrolled = true;
};