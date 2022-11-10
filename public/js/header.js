const dropdown = document.querySelector('.dropdown-content');
const closeSesion = document.querySelector('.user-nickname');

closeSesion.addEventListener('click', () => {
  dropdown.classList.toggle('show');
});

window.addEventListener('click', (e) => {
  if(!(e.target == closeSesion)){
    if(dropdown.classList.contains('show')){
      dropdown.classList.remove('show');
    }
  }
});