import React, {Fragment} from 'react'

const Request = ({request}) => {
    return (
        <div>
            <h4> Request Page </h4>
            <Fragment>
                { request.length > 0 ? 
                    <p> Request register </p> : 
                    <p> please add Request </p>
                }
            </Fragment>
        </div>
    )
}

export default Request