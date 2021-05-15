import React from "react";

export interface IAppState {
    jwt: string | null;
    email: string;
    setAuthInfo: (jwt: string | null, email: string) => void;
}

export const initialAppState : IAppState = {
    jwt: null,
    email: '',
    setAuthInfo: (jwt: string | null, email: string): void => {}
}

export const AppContext = React.createContext<IAppState>(initialAppState);
export const AppContextProvider = AppContext.Provider;
export const AppContextConsumer = AppContext.Consumer;
