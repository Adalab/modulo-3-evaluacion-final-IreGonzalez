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
import title from '../images/lord-of-the-rings-logo-png-file.png'
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
  const [op, setOp] = useState(1);

<<<<<<< HEAD
  useEffect(() => {
<<<<<<< HEAD
    callToApi(op)
      .then(initialData => {
        setData(initialData);
      });
=======
=======

  // useEffect(() => {
  //   callToApi(op)
  //     .then(initialData => {
  //       setData(initialData);
  //     });
  // }, [op]);
  useEffect(() => {
>>>>>>> master
    const headers = {
      'Accept': 'application/json',
      'Authorization': 'Bearer 8Pdh9xgb08StIcDZ2T1u'
    }
    callToApi(headers,op);
<<<<<<< HEAD
>>>>>>> f9b2d5b (trying change API)
=======
>>>>>>> master
  }, [op]);
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
              op={op}
              setOp={setOp}
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
        <h6>By IreGonzalez</h6>
      </footer>
    </div >
  );
}

export default App;
