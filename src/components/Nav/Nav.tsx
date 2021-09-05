import {NavLink} from 'react-router-dom'
import styled from 'styled-components'
import React from 'react'

const StyledNav = styled.nav`
  grid-area: nav;
  background: #101e46;
  padding: 10px;

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
    nav {
      font-size: 12px;
    }

    ul {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 100%;
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
                {/*<li>*/}
                {/*    <NavLink to="/news" activeClassName={s.active}>News</NavLink>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*    <NavLink to="/friends" activeClassName={s.active}>Friends</NavLink>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*    <NavLink to="/music" activeClassName={s.active}>Music</NavLink>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*    <NavLink to="/settings" activeClassName={s.active}>Settings</NavLink>*/}
                {/*</li>*/}
            </ul>
        </StyledNav>
    )
}

export default Nav