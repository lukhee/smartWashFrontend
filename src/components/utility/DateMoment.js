import React from 'react'
import Moment from 'react-moment'

function DateMement({date}) {
    return (
        <div style={{fontSize: "12px"}} className="text-secondary">
            <Moment format="YYYY/MM/DD">{date}</Moment>
        </div>
    )
}

export default DateMement
