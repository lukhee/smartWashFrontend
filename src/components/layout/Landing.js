import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {Button} from 'components/utility'
import './landing.css'
import img7 from '../img/car07.jpg'
const ParentDiv = styled.div`
    background: #3384f0;
    width: 100%;
    padding-top: 50px;
    height: 100vh;
    min-height: 100vh;
    box-sizing: border-box
`

const LandingPage = ({})=> {
    return (
        <ParentDiv>
             <div class="d-md-flex h-md-100 align-items-center">
                <div class="col-md-6 p-0 bg-indigo h-md-100">
                    <div class="text-white d-md-flex align-items-center h-100 p-5 text-center justify-content-center">
                        <div class="logoarea pt-5 pb-5">
                        <p>
					<i class="fa fa-anchor fa-3x"></i>
				</p>
				<h1 class="mb-0 mt-3 display-4"> Smart Wash</h1>
                
				<h5 class="mb-4 font-weight-light">The fast, affordable way to wash your car.</h5>
				<a target="_blank" class="btn btn-outline-light btn-lg btn-round" href="/login">Get Started</a>
				

                    
                        </div>
                    </div>
                </div>
                <div class="col-md-6 p-0 bg-white h-md-100 loginarea">
                    <div class="d-md-flex align-items-center h-md-100 p-5 justify-content-center">
                    <form class="border rounded p-5">
                    
                    <h3 class="mb-4 text-center">Sign In</h3>
                    <div class="form-group">
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="E-mail" required=""></input>
                    </div>
                    <div class="form-group">
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" required=""></input>
                    </div>
                    <div class="form-group form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
                        <label class="form-check-label small text-muted" for="exampleCheck1">Remember me</label>
                    </div>
                    <button type="submit" class="btn btn-success btn-round btn-block shadow-sm">Sign in</button>
                    <small class="d-block mt-4 text-center"><a class="text-gray" href="#">Forgot your password?</a></small>
                </form>
    </div>
                </div>
            </div>
        </ParentDiv>
    )
}

LandingPage.propTypes = {

}

export default LandingPage
