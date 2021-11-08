import { useState, useEffect } from 'react';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import SearchBar from './components/SearchBar';
import CharactersList from './components/CharactersList';

const dynamicURL = 'https://pokeapi.co/api/v2/pokemon?limit=1118';

function App() {
  const [charactersList, setCharactersList] = useState([]);
  const [search, setSearch] = useState('');
  const [active, setActive] = useState(true);

  useEffect(() => {
    axios
      .get(dynamicURL)
      .then(res => {
        setCharactersList(res.data.results)
      })
      .catch(err => {
        console.error(err)
      })
  }, []);

  console.log(charactersList)

  const charactersListHandler = event => {
    const name = event.target.innerHTML;
    /* setActive(false); */
  }


  return (
    <div className="App">
      <div className="header">
        <Header />
      </div>

      <div className="searchbar">
        <SearchBar isActive={active} change={event => setSearch(event.target.value)} />
      </div>

      <div className="list" >
        <CharactersList search={search} list={charactersList} click={charactersListHandler} />
      </div>
    </div>
  );
}

export default App;
