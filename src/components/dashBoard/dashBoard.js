import React from 'react'
import { Link } from 'react-router-dom'
 
const Dashboard = ()=> {
    return (
        <div className="container">
            <Link to="/booking"> Booking  </Link>
            <Link to="/request"> Review bookings  </Link>
        </div>
    )
}

export default Dashboard
