window.onunload = function () {
    window.scrollTo(0,0);
};

const filmsDropdown = document.querySelector('.films-dropdown');
const filmButton = document.querySelector('.film-button');
const dropdownContent = document.querySelector('.dropdown-content');

filmsDropdown.addEventListener('mouseenter', () => {
    if (!filmsDropdown.classList.contains('film-button')) {
      dropdownContent.classList.add('show-links');
    }
  });

filmsDropdown.addEventListener('mouseleave', () => {
    if (!filmsDropdown.classList.contains('film-button')) {
      dropdownContent.classList.remove('show-links');
    }
  });

filmButton.addEventListener('click', function () {
    /* if (dropdownContent.classList.contains('show-links')) {
        dropdownContent.classList.remove('show-links');
    } else {
        dropdownContent.classList.add('show-links');
    } */
    filmButton.classList.toggle('film-button-act');
    dropdownContent.classList.toggle("show-links-2");
});

const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');
  
hamburger.addEventListener('click', function () {
      /* if (navLinks.classList.contains('show-links-b')) {
          navLinks.classList.remove('show-link-b');
      } else {
          navLinks.classList.add('show-links-b');
      } */
      
      document.body.classList.toggle('active');
      nav.classList.toggle('active');
      
      document.onclick = function(e){
        if(e.target.id !== 'hamburger' && e.target.id !== 'nav' && e.target.id != 'film-button-id' && e.target.id != 'dc-link')
        {
          document.body.classList.remove('active');
          dropdownContent.classList.remove('show-links-2');
          filmButton.classList.remove('film-button-act')
          nav.classList.remove('active')
        }
      }
  });

/* Overlay with Hamburger/Nav toggle & remove upon clicked elements, 
   media query function list option below */

document.getElementById('hamburger').addEventListener("click", function() {
    document.querySelector('.nav-overlay').style.display = "block";
  });

document.getElementById('nav-overlay').addEventListener("click", function() {
    document.querySelector('.nav-overlay').style.display = "none";
  });

document.getElementById('hamburger-2').addEventListener("click", function() {
    document.querySelector('.nav-overlay').style.display = "none";
  });

document.getElementById('dc-link-1').addEventListener("click", function() {
    document.querySelector('.nav-overlay').style.display = "none";
  });
  
document.getElementById('dc-link-2').addEventListener("click", function() {
    document.querySelector('.nav-overlay').style.display = "none";
  });
  
document.getElementById('ab-link').addEventListener("click", function() {
    document.querySelector('.nav-overlay').style.display = "none";
  });
  
document.getElementById('ct-link').addEventListener("click", function() {
    document.querySelector('.nav-overlay').style.display = "none";
  });
  
document.getElementById('logo').addEventListener("click", function() {
    document.querySelector('.nav-overlay').style.display = "none";
  });
  
document.getElementById('footer-logo').addEventListener("click", function() {
    document.querySelector('.nav-overlay').style.display = "none";
  });
  
document.getElementById('ig-logo').addEventListener("click", function() {
    document.querySelector('.nav-overlay').style.display = "none";
  });
  
document.getElementById('imdb-logo').addEventListener("click", function() {
    document.querySelector('.nav-overlay').style.display = "none";
  });
  
document.getElementById('copyright').addEventListener("click", function() {
    document.querySelector('.nav-overlay').style.display = "none";
  });
  
