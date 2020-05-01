import React, {useState, useEffect} from 'react'
import { Link, withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {getProfile, requestWash} from '../../actions/profile'
import {getPackage} from '../../actions/dashBoard'
import ProfileMenu from './profileMenu'
import PackageMenu from './packageMenu'
import PaymentMenu from './paymentMenu'
import ProgressBar from '../layout/progreeBar'
import Spinner from '../layout/spinner/spinner'
import Review from './review'

const Booking = ({getProfile, getPackage, requestWash, history, profile, dashboard: {packageMenu, loading}}) => {
    useEffect(()=>{
        getPackage() 
        getProfile()
    }, [getPackage, getProfile])

    const [formData, setFormData] = useState({
        car: { _id : null},
        location: { _id: null},
        pkg: {id: null, name: '', cost: 0},
        add_on: {id: null, name: '', cost: 0},
        selectedDate: null,
        paymentMethod: '',
        totalCost: 0
    })

    const [showValue, setShow] = useState(1)

    const {
        car, location, selectedDate, pkg, add_on, totalCost
    } = formData

    const onClick = (value, e) => {
        const id = e.currentTarget.id
        if(id === 'add_on' || id === 'pkg'){
            const packageValue = {id : value.id, name: value.name, cost: value.cost}
            const update = {}
            if(id === 'add_on'){
                update.add_on = packageValue
                update.totalCost = value.cost + pkg.cost
            } else {
                update.pkg = packageValue
                update.totalCost = value.cost + add_on.cost
            }
            setFormData({
                ...formData,
                ...update
            })
        } else {
            setFormData({
                ...formData,
                [e.currentTarget.id]: value
            })
        }
    }

    const onChange = (date) => {
        setFormData({
            ...formData,
            selectedDate: date
        })
    }

    const submitBooking = ()=> {
        let addOn = ''
        if(add_on.name !== ''){
            addOn = ' , ' + add_on.name
        }

        const data = {
            carId: car._id, 
            locationId: location._id, 
            date: selectedDate, 
            totalCost: totalCost, 
            package: pkg.name + addOn
        }
        requestWash(data, history)
    }

    return packageMenu === null && loading ? (<Spinner/>) :
        <div className="container py-5 my-2 bg-light">
            <h1> Booking </h1>
            {profile.profile === null && profile.loading === false ? 
            <>
            <p> Your profile is empty, please create one.</p> 
            <Link to='/profile'> Visit Your Profile Page </Link>
            </>
            : 
            <>
            <ProgressBar showValue = {showValue} />

                <div className="bg-white p-3 mb-5">
                    {showValue > 1 && <h3 onClick={()=> setShow(showValue - 1)}> <i className="fas fa-arrow-left"></i> </h3> }
                    
                    <div>
                        {profile.profile != null && 
                        <ProfileMenu 
                            profileData = {profile.profile}
                            onClick = {(e,value)=>onClick(e,value)}
                            onClickShow={()=> setShow(showValue + 1)}
                            show = {showValue}
                            stateCar = {car}
                            stateLocation = {location}
                        /> }

                        <PackageMenu 
                            packageData = {packageMenu}
                            onClick = {(e,id)=>onClick(e,id)}
                            onClickShow={()=> setShow(showValue + 1)}
                            show = {showValue}
                            state_pkg_id = {pkg.id}
                            state_add_on_id = {add_on.id}
                        />

                        <PaymentMenu 
                            selectedDate={selectedDate}
                            onClick = {(e)=>onClick(e)}
                            onChange = {(date)=>onChange(date)}
                            onClickShow={()=> setShow(showValue + 1)}
                            show = {showValue}
                        />
                        
                        <Review 
                            data={formData}  
                            show={showValue}
                            totalcost={totalCost}
                            onClick={()=>submitBooking()}/> 
                    </div>
                </div>

                {showValue < 4 && 
                    <div style={{background: "#0c5cb1"}} className="text-white fixed-bottom d-flex justify-content-between container py-2"> 
                        <h5> Total cost</h5>
                        <h5 className="text-weigth-bold"> {totalCost}:00  </h5>
                    </div>
                }
            </>
            }
        </div>
}

Booking.propTypes = {
    getProfile: PropTypes.func.isRequired,
    requestWash: PropTypes.func.isRequired,
    getPackage: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired,
    dashboard: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
        profile: state.profile,
        dashboard: state.dashboard
    }
}

export default connect(mapStateToProps, {getProfile, getPackage, requestWash}) (withRouter(Booking))
