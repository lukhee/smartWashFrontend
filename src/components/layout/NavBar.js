import React, {useState} from 'react'
import {Link, withRouter} from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styled, { css } from 'styled-components'
import {logout} from '../../actions/auth'


const NavDIv = styled.div`
    width: 100%;
    position: fixed;
    top: 0%;
    height: 60px;
    padding: 0 16px;
    z-index: 1000;
`;

const Nav = styled.nav`
    background: ${p=> p.isAuth ? '#3384f0': '' };
`

const MenuButton = styled.button`
    padding: .25rem .75rem;
    font-size: 1.25rem;
    line-height: 1;
    background-color: transparent;
    border: 1px solid transparent;
    border-radius: .25rem;
    border: 2px solid white;
    border-radius: 3px;
    margin-left: auto;
    display : none;

    @media (max-width: 750px){
        display: flex

    }
`;

const Menu = styled.div`
    margin-left: auto;
    transition: 3s ease-out;

    @media (max-width: 750px){
        width: 100% !important;
        display: ${p => p.showMenu === false? 'none': 'block'};

    }
`

const NavBar = ({history, logout, auth: { isAuthenticated, isAdmin }}) => {
    const [showMenu, toggleMenu] = useState(false)
    return (
        <NavDIv>
                <header>
                    <Nav isAuth = {isAuthenticated} className="navbar navbar-expand-md  fixed-top text-light">
                        <Link className="navbar-brand text-light" to="/">Smart Wash</Link>
                        { !isAuthenticated ? null : 
                            ( <>
                                <MenuButton type="button" onClick={()=> toggleMenu(!showMenu)}>
                                    <span className="navbar-toggler-icon "></span>
                                </MenuButton>
                                <Menu showMenu={showMenu}>
                                    <ul className="navbar-nav ml-auto">
                                        <Link className="p-2 text-white" to="/dashboard" onClick={()=>toggleMenu(false)}>DashBoard</Link>
                                        <Link className="p-2 text-white" to="/profile" onClick={()=>toggleMenu(false)}>Profile</Link>
                                        <Link className="p-2 text-white" to="/request" onClick={()=>toggleMenu(false)}>Request/history</Link>
                                        <span className="m-auto w-100 btn btn-sm btn-outline-light" onClick={()=>logout(history)}>Logout</span>
                                    </ul> 
                                </Menu>
                            </>
                        )

                        }
                    </Nav>
                </header>
        </NavDIv>)
};

NavBar.propTypes = {
    auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps, {logout}) (withRouter(NavBar))
