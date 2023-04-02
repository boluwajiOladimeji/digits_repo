'use strict';
console.log('bolu');
const openSidebarBtn = document.querySelector('.open-sidebar');
const closeSidebarBtn = document.querySelector('.close-sidebar');
const sidebar = document.querySelector('.sidebar');
const nav = document.querySelector('.nav');
const topLink = document.querySelector('.top-link');

openSidebarBtn.addEventListener('click', () => {
  sidebar.classList.add('show');
});

closeSidebarBtn.addEventListener('click', () => {
  sidebar.classList.remove('show');
});

// date
document.querySelector('.date').textContent = new Date().getFullYear();

// sticky
window.addEventListener('scroll', (e) => {
  const navHeight = nav.getBoundingClientRect().height;
  const scrollHeight = window.pageYOffset;
  //   console.log(navHeight, scrollHeight);
  if (scrollHeight > navHeight) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }

  if (scrollHeight > 500) {
    topLink.classList.add('show-link');
  } else {
    topLink.classList.remove('show-link');
  }
});

// smoothscroll
const navLinks = document.querySelector('.nav-links');
console.log(navLinks);

function scrollToView(id) {
  if (id.length <= 1) return;
  const element = document.querySelector(id);
  const fixedNav = nav.classList.contains('sticky');
  const navHeight = nav.getBoundingClientRect().height;
  let position = element.offsetTop - navHeight;
  if (!fixedNav) {
    position = position - navHeight;
  }
  if (sidebar.classList.contains('show')) sidebar.classList.remove('show');
  window.scrollTo({
    left: 0,
    top: position,
    behavior: 'smooth',
  });
}

navLinks.addEventListener('click', (e) => {
  e.preventDefault();
  const id = e.target.getAttribute('href');
  scrollToView(id);
});

const sideLinks = document.querySelector('.side-links');
sideLinks.addEventListener('click', (e) => {
  e.preventDefault();
  const id = e.target.getAttribute('href');
  scrollToView(id);
});

topLink.addEventListener('click', (e) => {
  e.preventDefault();
  const id = e.currentTarget.getAttribute('href');
  scrollToView(id);
});

// Contact Us Modal
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');

const addModal = () => {
  overlay.classList.remove('hidden');
  modal.classList.remove('hidden');
};

const removeModal = () => {
  overlay.classList.add('hidden');
  modal.classList.add('hidden');
};

document.querySelectorAll('.contact-us').forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    addModal();
  });
});

document.querySelector('.close-modal').addEventListener('click', removeModal);

window.addEventListener('keydown', (e) => {
  if (modal.classList.contains('hidden')) return;
  if (e.key === 'Escape') {
    removeModal();
  }
});
