"use client";
import { useContextProvider } from "../context/AuthContext";

export const useAuth = () => {
    const { setAuthState } = useContextProvider();

    const signin = async (input, setShowModal) => {
        const { email, password } = input;
        try {
            setAuthState({
                loading: true,
                data: null,
                error: null,
            })
            const res = await fetch("http://localhost:4000/api/auth/signin", {
                method: 'POST',
                credentials: 'include',
                body: JSON.stringify({
                    email, password
                }),
                headers: {
                    'Content-type': 'application/json',
                }
            });
            const data = await res.json();
            if (data.success === false) throw new Error(data.error)
            const { user } = data;
            setAuthState({
                loading: false,
                data: user,
                error: null,
            })
            setShowModal(false)
        } catch (error) {
            setAuthState(prev => ({
                ...prev,
                loading: false,
                error: error.message
            }))
        }

    };

    const signup = async (input, setShowModal) => {
        try {
            setAuthState(prev => ({
                ...prev,
                loading: true
            }))
            const res = await fetch(`${process.env.url}/api/auth/signup`, {
                method: 'POST',
                body: JSON.stringify(input),
                headers: {
                    'Content-type': 'application/json',
                }
            });
            const data = await res.json();
            if (data.success === false) throw new Error(data.error)
            setAuthState(prev => ({
                ...prev,
                loading: false,
                data
            }))
            setShowModal(false)
        } catch (error) {
            setAuthState(prev => ({
                ...prev,
                loading: false,
                error: error.message
            }))
        }
    }

    const singout = async () => {
        try {
            await fetch(`${process.env.url}/api/auth/signout`, {
                method: "POST",
                credentials: "include",
            });
            setAuthState({
                loading: false,
                data: null,
                error: null,
            });
        } catch (error) {

        }
    }


    return {
        signin,
        signup,
        singout
    }
}
