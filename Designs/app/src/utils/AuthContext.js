import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext({
    authenticated: false,
    user: null, // Add the user field to store user information
    keys: null,
    login: () => {},
    logout: () => {},
});

export const AuthProvider = ({ children }) => {
    const [authenticated, setAuthenticated] = useState(false);
    const [user, setUser] = useState(null);
    const [keys, setKeys] = useState(null);

    const login = (data, keys) => {
        setAuthenticated(true);
        setUser({ username:  data.username});
        setKeys({ keys });

    };

    const logout = () => {
        setAuthenticated(false);
        setUser(null);
        setKeys(null);
    };

    return (
        <AuthContext.Provider value={{ authenticated, user, keys, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

export default AuthContext;
