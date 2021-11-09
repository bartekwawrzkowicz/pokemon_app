import '../styles/main.scss'

const SearchBar = ({ change }) => {
    return (
        <nav className="navbar navbar-light bg-light">
            <form className="navbar__form-inline" >
                <input className="form-control mr-sm-2" type="search" placeholder="search pokemons..." aria-label="Search" onChange={change} />
            </form>
        </nav>
    );
}

export default SearchBar;