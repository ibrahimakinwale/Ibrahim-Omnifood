document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector(".nav-bar");
  const header = document.querySelector("header");
  const navbarHeight = navbar.getBoundingClientRect().height;
  const stickyObserver = new IntersectionObserver(
    function (entries) {
      const [entry] = entries;
      if (!entry.isIntersecting) {
        navbar.classList.add("sticky");
        header.style.marginBottom = navbarHeight + "px";
      } else {
        navbar.classList.remove("sticky");
        header.style.marginBottom = "0";
      }
    },
    {
      threshold: 0,
      rootMargin: "0px",
    },
  );

  stickyObserver.observe(header);
  window.addEventListener("scroll", function () {
    if (window.scrollY === 0) {
      navbar.classList.remove("sticky");
      header.style.marginBottom = "0";
    }
  });

  const navLinks = document.querySelectorAll(".menu a");
  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      navLinks.forEach((l) => l.classList.remove("active"));
      this.classList.add("active");
    });
  });

  const hamburger = document.getElementById("hamburger");
  const hamburgerIcon = document.getElementById("hamburger-icon");
  const menu = document.querySelector(".menu");

  hamburger.addEventListener("click", function () {
    menu.classList.toggle("open");

    if (menu.classList.contains("open")) {
      hamburgerIcon.setAttribute("name", "close-outline");
    } else {
      hamburgerIcon.setAttribute("name", "menu-outline");
    }
  });

  document.querySelectorAll(".menu a").forEach(function (link) {
    link.addEventListener("click", function () {
      menu.classList.remove("open");
      hamburgerIcon.setAttribute("name", "menu-outline");
    });
  });
});
