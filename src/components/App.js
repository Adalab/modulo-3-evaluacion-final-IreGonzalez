// HOOCKS????
import { Route, Switch } from 'react-router-dom';
import { useEffect, useState } from 'react';
// SERVIVICIOS
import callToApi from '../services/api.js'
import ls from '../services/local-storage';
// HOJAS DE ESTILO
import '../styles/Reset.scss';
import '../styles/Variables.scss';
import '../styles/App.scss';
// IMAGES
import title from '../images/Rick_and_Morty_-_logo_(English).png'
// COMPONENTES
import Filters from './Filters';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';


function App() {
  const [data, setData] = useState([]);
  const [inputName, setInputName] = useState('');

  useEffect(() => {
    callToApi()
      .then(initialData => {
        console.log(initialData);
        setData(initialData)
      });
  }, []);

  const handleInput = (ev) => {
    ev.preventDefault()
    setInputName(ev.currentTarget.value)
  };
  const filteredData = data
    .filter((character) => character.name.toLocaleLowerCase().includes(inputName.toLocaleLowerCase()));

  return (
    <div className="App">
      <header className="header">
        <img className="header__img" src={title} alt="Rick and Morty" />
      </header>
      <main className="main">
        <form className="form">
          <Filters value={inputName} handleInput={handleInput} />
        </form>
        <CharacterList list={filteredData} />
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
