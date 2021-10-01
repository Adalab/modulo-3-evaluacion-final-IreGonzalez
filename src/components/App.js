// Componentes de React
import { Route, Switch } from 'react-router-dom';
import { useEffect, useState } from 'react';
// Local storage
import ls from '../services/local-storage';
// Hojas de estilo
import '../styles/core/Reset.scss';
import '../styles/core/Variables.scss';
import '../styles/App.scss';
// Componentes
import Filters from './Filters';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';


function App() {
  return (
    <div className="App">
      <header className="header">
        <img src="" alt="Rick and Morty" />
      </header>
      <main className="main">
        <form className="form">
          <Filters />
        </form>
        <CharacterList />
        <CharacterDetail />
      </main>
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
