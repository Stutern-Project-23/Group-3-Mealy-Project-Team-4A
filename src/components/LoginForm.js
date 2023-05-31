import React from 'react';
import {useState}from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import mealy from '../components/group_193.svg';
import mail from '../components/mail.svg';
import password from '../components/password.svg';
// import eye from '../components/eye.svg';
import google_logo from '../components/logos_google-icon.svg'


const LoginForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);


  const closeModal = () => {
    setIsModalOpen(false);
  };

  const onSubmit = (data) => {
    console.log(data); // You can perform your login logic here
  };

  return (
    <div className="modal">
        <button onClick={closeModal} className="close-button">x</button>
      <h2 className='header'>Login to Mealy</h2>
      <p>
        Don't have an account? <Link to="/signup">Sign up</Link>
      </p>
      <img src={mealy} alt='mealy'/>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
        <img src={mail} alt='mail'/>
          <input type="text" placeholder='Email' {...register('email', { required: true })} />
          {errors.email && <span className="error">Email is required</span>}
        </div>
        <div>
        <img src={password} alt='password'/>
          <input type="password" placeholder='Password' {...register('password', { required: true })} />
          {errors.password && <span className="error">Password is required</span>}
          {/* <img src={eye} alt='eye'/> */}
        </div>
        <p className='p_left'>
          <Link to="/forgot-password">Forgot password?</Link>
        </p>
        <button  className='btn' type="submit">Login</button>
      </form>
      
      <button id='google_btn'>
        <img className='google_icon' src={google_logo} alt='google'/>
        Continue with Gmail</button>
    </div>
  );
};

export default LoginForm;
