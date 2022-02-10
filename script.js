"use-strict";

const btnMenu = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".header");
const hero = document.querySelector(".hero");
const sectionHome = document.querySelector(".section-home");
const logo = document.querySelector(".logo");

btnMenu.addEventListener("click", function () {
  header.classList.toggle("nav-open");
  logo.style.color = "black";
});

const navHeight = sectionHome.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;
  // console.log(entry);

  if (!entry.isIntersecting) {
    hero.classList.add("show-hero-image");
  }
};

const sectionHomeObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

sectionHomeObserver.observe(sectionHome);
