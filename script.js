const homeButton = document.getElementById("home");
const portfolioButton = document.getElementById("portfolio");

const pathname = window.location.pathname;

if (pathname === "/" || pathname === "/index.html") {
  homeButton.className = "nav-item active";
  portfolioButton.className = "nav-item";
} else {
  homeButton.className = "nav-item";
  portfolioButton.className = "nav-item active";
}

function scrollTrigger(selector) {
  let els = document.querySelectorAll(selector);
  els = Array.from(els);
  els.forEach((el) => {
    addObserver(el);
  });
}
function addObserver(el) {
  let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target);
      }
    });
  });
  observer.observe(el);
}
scrollTrigger("#expertise");
scrollTrigger("#working-exp");
scrollTrigger("#education")
scrollTrigger("#portfolio-home")
