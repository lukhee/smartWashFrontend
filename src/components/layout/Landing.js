import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {connect} from 'react-redux'

import { Link, Redirect } from 'react-router-dom'
import car from '../../image/LandingPageImages/car4.jpg'

const DescribDiv = styled.div`

    background: #3384f0;
    height: 100vh;
    min-height: 100vh;
    width: 100%;
    padding: 60px 30px 0 30px;
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
                <DescribDiv className="col-md-6 d-flex text-center">
                    <div className="text-light my-auto mt-5 w-100">
                        <h3 className='display-3 font-weight-bold mb-0'> Smart Wash </h3>
                        <p> The fast, affordable way to wash your car. </p>
                        <Link to="/login" className="btn btn-lg px-4 btn-outline-light font-weight-bold"> Get Started </Link>
                    </div>
                </DescribDiv>

                <div className="col-md-6 m-0 p-0 d-sm-none d-md-flex" style={{width: "100vw", height: "100vh"}}>
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
