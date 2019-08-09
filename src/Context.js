import React, { useState, createContext, useEffect } from 'react';
// import axios from 'axios';

// import { ApiUserLogin } from './api/auth';

export const MasterContext = createContext();

export const ContextProvider = ({ children }) => {
    const [auth, setAuth] = useState({});

    // console.log('Context : ', auth);

    // useEffect(() => {
    // 	ApiUserLogin(axios, setAuth);
    // }, []);

    return (
        <MasterContext.Provider value={[auth, setAuth]}>
            {children}
        </MasterContext.Provider>
    );
};
