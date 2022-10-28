export function createTeamCard(team){
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

export function createModalForm(action, method, data={}){
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
        <input type="text" required placeholder="Etapa" id="etapa" name="etapa" list="etapas">
        <datalist id="etapas">
          <option value="Grupos">
          <option value="Octavos">
          <option value="Cuartos">
          <option value="Semifinal">
          <option value="Final">
        </datalist>
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
        <input type="text" required placeholder="Etapa" id="etapa" name="etapa" value="${data.etapa}" list="etapas">
        <datalist id="etapas">
          <option value="Grupos">
          <option value="Octavos">
          <option value="Cuartos">
          <option value="Semifinal">
          <option value="Final">
        </datalist>
        <button type="submit" class="submitBtn">Agregar Partido</button>
      </form>
    `;
  }

  return modal;
}

export function modalControl(modal){
  const close = modal.querySelector('.close');
  const submitBtn = modal.querySelector('.submitBtn');

  close.addEventListener('click', () => {
    modal.style.display = "none";
  });

  submitBtn.addEventListener('click', (e) => {
    modal.style.display = "none";
  });
}

export function cleanContainer(container){
  if(container.firstChild){
    while(container.firstChild != null){
      container.removeChild(container.firstChild);
    }
  }
}

export function createMatchesCards(matches, matches_container){
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

export async function getPositionValues(){
  const inputs = document.getElementsByTagName('input');
  const res = await fetch('/admin/get-positions');
  const values = await res.json();

  const inputs_array = Array.from(inputs);

  inputs_array.forEach(element => {
    element.value = values[element.id];
  });
}