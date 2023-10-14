import './style.scss';
import logo from '../../img/opt_logo_black.png';

const Navbar = (): JSX.Element => {
    return (
        <div className="navbar">
            <a className='home'>
                <img className='homeLogo' src={logo} alt='Logo' />
                <h1 className='homeName'>Оптовичок</h1>
            </a>
            {/* <a className='menu'>Меню</a> */}
        </div>
    );
};

export default Navbar;