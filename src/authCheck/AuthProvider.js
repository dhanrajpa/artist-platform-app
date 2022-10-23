import { createContext, useEffect, useRef, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [isAuth, setAuth] = useState({})
    const effectRan = useRef(false);


    const authUpdate = () => {
        const role = sessionStorage.getItem("role")
        const token = sessionStorage.getItem("token")
        if (role && token) {
            const authData = { role, token }
            setAuth(authData);
        }
    }

    useEffect(() => {

        if (effectRan.current === false) {
            authUpdate();
        }

        return () => {
            // console.log('unmounted parent')
            effectRan.current = true
        }
    }, [isAuth])

    return (
        <AuthContext.Provider value={{ isAuth, setAuth }}>
            {children}
        </AuthContext.Provider>
    )

}


export default AuthContext;

