export function createPartidosCards(partidos){
  const cards = [];

  partidos.forEach(partido => {
    const table = document.createElement('table');

    table.innerHTML =  `
      <tr>
        <th colspan="2">Partido</th>
      </tr>

      <tr>
        <td></td>
        <td class="marcador">Marcador</td>
      </tr>

      <tr>
        <td>${partido.equipo_a}</td>
        <td class="td-input"> <input type="number" required name="equipo-a-partido1" id="equipo-a-partido1"> </td>
      </tr>

      <tr>
        <td>${partido.equipo_b}</td>
        <td class="td-input"> <input type="number" required name="equipo-b-partido1" id="equipo-b-partido1"> </td>
      </tr>

      <tr>
        <td class="footer-table">Ganador</td>
        <td class="footer-table" id="ganador">---</td>
      </tr>
    `;

    cards.push(table);
  });

  return cards;
}