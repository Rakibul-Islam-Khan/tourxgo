import { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const useFirebase = () => {
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const [users, setUsers] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUsers(user)
            } else {
                setUsers({})
            }
            setIsLoading(false)
        })
        return () => unsubscribed();
    }, []);

    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)

    }
    const createAccountWithGoogle = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginWithEmailAndPassword = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        signOut(auth)
            .then(() => { })
    }

    return {
        users,
        isLoading,
        setUsers,
        setIsLoading,
        signInWithGoogle,
        createAccountWithGoogle,
        loginWithEmailAndPassword,
        logOut,
    }
};

export default useFirebase;