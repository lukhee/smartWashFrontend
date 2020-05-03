import React from 'react'
import { setAlert } from '../../actions/alert'
import {withRouter} from 'react-router-dom'
import {connect} from "react-redux"
import StripeCheckout from "react-stripe-checkout";
import api from 'components/ApiUtility/baseApi'

const PaymentBtn = ({cost, history, setAlert}) => {
    
const publishableKey = "pk_test_4i8Q0wh1w1Qce0RoKW3gkF1K00c0F9UCqN";
const onToken = (token) => {
    const body = {
                amount: cost * 100,
                token: token
        };
        
    api.post("/profile/payment", body)
        .then(response => {
            setAlert("Payment Successful", "success")
            history.push('/dashboard')
        })
        .catch(error => {
            console.log("Payment Error: ", error);
            setAlert("Error in paymnet, please try again", "danger")
        });
    }

    return (
        <div>
            <StripeCheckout
                label="Make Payment" //Component button text
                name="Smart Wash" //Modal Header
                description="Awesome Product."
                panelLabel="Pay" //Submit button in modal
                amount={cost * 100} //Amount in cents $9.99
                token={onToken}
                stripeKey={publishableKey}
                // image="https://www.vidhub.co" //Pop-in header image
                billingAddress={false}
            />
        </div>
    )
}

export default connect(null, {setAlert}) (withRouter(PaymentBtn))
