import { useState, createContext, useContext } from "react";

const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    const login = (cred) => {
        setUser(cred)
    }

    const register = (cred) => {
        

    }

    const logout = () => {
        setUser(null)
    }

    return (
        <UserContext.Provider value={{ user, login, logout }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => {
    return useContext(UserContext)
}