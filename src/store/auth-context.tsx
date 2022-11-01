import React, {useState} from "react";

const AuthContext = React.createContext({
    token: "",
    isLoggedIn: false,
});

type AuthContextProviderProps = {
    children: JSX.Element;
};

export const AuthContextProvider = ({children}: AuthContextProviderProps) => {
    const [token, setToken] = useState("");

    const contextValue = {
        token: "",
        isLoggedIn: false,
    };

    return (
        <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
    );
};
