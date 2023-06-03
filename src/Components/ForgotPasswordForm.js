import "../styles/forgotpassword.css";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

export default function ForgotPasswordForm() {
  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email is required").email("Email is invalid"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;

  const onSubmit = (data) => console.log(data);
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

      <button className="forgot-password_btn" type="submit">
        SEND
      </button>
    </form>
  );
}
