import pokemonLogo from '../images/logo.png';

const Header = () => {
    return (
        <div>
            <img src={pokemonLogo} className="header__logo" alt="pokemon-logo" />
        </div>
    );
}

export default Header;