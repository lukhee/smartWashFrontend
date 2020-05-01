import React from 'react'
import styled from 'styled-components'
import './spinner.css'

const SpinnerDiv = styled.div`
    display: flex;
    align-items: center;
    height: 100vh;
    /* width: 100vh; */
    justify-content: space-around
`

const Spinner = ()=>  {
    return (
        <SpinnerDiv>
            <div className="lds-grid"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>        
        </SpinnerDiv>
    )
}

export default Spinner
