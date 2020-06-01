import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import {getProfile} from '../../../actions/profile'
import RequestCard from './requestCard'
import styled from 'styled-components'
import Loading from '../../layout/spinner/spinner'

const RequestContainer = styled.div`
    /* background: #338360; */
    height: 100vh;
    min-height: 100vh;
    width: 100%;
    overflow: auto;
`

const Request = ({profile, getProfile}) => {
    useEffect(()=>{
        getProfile()
    }, [getProfile])
    console.log(profile)

    return profile === null ? <Loading/> :
        <>
                <RequestContainer className="mt-5 p-4 bg-light h-100">
                    {profile.request.map(req=>(
                        <RequestCard key={req._id} request={req}/>
                    ))}
                    <p> This page<span className="font-weight-bold text-danger"> request/history, payment and tracking page </span> is in working progress as at 05/01/2020</p>
                </RequestContainer>
        </>
}

const mapStateToProps = (state) => {
    return {
        profile: state.profile.profile
    }
}

export default connect(mapStateToProps, {getProfile}) (Request)