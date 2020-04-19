import React, {useEffect, Fragment} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getProfile } from '../../actions/profile'
import PropTypes from 'prop-types'
import Car from './car'
import Location from './location'
import Request from './request'
import UserPage from './userPage'

const Profile = ({getProfile, profile: { profile, loading}, auth: { isAuthenticated, user} }) => {
    useEffect(()=>{
        getProfile()
    }, [getProfile])

    return loading && profile === null ? 
        <span> Loading ... </span> :
        <div className="container pt-5">
            <h2 className="d-inline"> Profile Page </h2>
            <Link className="btn btn-primary d-inline btn-sm" to="/dashboard"> Dashboard </Link>
            <Fragment>
                {profile === null ?
                    (<h1> Create profile </h1>) 
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
                    </div>)
                }
            </Fragment>
        </div>
}

Profile.propTypes = {
    getProfile : PropTypes.func.isRequired,
    profile : PropTypes.object.isRequired
}

const mapStateToProps = (state) => {
    return {
        profile: state.profile,
        auth: state.auth
    }
}

export default connect(mapStateToProps, {getProfile}) (Profile)