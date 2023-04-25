import React from "react";
import Stripe from "stripe";
import STRIPE_PUBLISHABLE from "../constants/Stripe";

const StripeComponent = () => {
  const stripe = new Stripe(STRIPE_PUBLISHABLE);

  (async () => {
    const customer = await stripe.customers.create({
      email: "customer@example.com", // Go ahead and update the form so that it collects the email and passes it here, ahead of time, instead of figuring it out later.
    });

    
  })();
};

export default StripeComponent;
