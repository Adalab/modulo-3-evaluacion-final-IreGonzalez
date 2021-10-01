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
