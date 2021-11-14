import { Container, Input } from '../styles/layout';

const SearchBar = ({ change }) => {
    return (
        <Container>
            <Input className="form-control"
                type="search"
                placeholder="search pokemons..."
                aria-label="Search"
                onChange={change}>
            </Input>
        </Container>
    );
}

export default SearchBar;