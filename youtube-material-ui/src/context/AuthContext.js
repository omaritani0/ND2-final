import { createContext, useState, useEffect } from 'react'
import jwt_decode from "jwt-decode";
import api from '../api/axios';
const AuthContext = createContext()

export default AuthContext;


export const AuthProvider = ({ children }) => {
    let [authTokens, setAuthTokens] = useState(() => localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null)
    let [user, setUser] = useState(() => localStorage.getItem('authTokens') ? jwt_decode(localStorage.getItem('authTokens')) : null)
    let [loading, setLoading] = useState(true)

    let loginUser = async (e) => {
        e.preventDefault()
        let response = await api.post('token/',
            { 'email': e.target.username.value, 'password': e.target.password.value },
        );
        console.log(response);
        let data = await response.data

        if (response.status === 200) {
            console.log("123")
            setAuthTokens(data)
            setUser(jwt_decode(data.access))
            localStorage.setItem('authTokens', JSON.stringify(data))
            window.location.href = window.location.href.substring(0, window.location.href.lastIndexOf("/", 7))
        } else {
            console.log("123")
            alert('Something went wrong!')
        }
    }


    let logoutUser = () => {
        setAuthTokens(null)
        setUser(null)
        localStorage.removeItem('authTokens')
        window.location.href = window.location.href.substring(0, window.location.href.lastIndexOf("/", 7)) + "login"
    }


    let updateToken = async () => {
        if (authTokens?.refresh == null) {
            setLoading(false);
            return;
        }
        let response = await api.post('token/refresh/', {
            'refresh': authTokens?.refresh
        }
        ).catch(() => logoutUser());
        
        let data = await response.data

        if (response.status === 200) {
            setAuthTokens(data)
            setUser(jwt_decode(data.access))
            localStorage.setItem('authTokens', JSON.stringify(data))
        } else {
            logoutUser()
        }

        if (loading) {
            setLoading(false)
        }
    }

    let contextData = {
        user: user,
        authTokens: authTokens,
        loginUser: loginUser,
        logoutUser: logoutUser,
    }


    useEffect(() => {

        if (loading) {
            updateToken()
        }

        let fourMinutes = 1000 * 60 * 4

        let interval = setInterval(() => {
            if (authTokens) {
                updateToken()
            }
        }, fourMinutes)
        return () => clearInterval(interval)

    }, [authTokens, loading])

    console.log(contextData);
    console.log(loading);
    return (
        <AuthContext.Provider value={contextData} >
            {loading ? null : children}
        </AuthContext.Provider>
    )
}
