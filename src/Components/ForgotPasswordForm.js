import "../styles/forgotpassword.css";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import ButtonLarge from "./Buttons";
import axios from "axios";

export default function ForgotPasswordForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email is required").email("Email is invalid"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;

  const onSubmit = (data) => {
    setIsSubmitting(true);
    setSubmitSuccess(false);
    setSubmitError(null);

    axios
      .post("https://mealyapp-bdev.onrender.com/api/v1/user/forgotPassword", data)
      .then((response) => {
        console.log(response.data);
        setIsSubmitting(false);
        setSubmitSuccess(true);
      })
      .catch((error) => {
        console.log(error);
        setIsSubmitting(false);
        setSubmitError("Given email doesn't exist with us. Please Signup.");
      });
  };

  return (
    <form className="forgot-password_form" onSubmit={handleSubmit(onSubmit)}>
      <div className="forgot-password_input-container">
        <input
          name="email"
          type="text"
          {...register("email")}
          className={`forgot-password_email-input ${
            errors.email ? "is-invalid" : ""
          }`}
          placeholder="email address"
        />
        <p className="invalid-feedback">{errors.email?.message}</p>
      </div>

      {!isSubmitting && !submitSuccess && !submitError && (
        <ButtonLarge type="submit" text="SEND" />
      )}

      {isSubmitting && <p className="feedback submit-feedback">Sending...</p>}

      {submitSuccess && <p className="feedback  success-feedback">Form submitted successfully!</p>}

      {submitError && <p className="feedback  error-feedback">{submitError}</p>}
    </form>
  );
}
