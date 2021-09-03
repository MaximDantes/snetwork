import {NavLink} from 'react-router-dom'
import s from './Nav.module.css'

const Nav = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to='/profile' activeClassName={s.active}>Profile</NavLink>
                </li>
                <li>
                    <NavLink to='/users' activeClassName={s.active}>Users</NavLink>
                </li>
                <li>
                    <NavLink to='/chat' activeClassName={s.active}>Chat</NavLink>
                </li>
                <li>
                    <NavLink to='/dialogs' activeClassName={s.active}>Dialogs</NavLink>
                </li>
                <li>
                    <NavLink to='/news' activeClassName={s.active}>News</NavLink>
                </li>
                <li>
                    <NavLink to='/friends' activeClassName={s.active}>Friends</NavLink>
                </li>
                <li>
                    <NavLink to='/music' activeClassName={s.active}>Music</NavLink>
                </li>
                <li>
                    <NavLink to='/settings' activeClassName={s.active}>Settings</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;