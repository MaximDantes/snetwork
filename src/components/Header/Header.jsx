import { NavLink } from 'react-router-dom';
import s from './Header.module.css';
import logo from './../../assets/images/logo.svg'

const Header = (props) => {
    return (
        <header>

            <div className={s.logo}>
                <img src={logo} alt="logo" />
            </div>

            <div className={s.title}>
                <p>Unlimited React Works</p>
            </div>

            <div className={s.login}>
                {
                    props.isAuth
                        ?
                        <div>{props.login}</div>
                        :
                        <NavLink to='/login'>Login</NavLink>
                }
            </div>

        </header>
    );
};

export default Header;