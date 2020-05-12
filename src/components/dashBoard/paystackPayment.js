import React, {Component} from 'react'
import PaystackButton from 'react-paystack';

class Paystack extends Component {

    state = {
        key: 'pk_live_fed78f15f09018e4d7515b556778ea8874ba2f43', //PAYSTACK PUBLIC KEY
        email: "foobar@example.com",  // customer email
        amount: 10000 //equals NGN100,
    }

    callback = (response) => {
        console.log(response); // card charged successfully, get reference here
    }

    close = () => {
        console.log("Payment closed");
    }

    getReference = () => {
        //you can put any unique reference implementation code here
        let text = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-.=";

        for( let i=0; i < 15; i++ )
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
    }

render() {
    return (
        <div>
            <PaystackButton
                text="Make Payment"
                class="payButton"
                callback={this.callback}
                close={this.close}
                disabled={true} /*disable payment button*/
                embed={true} /*payment embed in your app instead of a pop up*/
                reference={this.getReference()}
                email={this.state.email}
                amount={this.state.amount}
                paystackkey={this.state.key}
                tag="button" /*it can be button or a or input tag */
            />
        </div>
        );
    }
}

export default Paystack