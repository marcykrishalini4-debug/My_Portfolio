// Add your own profile links below before publishing.
const portfolioDetails = {
  github: "https://github.com/YOUR-GITHUB-USERNAME",
  linkedin: "https://www.linkedin.com/in/YOUR-LINKEDIN-PROFILE/"
};

document.getElementById("githubLink").href = portfolioDetails.github;
document.getElementById("linkedinLink").href = portfolioDetails.linkedin;
document.getElementById("year").textContent = new Date().getFullYear();

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
menuToggle.addEventListener("click", () => navLinks.classList.toggle("show"));
navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => navLinks.classList.remove("show"));
});
