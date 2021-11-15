import { useState, useEffect } from 'react';
import axios from 'axios';

import Header from './components/Header';
import SearchBar from './components/SearchBar';
import CharactersList from './components/CharactersList';

import { StyledList } from './styles/layout';
import 'bootstrap/dist/css/bootstrap.min.css';

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
    <>
      <Header />
      <SearchBar change={event => setSearch(event.target.value)} />
      <StyledList>
        <CharactersList search={search} list={charactersList} />
      </StyledList>
    </>
  );
}

export default App;