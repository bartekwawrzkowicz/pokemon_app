import pokemonLogo from '../images/logo.png';
import { Container } from '../styles/layout';

const Header = () => {
    return (
        <Container >
            <img src={pokemonLogo} alt="pokemon-logo" />
        </Container>
    );
}

export default Header;