import React, {Fragment, useState} from 'react'
import styled from 'styled-components'

const UserDiv = styled.div`
    box-shadow: rgb(184, 196, 194) 0px 4px 10px -4px;
`

const UserPage = ({user, phone_no, updateUser}) => {
    const [editField, toggleEdit] = useState(false)
    const [userInfo, setInfo] = useState({
        home: phone_no,
        name: user.name
    })

    const {home, name} = userInfo
    const onChange = (e) => {
        setInfo({
            ...userInfo,
            [e.target.name] : e.target.value
        })
    }

    const onSubmitHandler = (e) => {
        e.preventDefault()
        updateUser(userInfo)
    }
    return (
        <UserDiv className="p-3 rounded text-center bg-white mb-3">
            <Fragment>
                <img src={user.avatar} alt="user here" className="img-fluid  rounded mb-2" />
                <form onSubmit={onSubmitHandler}>
                    {!editField?
                        <h6 className="py-2"> {user.name} </h6> :
                        <input name="name" onChange={onChange} value={name} required className="form-control mb-2 w-75 mx-auto text-center form-control-sm" type="text" placeholder="full name"/>
                    }
                    {!editField?
                        <p className="text-secondary"> {phone_no} </p> :
                        <input name="home" onChange={onChange} value={home} required className="form-control mb-2 w-75 mx-auto text-center form-control-sm" type="text" placeholder="full name"/>
                    }
                    <p className="text-warning"> {user.email} </p>
                    {!editField?
                        <button onClick={()=>toggleEdit(!editField)} className="btn btn-sm btn-outline-secondary"> Edit profile </button> :
                        <div>
                            <button className="btn btn-sm btn-primary mr-1"> save </button>
                            <button type="submit" onClick={()=>toggleEdit(!editField)} className="btn btn-sm btn-light"> cancel</button>
                        </div>
                    }
                </form>
            </Fragment>
        </UserDiv>
    )
}

export default UserPage
