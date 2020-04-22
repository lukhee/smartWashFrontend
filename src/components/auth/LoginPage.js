import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {login} from '../../actions/auth'

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
        <div className="w-sm-75 container">
            
            <div className="mt-4">
                <h1> Sign In </h1>
                <p> <i className="fas fa-user" /> Sign Into Your Account </p>
            </div>

            <form onSubmit={(e)=>onSubmit(e)}>
                <div className="form-group">
                    <input className="form-control rounded-0" 
                        type="email" 
                        name="email" 
                        value={email} 
                        onChange={(e)=>onChange(e)}
                        placeholder="Email here" 
                        required />
                </div>
                <div className="form-group">
                    <input className="form-control rounded-0" 
                        type="password" 
                        name="password" 
                        value={password} 
                        onChange={(e)=>onChange(e)}
                        placeholder="Password" />
                </div>
                <button type="submit" className="btn btn-sm rounded-0 mb-2"> Login </button>
            </form>

            <p className="d-inline"> Don't have an account? </p> <Link to="/register"> Sign Up </Link>

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
