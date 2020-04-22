import React, {useEffect, useState, Fragment} from 'react'
import { connect } from 'react-redux'
import { getProfile, createProfile } from '../../actions/profile'
import PropTypes from 'prop-types'
import Car from './car'
import Location from './location'
import Request from './request'
import UserPage from './userPage'
import Spinner from '../layout/spinner/spinner'
import CreateProfile from './profileForms/createProfile'

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
        <div className="container">
            <h2 className="d-inline"> Profile Page </h2>
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
                    (<div className="row justify-content-between"> 
                        <div className="col-sm-4">
                            <UserPage user={user} />
                        </div>
                        <div className="col-sm-8">
                            <Location locations={profile.location}/>
                            <Car cars={profile.car} />
                            <Request request={profile.request}/>
                        </div>
                        
                        <button className="btn btn-danger btn-sm px-5 mb-4"> Delete Account </button>
                    </div>)
                }
            </Fragment>
        </div>
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