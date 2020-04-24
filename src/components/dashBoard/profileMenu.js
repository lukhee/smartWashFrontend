import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const PackageDiv = styled.div`
    color:${p=> p.isSelected === true ? 'red !important' : null };
`

const ProfileMenu = ({profileData: {car, location}, onClick, show, onClickShow, stateCar, stateLocation})=> {
    return show === 1 &&
        <div className="p-4">
            <h5 className="mb-3">  Car and address package for home </h5>
            {
                car.length !== 0 && location.length !== 0 ?  
                <>
                    <div className="row justify-content-around border-bottom">
                        {car.map(car=> 
                            <PackageDiv 
                                isSelected = {stateCar._id === car._id ? true : false}
                                id="car"
                                className="bg-light mr-2 mb-2 px-5 py-2 btn col-sm-3" 
                                key={car._id}
                                onClick={e=>onClick(car, e)}>
                                <p> <span className="font-weight-bold">{car.brand} </span>  {car.color} </p>
                                <p className="lead"> {car.plate_no} </p>
                            </PackageDiv>
                        )}
                    </div>

                    <div className="mt-2">
                        <h5> Select Address </h5>
                        <div className="row justify-content-around mt-2">
                        {location.map(location=> 
                            <PackageDiv 
                                isSelected = {stateLocation._id === location._id ? true : false}
                                id="location"
                                className="bg-light mr-2 mb-2 px-5 py-2 btn col-sm-3" 
                                key={location._id}
                                onClick={e=>onClick(location, e)}>
                                <p> <span className="font-weight-bold">{location.street} </span>  {location.state} </p>
                                <p className="lead"> {location.country} </p>
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
