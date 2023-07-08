import React from "react";
import { useForm } from "react-hook-form";
import Biker from "../images/bike.png";
import Name from "../images/name.png";
import Password from "../images/password.png";
import Email from "../images/email.png";
import "../styles/SignUp.css"

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <div className='bg-white text-black px-14 py-14'>
        <div className='flex justify-center items-center flex-col'>
          <h1 className='text-4xl font-bold text-center'>Sign Up to Mealy</h1>
          <p className='text-2xl text-center'>
            Already have an Account?{" "}
            <a href='#' className='text-[#6750A4]'>
              Login
            </a>
          </p>
          <img src={Biker} alt='' className='w-64' />
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className='text-2xl w-40rem'
        >
          <div className='flex items-center border-b-2 mb-6 border-[#67646A]'>
            <img src={Name} alt='' />
            <input
              {...register("Name", { required: true })}
              placeholder='Name'
              className='border-0 focus:!outline-none'
            />
          </div>

          <div className='flex items-center border-b-2 mb-6 border-[#67646A]'>
            <img src={Email} alt='' className="w-7" />
            <input
              {...register("mail", { required: "Email Address is required" })}
              aria-invalid={errors.mail ? "true" : "false"}
              placeholder='Email'
              className='border-0 focus:!outline-none'
            />
          </div>
          {errors.mail && <p role='alert'>{errors.mail?.message}</p>}
          <div className='flex items-center border-b-2 mb-6 border-[#67646A]'>
            <img src={Password} alt='' />
            <input
              {...register("password", {
                required: true,
              })}
              placeholder='Password'
              className='border-0 focus:!outline-none'
            />
          </div>
          <input type='submit' className='bg-[#6750A4] border-0 text-white' value='Sign up' />
        </form>
      </div>
    </div>
  );
};

export default SignUp;
