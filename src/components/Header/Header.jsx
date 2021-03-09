import headerClasses from './Header.module.css';

const Header = () => {
    return (
        <header>

            <div className={headerClasses.logo}>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png' alt="logo" />
            </div>

            <div className={headerClasses.title}>
                <p>Unlimited React Works</p>
            </div>

        </header>
    );
};

export default Header;