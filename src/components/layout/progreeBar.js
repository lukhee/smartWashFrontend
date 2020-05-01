import React from 'react'
import styled from 'styled-components'


const Tracker = styled.div`
    width: 100%;
    height: 12px;
    margin: 15px auto;
    background: rgb(34, 34, 34);
    border-radius: 6px;
    box-shadow: inset 0 0 5px #000;
`

const InnerTracker = styled.div`
    width : ${p => p.value}%;
    height: 100%;
    /* background: #ffc30f; */
    border-radius: 4px;
`

const ProgressBar = ({showValue}) => {
    return (
        <Tracker>
            <InnerTracker className="bg-danger" value = {showValue * 25} />
        </Tracker>
    )
}

export default ProgressBar
