import { NavLink, Router } from 'react-router-dom';
import navClasses from './Nav.module.css';

const Nav = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to='/profile' activeClassName={navClasses.active}>Profile</NavLink>
                </li>
                <li>
                    <NavLink to='/dialogs' activeClassName={navClasses.active}>Dialogs</NavLink>
                </li>
                <li>
                    <NavLink to='/news' activeClassName={navClasses.active}>News</NavLink>
                </li>
                <li>
                    <NavLink to='/friends' activeClassName={navClasses.active}>Friends</NavLink>
                </li>
                <li>
                    <NavLink to='/music' activeClassName={navClasses.active}>Music</NavLink>
                </li>
                <li>
                    <NavLink to='/settings' activeClassName={navClasses.active}>Settings</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;