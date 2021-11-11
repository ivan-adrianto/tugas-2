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
