import React, {useState} from 'react'
import {connect} from "react-redux"
import PropTypes from 'prop-types'
import {addLocation, deleteLocation} from '../../actions/profile'

const Location = ({addLocation, deleteLocation, locations}) => {
    const [formData, setForm] = useState({
        street: '',
        state: '',
        country: ''
    })

    const [showLocation, setLocation] = useState(false)

    const {
        street, state, country
        } = formData

    const onChange = (e) => {
        setForm({
            ...formData,
            [e.target.name] : e.target.value
        })
    }
    
    const onSubmit = (e) => {
        e.preventDefault()
        addLocation(formData)
        setLocation(!showLocation)
        setForm({
            ...formData, street: '',  state: '', country: ''
        })
    }


    return (
        <div className="container">
            <h4> <span> <i className="fas fa-map-marker-alt text-warning"></i> </span> Address </h4>
            <div>
                <div className="row justify-content-between mb-2">
                    { locations.length > 0 &&
                        ( locations.map(location => (
                                <div key={location._id} className="col-sm-3 mb-2 border d-flex justify-content-between">
                                    <p> {location.street}, {location.state}, {location.country}. </p>
                                    <p className="btn text-danger" onClick={()=> deleteLocation(location._id)}> X </p>
                                </div>
                            )
                        ))
                    }
                </div>

                {/* Add new Location */}
                <div>
                    {
                        showLocation && 
                        <form className="form" onSubmit = {(e) => onSubmit(e)}>
                            <input 
                                name="street"
                                className="form-control form-control-sm my-2" 
                                value={street} type="text" 
                                onChange={e=> onChange(e)}
                                placeholder="enter street" />

                            <input 
                                name="state"
                                className="form-control form-control-sm my-2" 
                                value={state} type="text" 
                                onChange={e=> onChange(e)}
                                placeholder="enter state" />

                            <input 
                                name="country"
                                className="form-control form-control-sm my-2" 
                                value={country} type="text" 
                                onChange={e=> onChange(e)}
                                placeholder="enter Country" />

                            <div>
                                <input className="form-control w-50" type="submit" />
                                <button onClick={()=>setLocation(!showLocation)}> cancel </button>
                            </div>
                            </form>
                    }
                </div>
                {
                    !showLocation && 
                    <button onClick={()=>setLocation(!showLocation)}> Add Location </button>
                }
            </div>
        </div>
    )
}

Location.propTypes = {
    addLocation : PropTypes.func.isRequired,
    deleteLocation : PropTypes.func.isRequired,
}

export default connect(null, {addLocation, deleteLocation}) (Location)
