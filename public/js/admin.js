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

container_teams.style.display = "none";
container_matches.style.display = "block";
container_positions.style.display = "none";
containerMatches();

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

function createModalForm(action, method, data={}){
  const modal = document.createElement('article');
  modal.classList = 'modal';

  if(Object.keys(data).length == 0){
    modal.innerHTML = `
    <form class="modal-content" action=${action} method=${method}>
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
  }else{
    modal.innerHTML = `
    <form class="modal-content" action=${action} method=${method}>
      <span class="close">&times;</span>

        <label for="fecha">Fecha</label>
        <input type="date" required placeholder="fecha" id="fecha" name="fecha" value="${data.fecha}">

        <label for="equipo_a">Equipo A</label>
        <input type="text" required placeholder="Equipo A" id="equipo_a" name="equipo_a" value="${data.equipo_a}">

        <label for="equipo_b">Equipo B</label>
        <input type="text" required placeholder="Equipo B" id="equipo_b" name="equipo_b" value="${data.equipo_b}">

        <label for="goles_a">Goles de A</label>
        <input type="number" required placeholder="Goles de A" id="goles_a" name="goles_a" value="${data.goles_a}">

        <label for="goles_b">Goles de B</label>
        <input type="number" required placeholder="Goles de B" id="goles_b" name="goles_b" value="${data.goles_b}">

        <label for="puntos_a">Puntos de A</label>
        <input type="number" required placeholder="Puntos de A" id="puntos_a" name="puntos_a" value="${data.puntos_a}">

        <label for="puntos_b">Puntos de B</label>
        <input type="number" required placeholder="Puntos de B" id="puntos_b" name="puntos_b" value="${data.puntos_b}">

        <label for="etapa">Etapa</label>
        <input type="text" required placeholder="Etapa" id="etapa" name="etapa" value="${data.etapa}">
        <button type="submit" class="submitBtn">Agregar Partido</button>
      </form>
    `;
  }

  return modal;
}

function cleanContainer(container){
  if(container.firstChild){
    while(container.firstChild != null){
      container.removeChild(container.firstChild);
    }
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

function createMatchesCards(matches, matches_container){
  cleanContainer(matches_container);
  matches.forEach(match => {
    const table = document.createElement('table');
    table.className = 'card-table-match';
    table.innerHTML = `
      <tr>
        <th class="table-head match-id"></th>
        <th class="table-head">${match.equipo_a}</th>
        <th class="table-head">${match.equipo_b}</th>
      </tr>
      <tr>
        <th class="table-head">Puntos</th>
        <td>${match.puntos_a}</td>
        <td>${match.puntos_b}</td>
      </tr>
      <tr>
        <th class="table-head">Goles</th>
        <td>${match.goles_a}</td>
        <td>${match.goles_b}</td>
      </tr>
      <tr>
        <th class="table-head">Fecha</th>
        <td colspan="2">${match.fecha}</td>
      </tr>
      <tr>
        <th class="table-head">Etapa</th>
        <td colspan="2">${match.etapa}</td>
      </tr>
    `;
    table.id = match.id;

    table.addEventListener('click', async () => {
      const match_id = table.id;
      const result = await fetch(`/admin/partidos/get-partido/${match_id}`);
      const data = await result.json();

      const modalUpdate = createModalForm(`/admin/partidos/update/${match_id}`, 'post', data);
      modalControl(modalUpdate);
      modalUpdate.style.display = 'block';
      matches_container.append(modalUpdate);
    });
    matches_container.append(table);
  });
}

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

position_btn.addEventListener('click', () => {
  container_matches.style.display = 'none';
  container_positions.style.display = 'block';
  container_teams.style.display = 'none';
});
