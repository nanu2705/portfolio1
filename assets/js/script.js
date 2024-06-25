// scroll to top functionality
const scrollUp = document.querySelector("#scroll-up");

scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});




const navbar = document.getElementById("navbar");
const navLinks = navbar.getElementsByClassName("typing-text");
const typingSpeed = 100; // Speed in milliseconds per character

function typeText(link) {
  const text = link.textContent;
  link.textContent = "";

  let index = 0;
  const typingInterval = setInterval(() => {
    if (index < text.length) {
      link.textContent += text[index];
      index++;
    } else {
      clearInterval(typingInterval);
    }
  }, typingSpeed);
}

function animateNavLinks() {
  for (let i = 0; i < navLinks.length; i++) {
    typeText(navLinks[i]);
    setTimeout(() => {
      navLinks[i].style.opacity = 1;
      navLinks[i].style.transform = "translateY(0)";
    }, typingSpeed * navLinks[i].textContent.length);
  }
}

animateNavLinks();