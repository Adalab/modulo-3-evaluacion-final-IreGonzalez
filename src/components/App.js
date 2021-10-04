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

  const handleInput = (ev) => {
    ev.preventDefault()
    setInputName(ev.currentTarget.value)
  };

  const handleSelectGender = (ev) => {
    setSelectGender(ev.currentTarget.value)
  }
  const handleSelectSpecies = (ev) => {
    setSelectSpecies(ev.currentTarget.value)
  }
  const handleSelectOrigin = (ev) => {
    setSelectOrigin(ev.currentTarget.value)
  }
  const handleSelectStatus = (ev) => {
    setSelectStatus(ev.currentTarget.value)
  }

  // LIST TO OPTIONS
  const genderList = data.map((c) => c.gender);
  const genderUniqueList = genderList
    .filter((g, i) => genderList.indexOf(g) === i);

  const speciesList = data.map((c) => c.species);
  const speciesUniqueList = speciesList
    .filter((s, i) => speciesList.indexOf(s) === i);

  const originList = data.map((c) => c.origin);
  const originUniqueList = originList
    .filter((o, i) => originList.indexOf(o) === i);

  const statusList = data.map((c) => c.status);
  const statusUniqueList = statusList
    .filter((st, i) => statusList.indexOf(st) === i);

  // ROUTE TO CHARACTER DETAIL
  const routeData = useRouteMatch("/character/:id");
  const characterId = (routeData !== null ? routeData.params.id : '');
  const characterDetail = data
    .find((character) => character.id === parseInt(characterId));

  // FILTERS
  const filteredData = data
    .filter((character) => character.name.toLocaleLowerCase().includes(inputName.toLocaleLowerCase()))
    .filter((character) =>
      selectGender === 'all' ||
      selectGender === character.gender ||
      selectSpecies === character.species ||
      selectOrigin === character.status ||
      selectStatus === character.origin);

  return (
    <div className="App">
      <header className="header">
        <img className="header__img" src={title} alt="Rick and Morty" />
      </header>
      <main className="main">
        <Switch>
          <Route exact path="/">
            <Filters
              inputName={inputName}
              handleInput={handleInput}
              filteredData={filteredData}
              genderUniqueList={genderUniqueList}
              selectGender={selectGender}
              handleSelectGender={handleSelectGender}
              speciesUniqueList={speciesUniqueList}
              selectSpecies={selectSpecies}
              handleSelectSpecies={handleSelectSpecies}
              originUniqueList={originUniqueList}
              selectOrigin={selectOrigin}
              handleSelectOrigin={handleSelectOrigin}
              statusUniqueList={statusUniqueList}
              selectStatus={selectStatus}
              handleSelectStatus={handleSelectStatus}
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
