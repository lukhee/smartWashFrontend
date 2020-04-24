import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'

const AlertDiv = styled.div`
    position: absolute;
    top: 60px;
    right: 0;
    z-index: 1000;
    /* width: auto; */
`

const Alert = ({alerts}) => {
    return alerts !== null && alerts.length > 0  &&
        <AlertDiv>
            { alerts.map(alert => (
                <div className={`container px-5 alert alert-${alert.alertType}`} key={alert.id}>
                    { alert.msg}
                </div>
            ))}
        </AlertDiv>
}

Alert.propTypes = {
    alert: PropTypes.array
}

const mapStateToProps = (state) => {
    return {
        alerts: state.alert
    }
}

export default connect(mapStateToProps) (Alert)
