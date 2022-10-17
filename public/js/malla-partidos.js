const modal = document.querySelector('.modal-posicion--window');
const teams = document.getElementsByClassName('partido-row');
const arrTeams = Array.from(teams);
const close = document.querySelector('.close');

function modalControl(){
  arrTeams.forEach(team => {
    team.addEventListener('click', () => {
      modal.style.display = 'block';
    })
  });

  window.addEventListener('click', (e) => {
    if(e.target == modal){
      modal.style.display = 'none';
    }
  });

  close.addEventListener('click', () => {
    modal.style.display = 'none';
  });
}

modalControl();