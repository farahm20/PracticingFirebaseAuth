import React, { useContext, useState, useEffect } from "react"
import { auth } from "../firebase"


require('firebase/auth')

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {

    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true) //use this to verfiy if a user already exist

    function signup(email, password) {
        console.log(email, password)
        return auth.createUserWithEmailAndPassword(email, password)
    }

    function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password)
    }

    function logout() {
        return auth.signOut()
    }

    function resetPassword(email) {
        return auth.sendPasswordResetEmail(email)
    }

    function updateEmail(email) {
        return currentUser.updateEmail(email)
    }

    function updatePassword(password) {
        return currentUser.updatePassword(password)
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user) //if user exist set user and turn setloading to false. 
            setLoading(false)
        })

        return unsubscribe
    }, [])

    //value is everything that we want to provide with our authentication. 
    const value = {
        currentUser,
        login,
        signup,
        logout,
        resetPassword,
        updateEmail,
        updatePassword
    }
    return (
        //the value can be used anywhere inside our application
        //!loading than render the children otherwise not render children
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}