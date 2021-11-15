import pokemonLogo from '../images/logo.png';
import { StyledContainer } from '../styles/layout';

const Header = () => {
    return (
        <StyledContainer>
            <img src={pokemonLogo} alt="pokemon-logo" />
        </StyledContainer>
    );
}

export default Header;