import { useState, useEffect } from 'react';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import SearchBar from './components/SearchBar';
import CharactersList from './components/CharactersList';

const URL = 'https://pokeapi.co/api/v2/pokemon?limit=1118';

function App() {
  const [charactersList, setCharactersList] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios
      .get(URL)
      .then(res => {
        setCharactersList(res.data.results)
      })
      .catch(err => {
        console.error(err)
      })
  }, []);

  return (
    <div className="app">
      <header className="header">
        <Header />
        <div className="header__searchbar">
          <SearchBar change={event => setSearch(event.target.value)} />
        </div>
      </header>

      <ul className="list" >
        <CharactersList search={search} list={charactersList} />
      </ul>
    </div>
  );
}

export default App;
