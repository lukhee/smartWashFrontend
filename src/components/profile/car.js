import React, {Fragment, useState} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {addCar, deleteCar} from '../../actions/profile'


const Car = ({cars, addCar, deleteCar}) => {
    const [formData, setForm] = useState({
        brand: '',
        color: '',
        plate_no: ''
    })

    const [showLocation, setLocation] = useState(false)

    const {
        brand, color, plate_no
        } = formData

    const onChange = (e) => {
        setForm({
            ...formData,
            [e.target.name] : e.target.value
        })
    }
    
    const onSubmit = (e) => {
        e.preventDefault()
        addCar(formData)
        setLocation(!showLocation)
        setForm({
            ...formData, street: '',  state: '', country: ''
        })
    }

    return (
        <div>
            <Fragment> 
                { cars.length > 0 ? 
                    <p> car register </p> : 
                    <p> please add car </p>
                }
            </Fragment>
            <h4> Car Page </h4>
            <div>
                <div className="row justify-content-between mb-2">
                    { cars.length > 0 &&
                        ( cars.map(car => (
                                <div key={car._id} className="col-sm-3 mb-2 border d-flex justify-content-between">
                                    <p> {car.brand}, {car.color}, {car.plate_no}. </p>
                                    <p className="btn text-danger" onClick={()=> deleteCar(car._id)}> X </p>
                                </div>
                            )
                        ))
                    }
                </div>

                {/* Add new Car */}
                <div>
                    {
                        showLocation && 
                        <form className="form" onSubmit = {(e) => onSubmit(e)}>
                            <input 
                                name="brand"
                                className="form-control form-control-sm my-2" 
                                value={brand} type="text" 
                                onChange={e=> onChange(e)}
                                placeholder="car brand" />

                            <input 
                                name="color"
                                className="form-control form-control-sm my-2" 
                                value={color} type="text" 
                                onChange={e=> onChange(e)}
                                placeholder="color" />

                            <input 
                                name="plate_no"
                                className="form-control form-control-sm my-2" 
                                value={plate_no} type="text" 
                                onChange={e=> onChange(e)}
                                placeholder="plate_no" />

                            <div>
                                <input className="form-control w-50" type="submit" />
                                <button onClick={()=>setLocation(!showLocation)}> cancel </button>
                            </div>
                            </form>
                    }
                </div>
                {
                    !showLocation && 
                    <button onClick={()=>setLocation(!showLocation)}> Add Car </button>
                }
            </div>
        </div>
    )
}

Car.propTypes = {
    addCar : PropTypes.func.isRequired,
    deleteCar : PropTypes.func.isRequired,
}

export default connect(null, {addCar, deleteCar}) (Car)