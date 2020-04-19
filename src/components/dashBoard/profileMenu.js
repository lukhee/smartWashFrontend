import React from 'react'

const ProfileMenu = ({profileData: {car, location}, onClick, show, onClickShow, stateCar, stateLocation})=> {
    return show === 1 &&
        <div className="p-4">
            <h5 className="mb-3">  Car and address package for home </h5>
            <div className="row justify-content-around border-bottom">
                {car.map(car=> 
                    <div 
                        id="car"
                        className="bg-light mr-2 mb-2 px-5 py-2 btn col-sm-3" 
                        key={car._id}
                        onClick={e=>onClick(car, e)}>
                        <p> <span className="font-weight-bold">{car.brand} </span>  {car.color} </p>
                        <p className="lead"> {car.plate_no} </p>
                    </div>
                )}
            </div>

            <div className="mt-2">
                <h5> Select Address </h5>
                <div className="row justify-content-around mt-2">
                {location.map(location=> 
                    <div 
                        id="location"
                        className="bg-light mr-2 mb-2 px-5 py-2 btn col-sm-3" 
                        key={location._id}
                        onClick={e=>onClick(location, e)}>
                        <p> <span className="font-weight-bold">{location.street} </span>  {location.state} </p>
                        <p className="lead"> {location.country} </p>
                    </div>
                )}
                </div>
            </div>
            <div className="text-right my-1">
                <button disabled={stateCar != null && stateLocation != null ? false : true} className="btn btn-sm btn-primary px-4" onClick={()=> onClickShow()}> Next </button>
            </div>
        </div>
}

export default ProfileMenu
