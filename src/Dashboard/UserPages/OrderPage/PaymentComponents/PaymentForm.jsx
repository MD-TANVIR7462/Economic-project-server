import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { GoAlertFill } from "react-icons/go";
import { AuthContext } from "../../../../Components/Provider/Authprovider";
import Swal from "sweetalert2";
import UseBookmarks from "../../../../Components/Hooks/UseBookmarks";

const PaymentForm = ({ ProductBookmark, price, closeModal }) => {
  const [error, seterror] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [process, setprocess] = useState(false);
  const [tranjectionID, settrandjection] = useState("");
  const { user } = useContext(AuthContext);
  const stripe = useStripe();
  const elements = useElements();
  const { bookmarkProducts, isLoading, refetch } = UseBookmarks();

  useEffect(() => {
    fetch(
      "https://ecommerce-projects-server.vercel.app/create-payment-intent",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ price }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setClientSecret(data.clientSecret);
      });
  }, [price]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      seterror(error.message);
    } else {
      seterror("");
    }
    setprocess(true);
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displaName || "unknown",
            email: user?.email || "No-Email",
          },
        },
      });
    if (confirmError) {
      seterror(confirmError.message);
    }
    setprocess(false);
    if (paymentIntent.status === "succeeded") {
      settrandjection(paymentIntent.id);
      const tranjectId = paymentIntent.id;
      const {
        _id,
        name,
        price,
        color,
        material,
        image,
        brand,
        subcategory,
        category,
        ProductTotal,
        Quantity,
        oldID,
        selectedSize,
        email,
      } = ProductBookmark;

      const date = new Date();

      const newdata = {
        BookMarkedId: _id,
        AvailableProducts: ProductTotal - Quantity,
        name,
        price,
        color,
        material,
        image,
        brand,
        subcategory,
        category,
        ProductTotal,
        Quantity,
        oldID,
        selectedSize,
        email,
        date,
        tranjectId,
      };

      fetch("https://ecommerce-projects-server.vercel.app/paymentcomplete", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newdata),
      })
        .then((res) => res.json())
        .then((data) => {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Payment Complete!!",
            showConfirmButton: false,
            timer: 1500,
            customClass: {
              popup: "bg-base-300 border-4 border-gray-300 rounded-lg",
              title: " text-lg font-bold text-center mb-2",
            },
          });
          closeModal(_id);
          refetch();
        });
    }
  };
  return (
    <>
      <form className="mt-3 md:mt-5" onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "12px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />

        <p className="flex mt-2 items-center justify-between">
          <button
            type="submit"
            disabled={!stripe || !clientSecret || process}
            className="relative rounded md:px-5 md:py-2.5 px-2 py-1 mt-6 overflow-hidden group bg-green-500 hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300"
          >
            <span class="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
            <span class="relative">Pay</span>
          </button>
          {error && (
            <p className="text-red-500 items-center gap-1 pt-3 flex text-xs md:text-sm">
              <GoAlertFill className="md:text-xl" />
              {error}
            </p>
          )}
        </p>
      </form>
    </>
  );
};

export default PaymentForm;
