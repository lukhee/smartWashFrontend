import React, {useState, useEffect, useRef} from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { connect } from 'react-redux'
import {getProfile} from '../../actions/profile'
import {getPackage} from '../../actions/dashBoard'
import ProfileMenu from './profileMenu'
import PackageMenu from './packageMenu'
import PaymentMenu from './paymentMenu'
import ProgressBar from '../layout/progreeBar'
import Review from './review'

const DashBoard = ({getProfile, getPackage, profile: { profile }, dashboard: {packageMenu, loading}}) => {
    useEffect(()=>{
        getPackage() 
        getProfile()
    }, [getPackage, getProfile])

    const [formData, setFormData] = useState({
        car: null,
        location: null,
        pkg: {id: null, name: '', cost: 0},
        add_on: {id: null, name: '', cost: 0},
        selectedDate: null,
        paymentMethod: '',
        totalCost: 0
    })

    const [showValue, setShow] = useState(1)

    const {
        car, location, selectedDate, paymentMethod, pkg, add_on, totalCost
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

    return packageMenu === null && loading ? (<h1> Loading ...  </h1>) :
        <div className="container">
            <h1> DashBoard </h1>
            
            <ProgressBar showValue = {showValue} />

            <div className="border border-warning p-3 mb-5">
                {showValue > 1 && <h3 onClick={()=> setShow(showValue - 1)}> <i className="fas fa-arrow-left"></i> </h3> }
                
                <div>
                    {profile != null && 
                    <ProfileMenu 
                        profileData = {profile}
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
                        totalcost={totalCost}/> 
                </div>
            </div>

            {showValue < 4 && 
                <div className="bg-light fixed-bottom d-flex justify-content-between container py-2"> 
                    <h5> Total cost</h5>
                    <h5 className="text-weigth-bold"> {totalCost}:00  </h5>
                </div>
            }
        </div>
}

DashBoard.propTypes = {
    getProfile: PropTypes.func.isRequired,
    getPackage: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired,
    dashboard: PropTypes.object.isRequired
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
        profile: state.profile,
        dashboard: state.dashboard
    }
}

export default connect(mapStateToProps, {getProfile, getPackage}) (DashBoard)
