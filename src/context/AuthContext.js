import React , {useState , useContext ,createContext} from "react";


const AuthContext = createContext("")

export default AuthContext

export const AuthProvider = ({ children}) => {
    return (
        <AuthContext.Provider value={{"name" : "Hussein 7"}}>
            {children}
        </AuthContext.Provider>
    )

}