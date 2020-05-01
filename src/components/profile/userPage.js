import React, {Fragment} from 'react'
import styled from 'styled-components'

const UserDiv = styled.div`
    box-shadow: rgb(184, 196, 194) 0px 4px 10px -4px;
`

const UserPage = ({user, phone_no}) => {
    return (
        <UserDiv className="p-3 rounded text-center bg-white mb-3">
            <Fragment>
                <img src={user.avatar} alt="user here" className="img-fluid  rounded mb-2" />
                <h5 className="pb-2"> {user.name} </h5>
                <p className="text-secondary"> {phone_no} </p>
                <p className="text-warning"> {user.email} </p>
                <button className="btn btn-sm btn-outline-primary"> Edit profile  </button>
            </Fragment>
        </UserDiv>
    )
}

export default UserPage
