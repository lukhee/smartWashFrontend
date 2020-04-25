import React, {Fragment, useState} from 'react'
import PropTypes from 'prop-types' 
import styled from 'styled-components'
import { connect } from 'react-redux'
import {addCar, deleteCar} from '../../actions/profile'

const P = styled.p`
    font-size: 12px;
`

const BoxShadow = styled.div`
    box-shadow: rgb(184, 196, 194) 0px 4px 10px -4px;
    &:hover {
        background: #f8f9fa;
        box-shadow: rgb(184, 196, 194) 0px 9px 10px -4px;
    }
`


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

    const toggleForm = () => {
        setForm({brand: '', color: '', plate_no: ''})
        setLocation(!showLocation)
    }

    return (
        <div className="container mb-5  bg-white rounded p-3">
            <Fragment> 
                { cars.length > 0 ? 
                    <>  
                        <h4> <span> <i className="fas fa-car text-info"></i> </span> Cars </h4>
                        <div>
                            <div className="row justify-content-between mb-2 m-0">
                                { cars.length > 0 &&
                                    ( cars.map(car => (
                                            <BoxShadow key={car._id} className="col-sm-3 rounded bg-white p-2 mb-2 border d-flex justify-content-between">
                                                <P className="mb-0 my-auto"> {car.brand}, {car.color}, {car.plate_no}. </P>
                                                <p className="btn text-danger my-auto" onClick={()=> deleteCar(car._id)}><i className="far fa-trash-alt"></i> </p>
                                            </BoxShadow>
                                        )
                                    ))
                                }
                            </div>

                            {/* Add new Car */}
                            <div className="col-md-6 m-auto p-2">
                                {
                                    showLocation && 
                                    <form style={{  boxShadow: "rgb(184, 196, 194) 0px 10px 10px -4px" }} className="form border p-2 rounded mb-3" onSubmit = {(e) => onSubmit(e)}>
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
                                            <input className="form-control btn btn-light mb-3" type="submit" />
                                        </div>
                                    </form>
                                }
                            </div>
                            <BoxShadow className="p-3 text-center border rounded" onClick={()=>toggleForm()}>
                                {
                                    !showLocation? <> <i class="fas fa-plus text-primary"></i>  Add Location </> :  <> <i className="fas fa-minus text-danger"></i>  Close Form </>
                                }
                            </BoxShadow>
                        </div>
                    </> : 
                    <p> please add car </p>
                }
            </Fragment>
        </div>
    )
}

Car.propTypes = {
    addCar : PropTypes.func.isRequired,
    deleteCar : PropTypes.func.isRequired,
}

export default connect(null, {addCar, deleteCar}) (Car)