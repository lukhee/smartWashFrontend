import React, {useState} from 'react'
import {connect} from "react-redux" 
import styled from 'styled-components'
import PropTypes from 'prop-types'
import {addLocation, deleteLocation} from '../../actions/profile'

const P = styled.p`
    font-size: 12px;
`

const LocationDiv = styled.div`
    box-shadow: rgb(184, 196, 194) 0px 4px 10px -4px;
    &:hover {
        background: #f8f9fa;
        box-shadow: rgb(184, 196, 194) 0px 9px 10px -4px;
    }
`

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

    const toggleForm = () => {
        setForm({street: '', state: '', country: ''})
        setLocation(!showLocation)
    }


    return (
        <div className="mb-5  bg-white rounded p-3">
            <h4> <span> <i className="fas fa-map-marker-alt text-warning"></i> </span> Address </h4>
            <div>
                <div className="row justify-content-between mb-2 m-0">
                    { locations.length > 0 &&
                        ( locations.map(location => (
                                <LocationDiv key={location._id} className="col-sm-3 rounded bg-white p-2 mb-2 border d-flex justify-content-between">
                                    <P className="mb-0 my-auto"> {location.street}, {location.state}, {location.country}. </P>
                                    <p className="btn text-danger my-auto" onClick={()=> deleteLocation(location._id)}> <i className="far fa-trash-alt"></i> </p>
                                </LocationDiv>
                            )
                        ))
                    }
                </div>

                {/* Add new Location */}
                <div className="col-md-6 m-auto p-2">
                    {
                        showLocation && 
                        <form style={{  boxShadow: "rgb(184, 196, 194) 0px 10px 10px -4px" }} className="form border p-2 rounded mb-3" onSubmit = {(e) => onSubmit(e)}>
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
                                <input className="form-control btn btn-light mb-3" type="submit" />
                            </div>
                        </form>
                    }
                </div> 
                    <LocationDiv className="p-3 text-center border rounded" onClick={()=>toggleForm()}>
                        {
                            !showLocation? <> <i className="fas fa-plus text-primary"></i>  Add Location </> :  <> <i className="fas fa-minus text-danger"></i>  Close Form </>
                        } 
                    </LocationDiv>
            </div>
        </div>
    )
}

Location.propTypes = {
    addLocation : PropTypes.func.isRequired,
    deleteLocation : PropTypes.func.isRequired,
}

export default connect(null, {addLocation, deleteLocation}) (Location)
