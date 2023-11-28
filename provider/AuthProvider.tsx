
import React, { useState, useEffect, useContext, createContext, ReactNode, useReducer } from 'react';

interface UserPayload {
    access_token: string;
    userId: number;
    email: string;
    username: string
}
interface AuthState {
    user: UserPayload | null;
}

interface AuthContextProps {
    state: AuthState;
    dispatch: React.Dispatch<AuthAction>;
}

interface AuthProviderProps {
    children: ReactNode;
}

interface LoginAction {
    type: 'LOGIN';
    payload: UserPayload;
}

interface LogoutAction {
    type: 'LOGOUT';
}
type AuthAction = LoginAction | LogoutAction;
export const AuthContext = createContext<AuthContextProps | undefined>(undefined);

interface AuthProviderProps {
    children: ReactNode;
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}
export const authReducer = (state: AuthState, action: AuthAction) => {
    switch (action.type) {
        case 'LOGIN':
            return { user: action.payload };
        case 'LOGOUT':
            return { user: null };
        default:
            return state;
    }
}
export function AuthProvider({ children }: AuthProviderProps) {

    const [state, dispatch] = useReducer(authReducer,
        { user: null }
    )

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        const user: UserPayload | null = storedUser ? JSON.parse(storedUser) : null;

        if (user) {
            dispatch({ type: "LOGIN", payload: user });
        }
    }, [])

    return (
        <AuthContext.Provider value={{ state, dispatch }}>
            {children}
        </AuthContext.Provider>
    );
}