// HOOCKS????
import { Route, Switch } from 'react-router-dom';
import { useEffect, useState } from 'react';
// SERVIVICIOS
import callToApi from '../services/api.js'
import ls from '../services/local-storage';
// HOJAS DE ESTILO
import '../styles/core/Reset.scss';
import '../styles/core/Variables.scss';
import '../styles/App.scss';
// COMPONENTES
import Filters from './Filters';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';


function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    callToApi()
      .then(initialData => {
        console.log(initialData);
        setData(initialData)
      });
  }, [])



  return (
    <div className="App">
      <header className="header">
        <img src="" alt="Rick and Morty" />
      </header>
      <main className="main">
        <form className="form">
          <Filters />
        </form>
        <CharacterList list={data} />
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
