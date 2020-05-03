import React from 'react'
import Moment from 'react-moment'
import PaymentBtn from './payment'
import { PickUp } from '../../images/svg/cars/index'


const review = ({data: { car, location, pkg, add_on, selectedDate, totalCost}, show, onClick}) => {
    return show === 4 &&
        (<div className=" col-md-5 m-auto bg-light p-3 border border-white">
            <h5> Review and Pay </h5>
            <div className="row justify-content-around py-2 border-bottom border-white">
                <div className="col-3 col-md-2 h-100 rounded-circle bg-white p-1"> <PickUp/> </div>
                <div className="col-7 col-md-8 d-flex align-items-center ml-3 text-capitalize"> 
                    <div style={{fontSize: "14px", textAlign: "left"}}>
                        <h5 style={{fontSize: "14px", margin: "0"}}> {car.brand} </h5>
                        <span style={{fontSize: "14px"}} className="text-secondary"> {location.street + ' ' + location.state} </span>
                        <h5 style={{fontSize: "14px"}}> <Moment format="LLL">{selectedDate}</Moment>  </h5>
                    </div>
                </div>
            </div>
            <div className="border-bottom border-white px-3">
                <span style={{fontSize: "14px"}} className="text-secondary"> Package & Add_on</span> 
                <p className="d-flex justify-content-between"> <span> {pkg.name} </span> <span> ₦{pkg.cost} </span>  </p>
                { add_on ?
                    (<p className="d-flex justify-content-between"> <span> {add_on.name} </span> <span> ₦{add_on.cost} </span>  </p>) : null
                }
            </div>
            <p className="d-flex justify-content-between px-3"> <span> Total Cost </span> <span> ₦{totalCost} </span>  </p>
            <div className="text-center mt-2">
                <PaymentBtn  cost = {totalCost}/>
                {/* <button onClick={()=>onClick()} className="btn btn-primary btn-sm px-4"> Book </button>  */}
            </div>
        </div>)
}

export default review