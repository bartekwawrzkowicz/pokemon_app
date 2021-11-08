import '../styles/main.scss'

const SearchBar = ({ isActive, change }) => {
    return (
        isActive ?
            <nav class="navbar navbar-light bg-light">
                <form class="navbar__form-inline" >
                    <input class="form-control mr-sm-2" type="search" placeholder="search pokemons..." aria-label="Search" onChange={change} />
                </form>
            </nav> : null
    );
}

export default SearchBar;