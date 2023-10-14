import logo from './logo.webp';

const NavBar = ({ show }) => {
    return (
        <div className={show ? 'sidenav active' : 'sidenav'}>
            <img src={logo} alt='Logo' className='logo' />
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/">About us</a>
                </li>
                <li>
                    <a href="/">Contact us</a>
                </li>
            </ul>
        </div>
    )
}

export default NavBar