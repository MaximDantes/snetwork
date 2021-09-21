import {NavLink} from 'react-router-dom'
import styled from 'styled-components'
import React from 'react'

const StyledNav = styled.nav`
    grid-area: nav;
    background: #101e46;
    padding: 10px;
    height: fit-content;

    .active {
        color: #62dafc;
    }

    li {
        margin: 10px 0;
    }

    a {
        color: #f5f5f5;
    }

    @media screen and (max-device-width: 767px) {
        & {
            position: fixed;
            height: 100vh;
        }
    }
`

const Nav: React.FC = () => {
    return (
        <StyledNav>
            <ul>
                <li>
                    <NavLink to="/profile" activeClassName={'active'}>Profile</NavLink>
                </li>
                <li>
                    <NavLink to="/users" activeClassName={'active'}>Users</NavLink>
                </li>
                <li>
                    <NavLink to="/chat" activeClassName={'active'}>Chat</NavLink>
                </li>
                <li>
                    <NavLink to="/dialogs" activeClassName={'active'}>Dialogs</NavLink>
                </li>
            </ul>
        </StyledNav>
    )
}

export default Nav