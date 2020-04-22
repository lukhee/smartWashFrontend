import React from 'react'

const CreateProfile = ({onChange, onSubmit, showForm, formData: { home, street, state, country }})=> {
    return showForm  &&
        <div>
             <form className="form" onSubmit={e=> onSubmit(e)}>
                <div className="form-group">
                    <input type="number" className="form-control form-control-sm" value={home} onChange={e=> onChange(e)} placeholder="* Phone number" name="home" required />
                </div>

                <div className="form-group">
                    <input type="text" className="form-control form-control-sm" value={street} onChange={e=> onChange(e)} placeholder="* Street " name="street" required />
                </div>

                <div className="form-group">
                    <input type="text" className="form-control form-control-sm" value={state} onChange={e=> onChange(e)} placeholder="* State" name="state" required />
                </div>
                
                <div className="form-group">
                    <input type="text" className="form-control form-control-sm" value={country} onChange={e=> onChange(e)} placeholder="* Country" name="country" required />
                </div>
                <div className="form-group">
                    <input type="submit" className="btn btn-danger btn-sm my-1 rounded-0 mr-1" />
                </div>
            </form>
        </div>
}

export default CreateProfile