function init() {
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('nav a');
    let header = document.querySelector('header');

    window.onscroll = () => {
      sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
  
        if (top >= offset && top < offset + height) {
          navLinks.forEach(links => {
            links.classList.remove('active');
            document.querySelector('nav a[href*=' + id + ']').classList.add('active');
          });
          if (top > 1) {
            header.style.backgroundColor = "#141d26";
          } else {
            header.style.backgroundColor = "transparent";
          }
        };
      });
    };

let el = document.getElementById('tilt')

const height = el.clientHeight
const width = el.clientWidth

el.addEventListener('mousemove', handleMove)

function handleMove(e) {
  const xVal = e.layerX
  const yVal = e.layerY
  const yRotation = 20 * ((xVal - width / 2) / width)
  const xRotation = -20 * ((yVal - height / 2) / height)
  const string = 'perspective(500px) scale(1.1) rotateX(' + xRotation + 'deg) rotateY(' + yRotation + 'deg)'
  
  el.style.transform = string
}

el.addEventListener('mouseout', function() {
  el.style.transform = 'perspective(500px) scale(1) rotateX(0) rotateY(0)'
})

el.addEventListener('mousedown', function() {
  el.style.transform = 'perspective(500px) scale(0.9) rotateX(0) rotateY(0)'
})

el.addEventListener('mouseup', function() {
  el.style.transform = 'perspective(500px) scale(1.1) rotateX(0) rotateY(0)'
})

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console. log(entry)
    if (entry.isIntersecting) {
        entry.target.classList.add('show');
        var button1 = document.getElementById('button-1');
        button1.click();
    } else{
        entry.target.classList.remove('show');
    }
  });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

const obs = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console. log(entry)
    if (entry.isIntersecting) {
        entry.target.classList.add('show');
    } else{
        entry.target.classList.remove('show');
    }
  });
});

const fadeElements = document.querySelectorAll('.fade');
fadeElements.forEach((el) => obs.observe(el));
}
  
window.addEventListener('DOMContentLoaded', () => {
  init();
});