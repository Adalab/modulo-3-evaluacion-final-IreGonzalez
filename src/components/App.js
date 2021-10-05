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
import Alternative from './Alternative.js';


function App() {
  const [data, setData] = useState([]);
  const [inputName, setInputName] = useState('');
  const [selectGender, setSelectGender] = useState('all');
  const [selectSpecies, setSelectSpecies] = useState('all');
  const [selectOrigin, setSelectOrigin] = useState('all');
  const [selectStatus, setSelectStatus] = useState('all');

  useEffect(() => {
    callToApi()
      .then(initialData => {
        setData(initialData);
      });
  }, []);


  // ROUTE TO CHARACTER DETAIL
  const routeData = useRouteMatch("/character/:id");
  const characterId = (routeData !== null ? routeData.params.id : '');
  const characterDetail = data
    .find((character) => character.id === parseInt(characterId));

  // FILTERS
  const filteredData = data
    .filter((character) => character.name.toLocaleLowerCase().includes(inputName.toLocaleLowerCase()))
    .filter((character) =>
      selectGender === 'all' || selectGender === character.gender)
    .filter((character) =>
      selectSpecies === 'all' || selectSpecies === character.species)
    .filter((character) =>
      selectOrigin === 'all' || selectOrigin === character.origin)
    .filter((character) =>
      selectStatus === 'all' || selectStatus === character.status)

  return (
    <div className="App">
      <header className="header">
        <img className="header__img" src={title} alt="Rick and Morty" />
      </header>
      <main className="main">
        <Switch>
          <Route exact path="/">
            <Filters
              data={data}
              inputName={inputName}
              setInputName={setInputName}
              selectGender={selectGender}
              setSelectGender={setSelectGender}
              selectSpecies={selectSpecies}
              setSelectSpecies={setSelectSpecies}
              selectOrigin={selectOrigin}
              setSelectOrigin={setSelectOrigin}
              selectStatus={selectStatus}
              setSelectStatus={setSelectStatus}
            />
            <CharacterList list={filteredData} />
          </Route>
          <Route path="/character/:id">
            <CharacterDetail characterData={characterDetail} />
          </Route>
          <Route>
            <Alternative />
          </Route>
        </Switch>
      </main>
      <footer className="footer">
        <h6>&copy;2021</h6>
        <h6>By IreGonzalez To Adalab</h6>
      </footer>
    </div >
  );
}

export default App;
