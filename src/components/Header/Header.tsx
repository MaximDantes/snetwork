import {NavLink} from 'react-router-dom'
import logo from './../../assets/images/logo.svg'
import React from 'react'
import {useSelector} from 'react-redux'
import {getIsAuth, getLogin} from '../../utils/selectors/auth-selectors'
import styled from 'styled-components'

const StyledHeader = styled.header`
  grid-area: header;
  background: #101e46;
  color: #f5f5f5;
  display: flex !important;
  justify-content: space-between;
  line-height: 60px;

  a {
    color: #f5f5f5;
  }
  
  .title {
    flex-basis: 60%;
    padding: 0 20px;
    text-align: center;
  }

  .logo {
    flex-basis: 20%;
  }

  .login {
    flex-basis: 20%;
    text-align: right;
    padding: 0 20px;
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(3600deg);
    }
  }

  .logo img {
    height: 100%;
    animation: rotate 5s infinite;
  }

  @media screen and (max-device-width: 767px) {
    .title {
      flex-basis: 70%;
      padding: 0 10px;
      font-size: 20px;
    }

    .logo {
      flex-basis: 30%;
    }
  }
`

const Header: React.FC = () => {

    const isAuth = useSelector(getIsAuth)
    const login = useSelector(getLogin)

    return (
        <StyledHeader>
            <div className={'logo'}>
                <img src={logo} alt="logo"/>
            </div>

            <div className={'title'}>
                <p>Unlimited React Works</p>
            </div>

            <div className={'login'}>
                {
                    isAuth
                        ?
                        <div>{login}</div>
                        :
                        <NavLink to="/login">Login</NavLink>
                }
            </div>

        </StyledHeader>
    )
}

export default Header