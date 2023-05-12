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
          if (id !== "profile") {
            header.style.backgroundColor = "#1f242d";
          } else {
            header.style.backgroundColor = "transparent";
          }
        };
      });
    };
  }
  
  window.onload = () => {
    init();
  };