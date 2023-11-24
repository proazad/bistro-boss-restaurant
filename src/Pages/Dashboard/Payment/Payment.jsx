import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PageTitle from "../PageTitle/PageTitle";
import CheckoutForm from "./CheckoutForm";
const stripePromise = loadStripe(import.meta.env.VITE_Payment_gateway_PK);
const Payment = () => {
  return (
    <div>
      <PageTitle heading={"Payment"} subheading={"Please Pay to Eat"} />
      <div>
        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
