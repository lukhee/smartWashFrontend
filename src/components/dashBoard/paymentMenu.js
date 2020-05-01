import React from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'

const PaymentMenu = ({onChange, selectedDate, show, onClickShow})=> {
    return show === 3 &&
        <div className="mb-5 text-center">
            <div className="col-sm-6 border m-auto p-2 py-4 mb-4">
                <div className="mb-4">
                    <h5 className="mb-3"> <i className="far fa-clock"></i> select Date and Time</h5>
                <DatePicker
                    id='datePicker'
                    className="px-2 m-2"
                    placeholderText="Click to select a date" 
                    selected={selectedDate}
                    onChange={(date)=>onChange(date)}
                    minDate={new Date()}
                    dateFormat="MMMM d, yyyy h:mm aa"
                    showTimeInput
                    />
                </div>

                <div> 
                    <h5><i className="fab fa-amazon-pay"></i> Method Of Payment </h5>
                    <p style={{fontSize: "14px", color: "grey"}}> Payment will be made after review </p>
                </div>
            </div>
            <div className="text-right my-2">
                <button disabled={selectedDate != null ? false : true} className="btn btn-sm btn-primary px-4" onClick={()=> onClickShow()}> Next </button>
            </div>
        </div>
}

export default PaymentMenu