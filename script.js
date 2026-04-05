const cta1 = document.querySelector('.cta-1');
const cta2 = document.querySelector('.cta-2');
const h1 = document.querySelector('.content h1');
const h3 = document.querySelector('.content h3');
const span = document.querySelector('.content h1 span');
const video = document.querySelector('.hero-video');
const video2 = document.querySelector('.hero-video-2');
const heroImg = document.querySelector('.hero-img');

heroImg.addEventListener('animationend', () => {
  heroImg.style.animation = 'none';
  heroImg.style.opacity = '1';
});

function colorIn() {
  h1.style.color = 'white';
  h3.style.color = 'white';
  span.style.color = 'white';
  heroImg.style.opacity = '0';
}

function colorOut() {
  h1.style.color = '';
  h3.style.color = '';
  span.style.color = '';
  heroImg.style.opacity = '1';
}

cta1.addEventListener('mouseenter', () => {
  colorIn();
  video.play();
  video.style.opacity = '1';
});
cta1.addEventListener('mouseleave', () => {
  colorOut();
  video.load();
  video.style.opacity = '0';
  setTimeout(() => video1.load(), 800); 
});

cta2.addEventListener('mouseenter', () => {
  colorIn();
  video2.play();
  video2.style.opacity = '1';
});
cta2.addEventListener('mouseleave', () => {
  colorOut();
  video2.load();
  video2.style.opacity = '0';
  setTimeout(() => video2.load(), 800); 
});