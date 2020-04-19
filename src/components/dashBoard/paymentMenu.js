import React from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'

const PaymentMenu = ({onChange, selectedDate, show, onClickShow})=> {
    return show === 3 &&
        <div className="p-4 mb-3 text-center">
            <h5 className="mb-3"> Payment and Date </h5>
            <div className="mb-4">
                <h5> select Date and Time</h5>
            <DatePicker
                id='datePicker'
                placeholderText="Click to select a date" 
                selected={selectedDate}
                onChange={(date)=>onChange(date)}
                minDate={new Date}
                dateFormat="MMMM d, yyyy h:mm aa"
                showTimeInput
                />
            </div>


            <div> 
                <h5> Method Of Payment </h5>
                <button className="btn bt-sm btn-primary mr-5"> Cash </button>
                <button className="btn bt-sm btn-danger"> Cash </button>
            </div>
            <div className="text-right my-1">
                <button disabled={selectedDate != null ? false : true} className="btn btn-sm btn-primary px-4" onClick={()=> onClickShow()}> Next </button>
            </div>
        </div>
}

export default PaymentMenu