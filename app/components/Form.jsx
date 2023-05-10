"use client";

import { useAuth } from "../hooks/useAuth";

const Form = ({ isSigninModal, input, disabled, setInput, setShowModal }) => {
  const { signin, signup } = useAuth();
  const inputStyle = `border-2 rounded-lg px-2 py-3 w-full focus:outline-none`;

  const changeHandler = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    if (isSigninModal) {
      const obj = {
        email: input.email,
        password: input.password,
      };
      await signin(obj, setShowModal);
    } else {
      await signup(input, setShowModal);
    }
  };

  return (
    <form onSubmit={submitHandler} className='flex flex-col space-y-2 w-full'>
      {!isSigninModal && (
        <div className='flex space-x-3'>
          <input
            type='text'
            name='firstName'
            placeholder='First Name'
            className={inputStyle}
            value={input.firstName}
            onChange={changeHandler}
          />
          <input
            type='text'
            name='lastName'
            placeholder='Last Name'
            className={inputStyle}
            value={input.lastName}
            onChange={changeHandler}
          />
        </div>
      )}
      <input
        type='text'
        name='email'
        placeholder='Email'
        className={inputStyle}
        value={input.email}
        onChange={changeHandler}
      />
      {!isSigninModal && (
        <div className='flex space-x-3'>
          <input
            type='text'
            name='phone'
            placeholder='Phone'
            className={inputStyle}
            value={input.phone}
            onChange={changeHandler}
          />
          <input
            type='text'
            name='city'
            placeholder='City'
            className={inputStyle}
            value={input.city}
            onChange={changeHandler}
          />
        </div>
      )}
      <input
        type='text'
        name='password'
        placeholder='Password'
        className={inputStyle}
        value={input.password}
        onChange={changeHandler}
      />
      <button
        type='submit'
        disabled={disabled}
        className={` text-white rounded-lg py-4 mt-96 ${
          disabled ? "bg-gray-500 cursor-not-allowed" : "bg-red-600"
        }`}
      >
        {isSigninModal ? "SIGN IN" : "CREATE ACCOUNT"}
      </button>
    </form>
  );
};

export default Form;
