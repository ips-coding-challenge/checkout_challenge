import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import * as yup from "yup";
import Input from "./Input";
import InputSelect from "./InputSelect";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  phone: yup.number().min(10).typeError("You must enter a number").required(),
  fullname: yup.string().required(),
  address: yup.string().required(),
  city: yup.string().required(),
  country: yup.mixed().oneOf(["fr", "uk", "es"]),
  postalcode: yup.number().typeError("You must enter a number").required(),
});

const Alert = ({ type, message }) => {
  return <div className={`alert alert-${type}`}>{message}</div>;
};

const ContactForm = () => {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const [success, setSuccess] = useState(false);

  const onSubmit = (data) => {
    console.log(`Errors`, errors);
    console.log(`Data`, data);
    setSuccess(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => {
      setSuccess(false);
    }, 3000);
  };

  return (
    <div className="mt-10 md:mr-4 ">
      {success && (
        <Alert type="success" message="Informations registered! Thank you" />
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-6">
          <h3 className="text-gray1 font-lg font-semibold mb-4">
            Contact Information
          </h3>
          <Input
            name="email"
            label="E-mail"
            type="text"
            icon="email"
            placeholder="Enter your email..."
            ref={register}
            error={errors.email?.message}
          />
          <Input
            name="phone"
            label="Phone"
            type="number"
            icon="phone"
            placeholder="Enter your phone"
            ref={register}
            error={errors.phone?.message}
          />
        </div>
        <div>
          <h3 className="text-gray1 font-lg font-semibold mb-4">
            Shipping address
          </h3>
          <Input
            name="fullname"
            label="Full name"
            type="text"
            icon="person"
            placeholder="Rodney Cotton"
            ref={register}
            error={errors.fullname?.message}
          />
          <Input
            name="address"
            label="Address"
            type="text"
            icon="home"
            placeholder="Your address..."
            ref={register}
            error={errors.address?.message}
          />
          <Input
            name="city"
            label="City"
            type="text"
            icon="location_city"
            placeholder="Your city..."
            ref={register}
            error={errors.city?.message}
          />
          <div className="flex">
            <InputSelect
              className="max-w-50 first:mr-4"
              name="country"
              label="Country"
              type="text"
              icon="location_city"
              placeholder="Your country..."
              ref={register}
              error={errors.country?.message}
            />
            <Input
              className="max-w-50"
              name="postalcode"
              label="Postal code"
              type="text"
              icon="markunread_mailbox"
              placeholder="Your postal code..."
              ref={register}
              error={errors.postalcode?.message}
            />
          </div>
        </div>
        <div className="mb-6">
          <input className="mr-2" type="checkbox" name="checkbox" />
          <label
            className="text-sm text-gray2 font-semibold"
            htmlFor="checkbox"
          >
            Save this information for next time
          </label>
        </div>
        <div className="flex justify-end">
          <button
            className="rounded-12 self-end text-white bg-orange py-4 px-8 hover:opacity-75 transition duration-200"
            type="submit"
            onSubmit={onSubmit}
          >
            Continue
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
