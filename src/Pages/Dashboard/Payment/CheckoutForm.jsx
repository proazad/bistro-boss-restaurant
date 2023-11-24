import {
    CardElement,
    useElements,
    useStripe
} from "@stripe/react-stripe-js";
import { useState } from "react";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState(null);
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (!card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("Payment Method Error", error);
      setErrorMessage(error.message);
    } else {
      console.log(paymentMethod);
      setErrorMessage("");
    }
  };
  return (
    <div className="w-full">
      <form
        onSubmit={handleSubmit}
        className="border border-secondary p-8 w-[600px] rounded-lg"
      >
        <CardElement />
        <button
          className="btn btn-sm btn-secondary my-3"
          type="submit"
          disabled={!stripe || !elements}
        >
          Pay
        </button>
        {/* Show error message to your customers */}
        {errorMessage && <p className="text-red-600">{errorMessage}</p>}
      </form>
    </div>
  );
};

export default CheckoutForm;
