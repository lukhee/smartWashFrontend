import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import CarWash from '../../images/svg/carWash'
import styled from 'styled-components'

const DashboardDiv = styled.div`
    /* https://bennettfeely.com/clippy/ */
    clip-path: polygon(0 0, 100% 0, 100% 100%, 35% 100%, 0 74%);
    width: 100%;
    height: 100%;
    padding: 40px;
`

const ContainerDiv = styled.div`
    /* background: #338360; */
    height: 100vh;
    min-height: 100vh;
    width: 100%;
    overflow: auto;
`

let boxShadow = {    
    boxShadow: "-6px 6px 0 0 rgba(0, 123, 255, 0.12)"
}
 
const Dashboard = ({user})=> {
    return (
        <ContainerDiv className="container-fluid p-0">
            <DashboardDiv className="bg-light row align-items-center m-auto justify-content-between">
                <CarWash />
                <div className="col-sm-5 text-center py-5 pl-sm-5 order-sm-first">
                    <h2> Hi {user != null && user.name.split(' ')[0]}, </h2>
                    <p> Lorem Ipsum is simply dummy text. </p>
                    <Link style={boxShadow} className="btn btn-primary btn-sm px-3 mr-1  my-1" to="/booking"> <i className="fas fa-plus text-white pr-1"></i> Booking  </Link>
                    <Link style={boxShadow} className="btn btn-outline-primary btn-sm px-3 " to="/request">Request History </Link>
                </div>
            </DashboardDiv>
        </ContainerDiv>
    )
}

const mapStateToProps = (state, ) => {
    return {
        user: state.auth.user
    }
}

export default connect (mapStateToProps) (Dashboard)
