import React, {useState} from 'react'
import {Link, withRouter} from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'
import Logo from '../../images/svg/logo'
import {logout} from '../../actions/auth'


const NavDIv = styled.div`
    /* width: 100%; */
    position: fixed;
    top: 0%;
    height: 60px;
    padding: 0 16px;
    z-index: 1000;
`

const LogoDiv = styled.div`
    width: 25px;
    padding-top: 10px;
`

const Nav = styled.nav`
    background: ${p=> p.isAuth ? '#3384f0': '' };
    box-shadow: 0px 1px 1px 0 #f0f0f0;
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
    return !isAuthenticated ? null :
        <NavDIv className="container">
                <header>
                    <Nav isAuth = {isAuthenticated} className="navbar navbar-expand-md  fixed-top text-light">
                        <LogoDiv>
                            <Logo />
                        </LogoDiv>
                        <Link className="navbar-brand text-light pl-2 font-weight-bold" to="/">Smart Wash</Link>
                            
                            <MenuButton type="button" onClick={()=> toggleMenu(!showMenu)}>
                                <span> <i className="fas fa-bars text-white mt-1"></i> </span>
                            </MenuButton>
                            <Menu showMenu={showMenu}>
                                <ul className="navbar-nav ml-auto">
                                    <Link className="p-2 text-white mr-3" to="/dashboard" onClick={()=>toggleMenu(false)}>DashBoard</Link>
                                    <Link className="p-2 text-white mr-3" to="/profile" onClick={()=>toggleMenu(false)}>Profile</Link>
                                    <Link className="p-2 text-white mr-3" to="/request" onClick={()=>toggleMenu(false)}>Request/history</Link>
                                    <span className="m-auto w-100 btn btn-sm btn-light text-primary" onClick={()=>logout(history)}>Logout</span>
                                </ul> 
                            </Menu>
                    </Nav>
                </header>
        </NavDIv>
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
