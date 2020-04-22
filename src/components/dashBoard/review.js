import React from 'react'
import Moment from 'react-moment'

const review = ({data: { car, location, pkg, add_on, selectedDate, totalCost}, show, onClick}) => {
    return show === 4 &&
        <div className="p-4 text-center">
            Review and Book
            <p> car  : {car ? car.brand : null}  </p>
            <p> location  : {location? location.street + ' ' + location.state: null} </p>
            <p> package  : {pkg.name} </p>
            <p> add_on  : {add_on.name} </p> 
            <p> time and date  : <Moment format="YYYY/MM/DD">{selectedDate}</Moment> </p>
            <p> Total Cost  : {totalCost} </p> 
            <button onClick={()=>onClick()} className="btn btn-primary"> Book </button> 
        </div>
}

export default review