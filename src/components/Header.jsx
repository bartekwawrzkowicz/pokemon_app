import pokemonLogo from '../images/logo.png';
import { Container } from '../styles/Container.style';

const Header = () => {
    return (
        <Container >
            <img src={pokemonLogo} alt="pokemon-logo" />
        </Container>
    );
}

export default Header;