const match_btn = document.getElementById('new-match');
const position_btn = document.getElementById('show-positions');
const teams_btn = document.getElementById('show-teams');
const container = document.querySelector('.container-main--admin-content');

const teams_url = '/admin/equipos';
const matches_url = '/admin/partidos';

function createTeamCard(team){
  const cardTeam = document.createElement('table');
  cardTeam.className = 'card-team';
  cardTeam.innerHTML = `
  <tr>
    <th class="team-name" colspan="2">${team.nombre}</th>
  </tr>
  <tr>
    <td>Puntos</td>
    <td>${team.puntos}</td>
  </tr>
  <tr>
    <td>Goles Totales</td>
    <td>${team.goles_totales}</td>
  </tr>
  <tr>
    <td>Goles en contra</td>
    <td>${team.goles_contra}</td>
  </tr>
  <tr>
    <td>Partidos jugados</td>
    <td>${team.partidos_jugados}</td>
  </tr>
  <tr>
    <td>Partidos ganados</td>
    <td>${team.partidos_ganados}</td>
  </tr>
  `;
  return cardTeam;
}

function createModalForm(){
  const modal = document.createElement('article');
  modal.classList = 'modal';
  modal.innerHTML = `
  <form class="modal-content" action="/admin/new-match" method="post">
    <span class="close">&times;</span>
      <input type="date" required placeholder="fecha" id="fecha" name="fecha">
      <input type="text" required placeholder="Equipo A" id="equipo_a" name="equipo_a">
      <input type="text" required placeholder="Equipo B" id="equipo_b" name="equipo_b">
      <input type="number" required placeholder="Goles de A" id="goles_a" name="goles_a">
      <input type="number" required placeholder="Goles de B" id="goles_b" name="goles_b">
      <input type="number" required placeholder="Puntos de A" id="puntos_a" name="puntos_a">
      <input type="number" required placeholder="Puntos de B" id="puntos_b" name="puntos_b">
      <input type="text" required placeholder="Etapa" id="etapa" name="etapa">
      <button type="submit" class="submitBtn">Agregar Partido</button>
    </form>
  `;

  return modal;
}

function cleanContainer(container){
  while(container.firstChild != null){
    container.removeChild(container.firstChild);
  }
}

function modalControl(modal){
  const close = modal.querySelector('.close');
  const submitBtn = modal.querySelector('.submitBtn');

  close.addEventListener('click', () => {
    modal.style.display = "none";
  });

  submitBtn.addEventListener('click', (e) => {
    modal.style.display = "none";
  });
}

async function containerMatches(){
  const matches_options = document.createElement('nav');
  const matches_container = document.createElement('article');

  matches_container.className = 'match-cards--container';
  matches_options.className = 'matches-type';

  matches_options.innerHTML = `
    <p id="grupos">Grupos</p>
    <p id="octavos">Octavos</p>
    <p id="cuartos">Cuartos</p>
    <p id="semi">Semifinal</p>
    <p id="final">Final</p>
  `;

  const grupos = matches_options.getElementById('grupos');
  const octavos = matches_options.getElementById('octavos');  
  const cuartos = matches_options.getElementById('cuartos');  
  const semi = matches_options.getElementById('semi');  
  const final = matches_options.getElementById('final');  

  grupos.addEventListener('click', async () => {
    const url = `${matches_url}/grupos`;
    const result = await fetch(url);
    const data = result.json();

    

  });

  octavos.addEventListener('click', async () => {
    const url = `${matches_url}/octavos`;
    
  });

  cuartos.addEventListener('click', async () => {
    const url = `${matches_url}/cuartos`;
    
  });

  semi.addEventListener('click', async () => {
    const url = `${matches_url}/semi`;
    
  });

  final.addEventListener('click', async () => {
    const url = `${matches_url}/final`;
    
  });
}

teams_btn.addEventListener('click', async () => {
  cleanContainer(container);
  const response = await fetch(teams_url);
  const data = await response.json();

  data.forEach(team => {
    const card = createTeamCard(team);
    container.append(card);
  });
});

match_btn.addEventListener('click', async () => {
  cleanContainer(container);
  const form = createModalForm();
  modalControl(form);
  container.append(form);
  form.style.display = "block";
})
