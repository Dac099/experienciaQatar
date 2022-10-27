import { createTeamCard, createModalForm, modalControl, cleanContainer, createMatchesCards, getPositionValues } from './admin-functions.js';

const match_btn = document.getElementById('new-match');
const position_btn = document.getElementById('show-positions');
const teams_btn = document.getElementById('show-teams');
const container_teams = document.querySelector('.container-main--teams-content');
const container_matches = document.querySelector('.container-main--matches-content');
const container_positions = document.querySelector('.container-main--positions-content');


//Elementos del contenedor de equipos
const add_new_match = document.querySelector('.newMatch');
const groupContainer = document.querySelector('.groupContainer');

const teams_url = '/admin/equipos';
const matches_url = '/admin/partidos';

//Startup page
container_teams.style.display = "none";
container_matches.style.display = "none";
container_positions.style.display = "grid";
// containerMatches();

teams_btn.addEventListener('click', async () => {
  container_matches.style.display = 'none';
  container_positions.style.display = 'none';
  container_teams.style.display = 'grid';
  
  const response = await fetch(teams_url);
  const data = await response.json();

  data.forEach(team => {
    const card = createTeamCard(team);
    container_teams.append(card);
  });
});

match_btn.addEventListener('click', async () => {
  container_matches.style.display = 'block';
  container_positions.style.display = 'none';
  container_teams.style.display = 'none';

  containerMatches();
})

add_new_match.addEventListener('click', () => {
  const form = createModalForm('/admin/new-match', 'post');
  modalControl(form);
  container_matches.append(form);
  form.style.display = "block";
});

position_btn.addEventListener('click', async () => {
  container_matches.style.display = 'none';
  container_positions.style.display = 'block';
  container_teams.style.display = 'none';

  //Funcion para hacer fetch y llenar los inputs
  getPositionValues();
});

function containerMatches(){
  const matches_container = document.querySelector('.match-cards--container');
  cleanContainer(matches_container);

  const grupos = document.getElementById('grupos');
  const octavos = document.getElementById('octavos');  
  const cuartos = document.getElementById('cuartos');  
  const semi = document.getElementById('semi');  
  const final = document.getElementById('final');  
    
  grupos.addEventListener('click', async () => {
    grupos.className = 'option-selected';
    octavos.classList.remove('option-selected');
    cuartos.classList.remove('option-selected');
    semi.classList.remove('option-selected');
    final.classList.remove('option-selected');

    const url = `${matches_url}/grupos`;
    const result = await fetch(url);
    const data = await result.json();

    createMatchesCards(data, matches_container);
  });

  octavos.addEventListener('click', async () => {
    octavos.className = 'option-selected';
    grupos.classList.remove('option-selected');
    cuartos.classList.remove('option-selected');
    semi.classList.remove('option-selected');
    final.classList.remove('option-selected');

    const url = `${matches_url}/octavos`;
    const result = await fetch(url);
    const data = await result.json();

    createMatchesCards(data, matches_container);  
  });

  cuartos.addEventListener('click', async () => {
    cuartos.className = 'option-selected';
    octavos.classList.remove('option-selected');
    grupos.classList.remove('option-selected');
    semi.classList.remove('option-selected');
    final.classList.remove('option-selected');

    const url = `${matches_url}/cuartos`;
    const result = await fetch(url);
    const data = await result.json();

    createMatchesCards(data, matches_container);
  });

  semi.addEventListener('click', async () => {
    semi.className = 'option-selected';
    octavos.classList.remove('option-selected');
    cuartos.classList.remove('option-selected');
    grupos.classList.remove('option-selected');
    final.classList.remove('option-selected');

    const url = `${matches_url}/semi`;
    const result = await fetch(url);
    const data = await result.json();

    createMatchesCards(data, matches_container);
  });

  final.addEventListener('click', async () => {
    final.className = 'option-selected';
    octavos.classList.remove('option-selected');
    cuartos.classList.remove('option-selected');
    semi.classList.remove('option-selected');
    grupos.classList.remove('option-selected');

    const url = `${matches_url}/final`;
    const result = await fetch(url);
    const data = await result.json();
    
    createMatchesCards(data, matches_container);
  });

  groupContainer.append(matches_container);
  container_matches.append(groupContainer);
}
