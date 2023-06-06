import React from "react";
import "../styles/newpassword.css";

import Privacy from "../images/privacy.svg";
import { useForm } from "react-hook-form";
import ButtonLarge from "./Buttons";

function NewPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  console.log(errors);
  return (
    <div className="newpassword-container auth-padding auth-width">
      <h2 className="auth-title">Create New Password</h2>
      <img src={Privacy} alt="encryption illustration" />
      <p>
        Your password should contain{" "}
        <span>at least 8 characters and a number</span>
      </p>
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <div className="form-group">
          <label htmlFor="new-password">New Password</label>
          <input
            {...register("newPassword", {
              required: "This is required",
              minLength: {
                value: 6,
                message: "minimum password lenght is 6",
              },
            })}
            id="new-password"
            placeholder="password"
            type="text"
          />
          <p className="error-message">{errors.newPassword?.message}</p>
        </div>

        <div className="form-group">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            {...register("confirmPassword", { required: "This is required" })}
            id="confirm-password"
            placeholder="password"
            type="text"
          />
          <p className="error-message">{errors.confirmPassword?.message}</p>
        </div>

        <ButtonLarge text="SAVE" />
      </form>
    </div>
  );
}

export default NewPassword;
