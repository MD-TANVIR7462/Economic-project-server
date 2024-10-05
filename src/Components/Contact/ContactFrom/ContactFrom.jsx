import emailjs from "emailjs-com";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize React Hook Form with default values
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  // Handle form submission
  const onSubmit = async (formData) => {
    try {
      console.log(formData);
      setIsSubmitting(true);
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_USER_ID
      );
      toast.success("Message Sent", {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      reset();
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex w-screen items-center justify-center">
      <div className="container mx-auto my-4 px-4 lg:px-20">
        <div className="my-4 mr-auto w-full rounded-3xl p-8 shadow-2xl md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40">
          <div className="flex">
            <h1 className="text-2xl md:text-5xl font-bold uppercase">
              Send us a message
            </h1>
          </div>
          <form
            className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2"
            onSubmit={handleSubmit(onSubmit)}
          >
            {/* First Name */}
            <Controller
              name="firstName"
              control={control}
              rules={{ required: "First Name is required", minLength: 3 }}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  placeholder="First Name*"
                  className="focus:shadow-outline z-10 mt-2 w-full rounded-lg bg-gray-100 p-3 text-gray-900 focus:outline-none"
                />
              )}
            />
            {errors.firstName && (
              <p className="text-red-500">
                {errors.firstName.message ||
                  "First Name must be at least 3 characters."}
              </p>
            )}

            {/* Last Name */}
            <Controller
              name="lastName"
              control={control}
              rules={{ required: "Last Name is required", minLength: 3 }}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  placeholder="Last Name*"
                  className="focus:shadow-outline z-10 mt-2 w-full rounded-lg bg-gray-100 p-3 text-gray-900 focus:outline-none"
                />
              )}
            />
            {errors.lastName && (
              <p className="text-red-500">
                {errors.lastName.message ||
                  "Last Name must be at least 3 characters."}
              </p>
            )}

            {/* Email */}
            <Controller
              name="email"
              control={control}
              rules={{ required: "Email is required", pattern: /^\S+@\S+$/i }}
              render={({ field }) => (
                <input
                  {...field}
                  type="email"
                  placeholder="Email*"
                  className="focus:shadow-outline z-10 mt-2 w-full rounded-lg bg-gray-100 p-3 text-gray-900 focus:outline-none"
                />
              )}
            />
            {errors.email && (
              <p className="text-red-500">Invalid email address</p>
            )}

            {/* Phone */}
            <Controller
              name="phone"
              control={control}
              rules={{ required: "Phone number is required", minLength: 10 }}
              render={({ field }) => (
                <input
                  {...field}
                  type="tel"
                  placeholder="Phone*"
                  className="focus:shadow-outline z-10 mt-2 w-full rounded-lg bg-gray-100 p-3 text-gray-900 focus:outline-none"
                />
              )}
            />
            {errors.phone && (
              <p className="text-red-500">
                Phone number must be at least 10 digits
              </p>
            )}

            {/* Message */}
            <Controller
              name="message"
              control={control}
              rules={{ required: "Message is required", minLength: 5 }}
              render={({ field }) => (
                <textarea
                  {...field}
                  placeholder="Message*"
                  className="focus:shadow-outline z-10 mt-2 h-32 w-full rounded-lg bg-gray-100 p-3 text-gray-900 focus:outline-none"
                ></textarea>
              )}
            />
            {errors.message && (
              <p className="text-red-500">
                Message must be at least 5 characters
              </p>
            )}

            {/* Submit Button */}
            <div className="z-10 my-2 w-full md:col-span-2">
              <button
                type="submit"
                className="focus:shadow-outline w-full rounded-lg bg-purple-800 bg-opacity-70 p-3 text-sm font-bold uppercase tracking-wide text-gray-100 focus:outline-none"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
        </div>

        {/* Office Info */}
        <div className="ml-auto w-full rounded-2xl bg-blue-900 bg-opacity-60 px-8 py-12 lg:-mt-96 lg:w-2/6">
          <div className="flex flex-col text-white">
            <h1 className="my-4 text-4xl font-bold uppercase">
              Drop in our office
            </h1>
            <p className="text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>

            <div className="my-4 flex w-2/3 lg:w-1/2">
              <div className="flex flex-col">
                <i className="fas fa-map-marker-alt pr-2 pt-2" />
              </div>
              <div className="flex flex-col">
                <h2 className="text-2xl">Main Office</h2>
                <p className="text-gray-300">
                  Hillview RA, Pleasant Grove, Chittagong
                </p>
              </div>
            </div>

            <div className="my-4 flex w-2/3 lg:w-1/2">
              <div className="flex flex-col">
                <i className="fas fa-phone-alt pr-2 pt-2" />
              </div>
              <div className="flex flex-col">
                <h2 className="text-2xl">Call Us</h2>
                <p className="text-gray-300">Tel: 01998863753</p>
                <p className="text-gray-300">Fax: hellow@tanvir</p>
              </div>
            </div>

            <div className="my-4 flex w-2/3 lg:w-1/2">
              <a
                href="#"
                className="mx-1 inline-block h-8 w-8 rounded-full pt-1 text-center"
              >
                <i className="fab fa-facebook-f text-white" />
              </a>
              <a
                href="#"
                className="mx-1 inline-block h-8 w-8 rounded-full pt-1 text-center"
              >
                <i className="fab fa-linkedin-in text-white-900" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
