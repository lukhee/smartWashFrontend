import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {login} from '../../actions/auth'
import Logo from '../../images/svg/logo'
import styled from 'styled-components'

const LogoDiv = styled.div`
    height: 120px;
    margin: auto;
    margin-bottom: 10px;
`

const LoginPage = ({login, isAuthenticated}) => {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const { email, password } = formData

    const onChange =(e)=> {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = (e)=> {
        e.preventDefault()
        login({email, password})
    }

    // Redirect if authenticated
    if(isAuthenticated) {
        return <Redirect to='/dashboard' />
    }

    return (
        <div style={{height: "100vh"}} className="container-fluid row m-0 bg-primary justify-content-around align-items-center">
            <div className="col-sm-4 p-3"> 
                <LogoDiv> 
                    <Logo />
                </LogoDiv>

                <div className="bg-white p-4">
                    <div className="mt-4">
                        <h3 className="text-primary text-center pb-3"> Sign In </h3>
                        <p> <i className="fas fa-user" /> Sign Into Your Account </p>
                    </div>

                    <form onSubmit={(e)=>onSubmit(e)}>
                        <div className="form-group">
                            <input className="form-control rounded-0 bg-light border-0" 
                                type="email" 
                                name="email" 
                                value={email} 
                                onChange={(e)=>onChange(e)}
                                placeholder="Email here" 
                                required />
                        </div>
                        <div className="form-group">
                            <input className="form-control rounded-0 bg-light border-0" 
                                type="password" 
                                name="password" 
                                value={password} 
                                onChange={(e)=>onChange(e)}
                                placeholder="Password" />
                        </div>
                        <button type="submit" className="btn btn-sm btn-primary w-100 rounded-0 mb-2"> Login </button>
                    </form>

                    <p className="d-inline"> Don't have an account? </p> <Link to="/register"> Sign Up </Link>
                </div>
            </div>
        </div>
    )
}

LoginPage.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    login: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, {login}) (LoginPage)
