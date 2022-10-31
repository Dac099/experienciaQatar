const table = document.getElementById('table-ranking');

async function getUsers(){
  const res = await fetch('/getUsersRanking');
  const data = res.json();

  data.forEach(user => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${user.nickname}</td>
      <td>${user.puntos_totales}</td>
      <td>${user.puntos_de_grupos}</td>
      <td>${user.puntos_de_octavos}</td>
      <td>${user.puntos_de_cuartos}</td>
      <td>${user.puntos_de_semi}</td>
      <td>${user.puntos_de_final}</td>
    `;

    table.append(tr);
  });
}

getUsers();