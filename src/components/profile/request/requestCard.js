import React, {useState} from 'react';
import styled from 'styled-components';
import DateFormat from '../../utility/DateMoment'
import {secondary, danger, success} from '../../utility/Colors'

const RequestContainer = styled.div`
    box-shadow: rgb(184, 196, 194) 0px 4px 10px -4px;
    &:hover {
        background: #f8f9fa;
        box-shadow: rgb(184, 196, 194) 0px 9px 10px -4px;
    }
`;

const Status = styled.h6`
    color : ${ p=> p.status === "resolved" ? success : p.status === "pending" ? secondary : danger };
`

const RequestCard = ({request, stopRequest}) => {
    const [showMore, toggleMore] = useState(null)

    const showMoreHandler = () => {
        if(showMore !== null) return toggleMore(null)
        toggleMore(request._id)
    }

    return (
        <RequestContainer className='container col-md-8 border p-2 rounded mb-2 bg-white' style={{fontSize: "0.7rem"}}>
            <div className='d-flex justify-content-between w-md-75'>
                <div>
                    <h6>{request.car.brand}</h6>
                    <span className='d-block'>{request.package}</span>
                    <DateFormat date={request.date} />
                </div>
                <div className='text-center align-content-center'>
                    <Status status={request.status} className="text-capitalize"> {request.status} </Status>
                    <span className="btn"> <i onClick={showMoreHandler} className={showMore === null  ? "fas fa-chevron-down" : "fas fa-chevron-up"}></i> </span>
                </div>
            </div>
            { showMore === request._id &&
                <div className="p-2 border-top border-danger">
                    <div className=" row justify-content-between">
                        <div className="col-5">
                            <h6> Location </h6>
                            <span className="d-block"> {request.location.street}, {request.location.state} </span>
                            <span> {request.location.country} </span>
                        </div>
                        <div className="col-5 text-right">
                            <h6> Payment </h6>
                            <span className="d-block">Amount : <span className="text-secondary"> {request.payment.totalCost} </span> </span>
                            <span> Payment : <span className="text-primary"> PayPall </span></span>
                        </div>
                    </div>
                    <div>
                        { request.status === "pending" &&
                            <button onClick={()=>stopRequest(request._id)} className="btn btn-sm btn-outline-danger rounded-0 mt-2"> Cancell </button>
                        }
                    </div>
                </div>
            }
        </RequestContainer>
    );
};

export default RequestCard;