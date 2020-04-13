import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styled, { css } from 'styled-components'

const NavDIv = styled.div`
    width: 100%;
    background: black;
    /* background: ${p=> p.isAuthenticated === null? '#eeee': '#3384f0'}; */
    position: fixed;
    top: 0%;
    height: 60px;
    padding: 0 16px;
    z-index: 1;
`

const NavBar = ({auth: { isAuthenticated, isAdmin }}) => {
    return (
        <NavDIv isAuthenticated = {isAuthenticated}>
            <div className="d-flex justify-content-between align-content-center">
                <i className="fas fa-car text-light"></i>
                <div>
                    <h1 className="text-light"> Nav bar here </h1>
                </div>
            </div>
        </NavDIv>
    )
};

NavBar.propTypes = {
    auth: PropTypes.object
};

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps, null) (NavBar)
