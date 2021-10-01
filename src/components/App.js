//Importamos este componente para poder manejar el router
import { Route, Switch } from 'react-router-dom';
// importamos useEffect además de useState
import { useEffect, useState } from 'react';
// Importamos el servicio del local storage
import ls from '../services/local-storage';
// Importamos las hojas de estilo
import '../styles/core/Reset.scss';
import '../styles/core/Variables.scss';
import '../styles/App.scss';

function App() {
  return (
    <div className="App">
      <header className="header">
        <img src="" alt="Rick and Morty" />
      </header>
      <main className="main">
        <form className="form">
          <input className="form__input" type="text" placeholder="Introduce tu búsqueda" />
        </form>
        <ul className="list">
          <li className="list__element">
            <img className="list__element--img" src="" alt="imagen" />
            <div className="list__element--text">
              <p></p>
              <p></p>
            </div>
          </li>
        </ul>
        <section className="detail">
          <img className="detail__img" src="" alt="imagen" />
          <div className="detail__text">
            <p></p>
            <p></p>
          </div>
        </section>
      </main>
      <h1>Hola Mundo</h1>
      {/* <Switch>
        <Route path=''>
          //Contenido del componente correspondiente
        </Route>
        // Opción de ruta por si no encuentra ninguna de las opciones anteriores, sería como poner el error 404 de hot found
        <Route>
          <section>
            Oh! Página equivocada
          </section>
        </Route>
      </Switch> */}
    </div>
  );
}

export default App;
