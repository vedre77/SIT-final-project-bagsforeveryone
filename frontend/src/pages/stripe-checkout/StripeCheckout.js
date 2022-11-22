import { loadStripe } from "@stripe/stripe-js"
import { useState } from "react";
import React from 'react'

function StripeCheckout() {

    const [stripeError, setStripeError] = useState(null);
    const [loading, setLoading] = useState(false);
    let stripePromise;

    const item = {
        price: "price_1M28GKIbEDX1qYr8f8lXypOL",
        quantity: 1
    }

    // check stripe redirect-to reference for additional options
    // (like adding logged in user email)
    const checkoutOptions = {
        lineItems: [item],
        mode: "payment",
        successUrl: `${window.location.origin}/success`,
        cancelUrl: `${window.location.origin}/cancel`
    }

    const redirectToCheckout = async () => {
        setLoading(true);
        // console.log("redirecting to checkout");

        const stripe = await getStripe();
        const { error } = await stripe.redirectToCheckout(checkoutOptions);
        // console.log("Stripe checkout error", error)

        if (error) setStripeError(error.message);
        setLoading(false);
    }

    const getStripe = () => {
        if (!stripePromise) {
            stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);
        }
        return stripePromise;
    }

    if (stripeError) alert(stripeError);
    return (
        <div>
            <p>StripeCheckout:</p>
            <button onClick={ redirectToCheckout } disabled={loading}>
                {loading ? 'PROCESSING' : 'CHECKOUT'}</button>
        </div>
    )
}

export default StripeCheckout