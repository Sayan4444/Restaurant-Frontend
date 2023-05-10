"use client";
import Link from "next/link";
import { useState } from "react";
import AuthModal from "./AuthModal";
import { useContextProvider } from "../context/AuthContext";
import { useAuth } from "../hooks/useAuth";

const Navbar = () => {
  const { authState, setAuthState } = useContextProvider();
  const { loading, data } = authState;
  const { singout } = useAuth();
  const [showModal, setShowModal] = useState(false);
  const [isSigninModal, setIsSigninModal] = useState(true);
  return (
    <nav className='bg-white p-2 flex justify-between'>
      <Link href='' className='font-bold text-gray-700 text-2xl'>
        OpenTable
      </Link>
      <div>
        {data && !loading && (
          <button
            className='bg-blue-400 text-white border p-1 px-4 rounded mr-12'
            onClick={() => {
              singout();
            }}
          >
            Logout
          </button>
        )}
        {!data && !loading && (
          <div className='flex'>
            <button
              className='bg-blue-400 text-white border p-1 px-4 rounded mr-3'
              onClick={() => {
                setShowModal(true);
                setIsSigninModal(true);
              }}
            >
              Sign in
            </button>
            <button
              className='border p-1 px-4 rounded'
              onClick={() => {
                setShowModal(true);
                setIsSigninModal(false);
              }}
            >
              Sign up
            </button>
            {showModal && (
              <AuthModal
                setShowModal={setShowModal}
                isSigninModal={isSigninModal}
              />
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
