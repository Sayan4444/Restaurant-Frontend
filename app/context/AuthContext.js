"use client";
import { useState, createContext, useContext, useEffect } from "react";

export const AuthenticationContext = createContext();
export const useContextProvider = () => useContext(AuthenticationContext);

export default function AuthContext({ children }) {
    const [authState, setAuthState] = useState({
        loading: true,
        data: null,
        error: null,
    });
    const obj = {
        authState,
        setAuthState,
    }

    const getUser = async () => {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_url}/api/auth/me`, {
                credentials: 'include',
            }, {
                cache: 'no-cache'
            });
            const data = await res.json();
            if (data.success === false) throw new Error(data.error);
            const { user } = data;
            setAuthState({
                loading: false,
                data: user,
                error: null
            })

        } catch (error) {
            setAuthState({
                loading: false,
                data: null,
                error: error.message
            })
        }
    }

    useEffect(() => getUser(), []);
    return (
        <AuthenticationContext.Provider
            value={obj}
        >
            {children}
        </AuthenticationContext.Provider>
    );
}