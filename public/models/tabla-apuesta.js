
export class Apuesta{
  static id = 1;

  constructor(data, correoUser){
    this.id = Apuesta.id++;
    this.ganador = '---';
    this.fecha = data.fecha;
    this.etapa = data.etapa;
    this.equipo_a = data.equipo_a;
    this.equipo_b = data.equipo_b; 
    this.goles_a = data.goles_a || 0;
    this.goles_b = data.goles_b || 0;
    this.correoUser = correoUser;
  }

  createTable(){

    this.createApuesta();
    
    const table = document.createElement('table');
    
    table.id = this.id;

    table.innerHTML =  `
      <tr>
        <th colspan="2">Partido</th>
      </tr>

      <tr>
        <td></td>
        <td class="marcador">Marcador</td>
      </tr>

      <tr>
        <td>${this.equipo_a}</td>
        <td class="td-input"> <input type="number" required name="equipo-a-partido" id="equipo-a-partido"> </td>
      </tr>

      <tr>
        <td>${this.equipo_b}</td>
        <td class="td-input"> <input type="number" required name="equipo-b-partido" id="equipo-b-partido"> </td>
      </tr>

      <tr>
        <td class="footer-table">Ganador</td>
        <td class="footer-table" id="ganador">${this.ganador}</td>
      </tr>
    `;

    const inputs = table.getElementsByTagName('input');
    const fieldGanador = table.getElementsByClassName('footer-table');
    const ganador = fieldGanador.item(1);
    const goles_a = inputs.item(0);
    const goles_b = inputs.item(1);

    goles_a.addEventListener('change', () => {
      console.log(this);
      this.actualizarDatos({goles_a: goles_a.value, goles_b: this.goles_b});
      ganador.innerHTML = this.ganador;
      this.saveApuesta();
    });

    goles_b.addEventListener('change', async () => {
      console.log(this);
      this.actualizarDatos({goles_b: goles_b.value, goles_a: this.goles_a});
      ganador.innerHTML = this.ganador;
      this.saveApuesta();
    });


    return table;
  }

  actualizarDatos({goles_a, goles_b}){
    this.goles_a = goles_a;
    this.goles_b = goles_b;
    this.ganador = (this.goles_a > this.goles_b) ? this.equipo_a : this.equipo_b;
  }

  async createApuesta(){
    const req = await fetch('/user/save-apuesta',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        fecha: this.fecha,
        equipo_a: this.equipo_a,
        equipo_b: this.equipo_b,
        goles_a: this.goles_a,
        goles_b: this.goles_b,
        etapa: this.etapa,
        correo_user: this.correoUser
      })
    });
    const data = await req.json();
  }

  async saveApuesta(){
    const req = await fetch('/updateApuesta',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        fecha: this.fecha,
        equipo_a: this.equipo_a,
        equipo_b: this.equipo_b,
        goles_a: this.goles_a,
        goles_b: this.goles_b,
        etapa: this.etapa,
        correo_user: this.correoUser
      })
    });
    const data = await req.json();
  }
}