"use client";

import { useEffect, useState } from "react";
import { useContextProvider } from "../context/AuthContext";
import Spinner from "./Spinner";
import Form from "./Form";
import CrossButon from "./CrossButon";

const AuthModal = ({ setShowModal, isSigninModal }) => {
  const { authState } = useContextProvider();
  const { loading } = authState;

  const [disabled, setDisabled] = useState(true);
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    password: "",
  });

  useEffect(() => {
    if (isSigninModal) {
      if (input.email && input.password) setDisabled(false);
      else setDisabled(true);
    } else {
      if (
        input.firstName &&
        input.lastName &&
        input.email &&
        input.city &&
        input.phone &&
        input.password
      )
        setDisabled(false);
      else setDisabled(true);
    }
  }, [input]);

  return (
    <>
      {/* Backdrop */}

      <div
        onClick={() => setShowModal(false)}
        className='fixed top-0 left-0 z-10 w-screen h-screen p-4 overflow-x-hidden overflow-y-auto bg-gray-800 bg-opacity-60'
      />

      {/* Modal */}

      {/* Spinner */}

      {loading && (
        <div className='fixed bg-white rounded-lg shadow z-20 w-96 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 h-96'>
          <Spinner />
        </div>
      )}

      {/* Main Modal */}

      {!loading && (
        <div className='fixed bg-white rounded-lg shadow z-20 w-96 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 '>
          <CrossButon setShowModal={setShowModal} />
          <div className='py-10 flex flex-col items-center px-8'>
            <p className='font-bold text-sm'>
              {isSigninModal ? "SIGN IN" : "CREATE ACCOUNT"}
            </p>
            <span className='border-t-2 border-gray-200 w-full my-4' />
            <p className='text-2xl mb-4 text-center'>
              {isSigninModal
                ? "Log Into Your Account"
                : "Create Your OpenTable Account"}
            </p>
            {/* Form */}
            <Form
              isSigninModal={isSigninModal}
              input={input}
              setInput={setInput}
              disabled={disabled}
              setShowModal={setShowModal}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default AuthModal;
