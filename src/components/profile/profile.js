import React, {useEffect, useState, Fragment} from 'react'
import { connect } from 'react-redux'
import { getProfile, createProfile } from '../../actions/profile'
import PropTypes from 'prop-types'
import Car from './car'
import Location from './location'
import UserPage from './userPage'
import Spinner from '../layout/spinner/spinner'
import CreateProfile from './profileForms/createProfile'
import styled from 'styled-components'

const ProfileDiv = styled.div`
    width: 100%;
    min-height: 100vh;
    padding-top: 80px;
`

const Profile = ({getProfile, createProfile, profile: { profile, loading}, auth: { isAuthenticated, user} }) => {
    useEffect(()=>{
        getProfile()
    }, [getProfile])

    const [formData, setFormData] = useState({
        home: '',
        street: '',
        state: '',
        country: ''
    })

    const [showForm, toggleForm] = useState(false)

    const onChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        createProfile(formData)
    }

    return loading && profile === null ? 
        <Spinner /> :
        <ProfileDiv className="container-fluid bg-light">
            <Fragment>
                {profile === null ?
                    (<> 
                        <h5> You have no profile yet </h5>
                        {
                            !showForm &&
                            (<button 
                                className="btn btn-primary btn-sm px-4"
                                onClick={()=> toggleForm(!showForm)}> Create Profile </button>)
                        }
                        <CreateProfile 
                            onChange={(e)=> onChange(e)}
                            formData = {formData}
                            onSubmit = {(e)=> onSubmit(e)}
                            showForm = {showForm}
                        />
                    </>) 
                        :
                        <>
                            <div className="row justify-content-around"> 
                                <div className="col-md-3">
                                    <UserPage user={user}
                                        phone_no = {profile.contact.home}
                                    />
                                </div>
                                <div className="col-md-8">
                                    <Location locations={profile.location}/>
                                    <Car 
                                        cars={profile.car}
                                    />
                                    {/* <Request request={profile.request}/> */}
                                </div>
                            </div>
                            <div className="text-right pr-4">
                                <button className="btn btn-outline-danger btn-sm px-5 mb-4"> Delete Account </button>
                            </div>
                        </>
                }
            </Fragment>
        </ProfileDiv>
}

Profile.propTypes = {
    getProfile : PropTypes.func.isRequired,
    createProfile : PropTypes.func.isRequired,
    profile : PropTypes.object.isRequired
}

const mapStateToProps = (state) => {
    return {
        profile: state.profile,
        auth: state.auth
    }
}

export default connect(mapStateToProps, {getProfile, createProfile}) (Profile)