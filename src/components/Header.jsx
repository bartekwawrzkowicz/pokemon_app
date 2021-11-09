import pokemonLogo from '../images/logo.png';
import '../styles/main.scss';

const Header = () => {
    return (
        <div className="header__logo">
            <img src={pokemonLogo} alt="pokemon-logo" />
        </div>
    );
}

export default Header;