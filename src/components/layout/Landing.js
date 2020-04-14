import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {Button} from 'components/utility'

const ParentDiv = styled.div`
    background: #3384f0;
    width: 100%;
    padding-top: 50px;
    height: 100vh;
    min-height: 100vh;
    box-sizing: border-box
`

const LandingPage = ({})=> {
    return (
        <ParentDiv>
            <h1> APP PAGE </h1>
            content here
        </ParentDiv>
    )
}

LandingPage.propTypes = {

}

export default LandingPage
