import {useState,useContext, createContext, Children} from "react";

const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [isLoggedIn,setisLogggedIn] = useState(
        !!localStorage.getItem('acessToken')
    )
    return(
        <>
            <AuthContext.Provider value={{isLoggedIn,setisLogggedIn}}>
                {children}
            </AuthContext.Provider>
        </>
    )
}
export default AuthProvider
export {AuthContext}