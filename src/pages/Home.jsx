import React from "react";
import pr from "../img/icons-h/np.svg"




const Home =()=>{
    return (
      <div className="home__conten">
        <div className="home__info_nav">
         <h2>Chaidising web</h2>
        <div className="home__input">
          <input type="search" id="search" placeholder="Buscar proyecto" />
        </div>
        </div>

        <div className="home__body__container">
          <table>
            <tr>
              <th>Tipo de archivo</th>
              <th>Nombre</th>
              <th>Fecha de modificación </th>
              <th>Tamaño</th>
              <th>Propietario</th>
              <th>Compartir</th>
            </tr>

            <tr>

              <td>
                <img src={pr} alt="" /> <span>casa.chd</span>
              </td>
              <td>
                Rafael
              </td>
              <td>
                25/05/2023
              </td>
              <td>
                100mb
              </td>
              <td>
                Boulevar
              </td>
              <td>no</td>
            </tr>

            <tr>

<td>
  <img src={pr} alt="" /> <span>casa.chd</span>
</td>
<td>
  Rafael
</td>
<td>
  25/05/2023
</td>
<td>
  100mb
</td>
<td>
  Boulevar
</td>
<td>no</td>
</tr>

<tr>

<td>
  <img src={pr} alt="" /> <span>casa.chd</span>
</td>
<td>
  Rafael
</td>
<td>
  25/05/2023
</td>
<td>
  100mb
</td>
<td>
  Boulevar
</td>
<td>no</td>
</tr>


<tr>

<td>
  <img src={pr} alt="" /> <span>casa.chd</span>
</td>
<td>
  Rafael
</td>
<td>
  25/05/2023
</td>
<td>
  100mb
</td>
<td>
  Boulevar
</td>
<td>no</td>
</tr>


            
          </table>
        </div>
      </div>
    );
}
export default Home;