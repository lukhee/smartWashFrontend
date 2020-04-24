import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import { setAlert } from  '../../actions/alert'
import { register } from  '../../actions/auth'
import PropTypes from 'prop-types'
import Logo from '../../images/svg/logo'
import styled from 'styled-components'

const LogoDiv = styled.div`
    height: 120px;
    margin: auto;
    margin-bottom: 10px;
`

const Register = ({isAuthenticated, register, setAlert})=> {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        password2: ""
    })

    const {name, email, password, password2} = formData

    const onChange =(e)=> {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = (e)=> {
        e.preventDefault()
        if(password !== password2){
            setAlert('password not match', "danger")
        }else {
            register({name, email, password})
        }
    }

    if(isAuthenticated){
        return <Redirect to='/profile' />
    }

    return (
        <div style={{minHeight: "100vh", width: "100%"}} className="container-fluid row m-0 bg-primary justify-content-around align-items-center">    
            <div className="col-sm-4 p-1"> 
                <LogoDiv> 
                    <Logo />
                </LogoDiv>
            
                <div className="bg-white p-4">
                    <div className="mt-4">
                        <h3 className="text-primary text-center pb-3"> Sign Up </h3>
                        <p> <i className="fas fa-user" /> Create Your Account </p>
                    </div>

                    <form onSubmit={(e)=>onSubmit(e)}>
                        <div className="form-group">
                            <input className="form-control rounded-0 bg-light border-0" 
                                type="text" 
                                name="name" 
                                value={name} 
                                onChange={(e)=>onChange(e)}
                                placeholder="Full-Name here" />
                        </div>
                        <div className="form-group mb-0">
                            <input className="form-control rounded-0 bg-light border-0" 
                                type="email" 
                                name="email" 
                                value={email} 
                                onChange={(e)=>onChange(e)}
                                placeholder="Email here" />
                        </div>
                        <small className=" mb-3 text-muted form-text">This site uses Gravatar to populate image</small>
                        <div className="form-group">
                            <input className="form-control rounded-0 bg-light border-0" 
                                type="password" 
                                name="password" 
                                value={password} 
                                onChange={(e)=>onChange(e)}
                                placeholder="Password" />
                        </div>
                        <div className="form-group">
                            <input className="form-control rounded-0 bg-light border-0" 
                                type="password" 
                                name="password2" 
                                value={password2} 
                                onChange={(e)=>onChange(e)}
                                placeholder="Confirm Password" />

                        </div>
                        <button type="submit" className="btn btn-sm w-100 btn-primary rounded-0 mb-2"> Register </button>
                    </form>

                    <p className="d-inline"> Already have an accout? </p> <Link to="/login" className="text-primary"> Sign In </Link>
                </div>
            </div>
        </div>
    )
}
Register.propTypes = {
    isAuthenticated: PropTypes.bool,
    register: PropTypes.func.isRequired
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.isAuthenticated
    }
}

export default connect(mapStateToProps, { register, setAlert } ) (Register)
