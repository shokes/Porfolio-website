"use-strict";

const btnMenu = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".header");
const hero = document.querySelector(".hero");
const sectionHome = document.querySelector(".section-home");
const logo = document.querySelector(".logo");
const heroText = document.querySelector(".hero-text");
const allSections = document.querySelectorAll(".section");
const btnOpen = document.querySelector(".btn-menu-open");

//const sectionHidden = document.querySelector(".section-hidden");

//  menu functionality
btnMenu.addEventListener("click", function () {
  header.classList.toggle("nav-open");
});

// sliding image functionality in the hero section

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

//revealing sections

const revealSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;

  entry.target.classList.remove("section-hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.12,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section-hidden");
});
