import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {connect} from 'react-redux'
import Logo from '../../images/svg/logo'

import { Link, Redirect } from 'react-router-dom'
import car from '../../image/LandingPageImages/car4.jpg'

const LogoDiv = styled.div`
    padding-top: 10px;
    width: 120px;
    margin: auto;
`

const DescribtionDiv = styled.div`
    background: #3384f0;
    height: 100vh;
    min-height: 100vh;
    width: 100%;
    overflow: auto;
`

const LandingPage = ({isAuthenticated})=> {
    if(isAuthenticated){
        return(
            <Redirect to="/dashboard" />
        )
    }
    return (

        <div className="container-fluid"> 
            <div className="row">
                <DescribtionDiv className="col-md-6 d-flex text-center">
                    <div className="text-light my-auto mt-5 w-100">
                        <LogoDiv>
                            <Logo />
                        </LogoDiv>
                        <h3 className='display-3 font-weight-bold mb-0'> Smart Wash </h3>
                        <p> The fast, affordable way to wash your car. </p>
                        <Link to="/login" style={{boxShadow: "-6px 6px 0 0 #f0f0f0d9"}} className=" border border-light btn btn-lg px-4 text-light font-weight-bold"> Get Started </Link>
                    </div>
                </DescribtionDiv>

                <div className="col-md-6 m-0 p-0 d-none d-md-flex" style={{width: "100vw", height: "100vh"}}>
                    <img src={car} alt="car here" className="h-100 w-100" />
                </div>
            </div>
        </div>

    )
}

LandingPage.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.isAuthenticated
    }
}

export default connect(mapStateToProps) (LandingPage)
