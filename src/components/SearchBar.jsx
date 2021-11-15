import { StyledContainer, StyledInput } from '../styles/layout';

const SearchBar = ({ change }) => {
    return (
        <StyledContainer>
            <StyledInput className="form-control"
                type="search"
                placeholder="search pokemons..."
                aria-label="Search"
                onChange={change}>
            </StyledInput>
        </StyledContainer>
    );
}

export default SearchBar;