import { Link } from 'react-router-dom';
import logo from './logo.webp';
import { FiHome } from 'react-icons/fi';
import { BsPersonFill } from 'react-icons/bs'
import { MdContactPhone } from 'react-icons/md'

const NavBar = ({ show }) => {
    return (
        <div className={show ? 'sidenav active' : 'sidenav'}>
            <img src={logo} alt='Logo' className='logo' />
            <ul>
                <li>
                    <Link to="/"><FiHome />Home</Link>
                </li>
                <li>
                    <Link to="/About"><BsPersonFill />About us</Link>
                </li>
                <li>
                    <Link to="/Contact"><MdContactPhone />Contact us</Link>
                </li>
            </ul>
            {/*    <nav>
        <Link to="/">Home</Link><br/>
        <Link to="/About">About</Link> <br/>
        <Link to="/Contact">Contact</Link>      
    </nav>            */}
        </div>
    )
}

export default NavBar;