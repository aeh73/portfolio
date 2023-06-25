// Handle smooth scrolling
const anchors = document.querySelectorAll('a[href^="#"]');
anchors.forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        // Close mobile menu after click
        document.querySelector('#nav-list').classList.remove('active');
    });
});

// Handle hamburger menu click
document.querySelector('#hamburger').addEventListener('click', function (e) {
    document.querySelector('#nav-list').classList.toggle('active');
});

// Back to top button
const topButton = document.getElementById("scrollToTop");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
}
topButton.addEventListener('click', function () {
    document.querySelector('#top').scrollIntoView({
        behavior: 'smooth'
    });
});

// Active nav link highlighting
window.addEventListener('scroll', function() {
    let fromTop = window.scrollY;
    anchors.forEach(link => {
        let section = document.querySelector(link.hash);
        if (
            section.offsetTop <= fromTop &&
            section.offsetTop + section.offsetHeight > fromTop
        ) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});

// Theme toggle
const themeToggle = document.querySelector('#themeToggle');
themeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    if (!document.body.classList.contains('dark-mode')) {
        themeToggle.innerText = "Toggle Light Mode";
    } else {
        themeToggle.innerText = "Toggle Dark Mode";
    }
});


