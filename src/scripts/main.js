let scrolled = false;
window.onscroll = function(ev) {
    if (document.body.scrollTop === 0)
        document.getElementById("header").classList.remove("header--active");
    else
        document.getElementById("header").classList.add("header--active");
};

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});