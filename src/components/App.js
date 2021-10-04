// HOOKS
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { useEffect, useState } from 'react';
// SERVIVICES
import callToApi from '../services/api.js'
// STYLESHEET
import '../styles/Reset.scss';
import '../styles/Variables.scss';
import '../styles/App.scss';
// IMAGES
import title from '../images/Rick_and_Morty_-_logo_(English).png'
// COMPONENTS
import Filters from './Filters';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';


function App() {
  const [data, setData] = useState([]);
  const [inputName, setInputName] = useState('');
  const [select, setSelect] = useState('all');

  useEffect(() => {
    callToApi()
      .then(initialData => {
        setData(initialData);
      });
  }, []);

  const handleInput = (ev) => {
    ev.preventDefault()
    setInputName(ev.currentTarget.value)
  };
  const handleSelect = (ev) => {
    ev.preventDefault()
    setSelect(ev.currentTarget.value)
  }

  const routeData = useRouteMatch("/character/:id");
  const characterId = (routeData !== null ? routeData.params.id : '');
  console.log(characterId);
  const characterDetail = data.find((character) => character.id === parseInt(characterId));

  const filteredData = data
    .filter((character) => character.name.toLocaleLowerCase().includes(inputName.toLocaleLowerCase()))
    .filter((character) =>
      select === 'all' ||
      select === character.species ||
      select === character.gender ||
      select === character.status);


  return (
    <div className="App">
      <header className="header">
        <img className="header__img" src={title} alt="Rick and Morty" />
      </header>
      <main className="main">
        <Switch>
          <Route exact path="/">
            <form className="form">
              <Filters
                inputName={inputName}
                handleInput={handleInput}
                select={select}
                handleSelect={handleSelect}
                filteredData={filteredData}
              />
            </form>
            <CharacterList list={filteredData} />
          </Route>
          <Route path="/character/:id">
            <CharacterDetail characterData={characterDetail} />
          </Route>
          <Route>
            <section>
              Aquí no hay nada!
            </section>
          </Route>
        </Switch>
      </main>
    </div >
  );
}

export default App;
