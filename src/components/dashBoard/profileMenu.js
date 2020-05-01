import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import { PickUp } from '../../images/svg/cars/index'

const PackageDiv = styled.div`
    font-size: 13px;
    cursor: pointer;
    /* color:${p=> p.isSelected === true ? 'red !important' : null }; */
    background:${p=> p.isSelected === true ? '#007bff1c !important' : null };
    box-shadow: rgb(184, 196, 194) 0px 4px 10px -4px;
    &:hover {
        background: #f8f9fa;
        box-shadow: rgb(184, 196, 194) 0px 9px 10px -4px;
    }
`

const ProfileMenu = ({profileData: {car, location}, onClick, show, onClickShow, stateCar, stateLocation})=> {
    return show === 1 &&
        <div className="m-2">
            <h5 className="mb-3"> <i className="fas fa-car"></i> Pick Your Car </h5>
            {
                car.length !== 0 && location.length !== 0 ?  
                <>
                    <div className="row justify-content-around border-bottom pb-3">
                        {car.map(car=> 
                            <PackageDiv 
                                isSelected = {stateCar._id === car._id ? true : false}
                                id="car"
                                className="bg-light col-sm-3 mb-3 d-flex justify-content-between p-2" 
                                key={car._id}
                                onClick={e=>onClick(car, e)}>
                                <span className="d-flex align-items-center"> <span className="font-weight-bold">{car.brand} </span>  {car.color} {car.plate_no} </span>
                                <div className="w-25 h-100 rounded-circle bg-white p-1"> <PickUp/> </div>
                            </PackageDiv>
                        )}
                    </div>

                    <div className="my-3">
                        <h5> <i className="fas fa-house-user"></i> Select Address </h5>
                        <div className="row justify-content-around mt-1">
                        {location.map(location=> 
                            <PackageDiv 
                                isSelected = {stateLocation._id === location._id ? true : false}
                                id="location"
                                className="bg-light col-sm-3 mb-3 d-flex justify-content-between p-2" 
                                key={location._id}
                                onClick={e=>onClick(location, e)}>
                                <span className="text-center"> <span className="font-weight-bold">{location.street} </span>  {location.state} {location.country} </span>
                                {/* <span className="w-25 h-100 rounded-circle bg-white p-1"> <i className="fas fa-house-user"></i> </span> */}
                            </PackageDiv>
                        )}
                        </div>
                    </div>
                    <div className="text-right my-1">
                        <button disabled={stateCar._id != null && stateLocation._id != null ? false : true} className="btn btn-sm btn-primary px-4" onClick={()=> onClickShow()}> Next </button>
                    </div>
                </> : 
                <>
                    <span> You will need to have min of a car and an address before you can proceed. </span>
                    <Link to='/profile'> Visit Profile</Link>
                </> 
            }
        </div>
}

export default ProfileMenu
