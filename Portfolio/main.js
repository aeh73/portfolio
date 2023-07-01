// Scrolls to top  of page on load/refresh
window.onload = function() {
    window.scrollTo(0, 0);
}
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

// Initialize observer for home section animations on scroll
let observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1  // represents the percentage of the target visible before the callback is invoked
  };
  
  // Function that will be called whenever the target meets the threshold specified in observerOptions
  function homeObserverCallback(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        document.querySelector('#home .left').classList.add('animate-left');
        document.querySelector('#home .right').classList.add('animate-right');
      } else {
        document.querySelector('#home .left').classList.remove('animate-left');
        document.querySelector('#home .right').classList.remove('animate-right');
      }
    });
  }
  
  // Create the observer with the callback function and options
  let homeObserver = new IntersectionObserver(homeObserverCallback, observerOptions);
  
  // Start observing the home section
  homeObserver.observe(document.querySelector('#home'));

