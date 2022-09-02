

import { createContext, ReactNode, useCallback, useContext, useState } from 'react';
import { apiSign } from '../services/api';

interface AuthState {
  token: string;
  user: object;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextDate {
  user: object;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void; 
}

interface AuthProviderProps {
  children: ReactNode
}

const AuthContext = createContext<AuthContextDate>({} as AuthContextDate);

export function AuthProvider({ children }: AuthProviderProps) {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@Authentication:token');
    const user = localStorage.getItem('@Authentication:user');

    if (token && user) {
      return { token, user: JSON.parse(user) }
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }: SignInCredentials) => {
    const response = await apiSign.post('auth', {
      email,
      password,
    });

    const { token, user } = response.data;

    localStorage.setItem('@Authentication:token', token);
    localStorage.setItem('@Authentication:user', JSON.stringify(user));

    setData({ token, user });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@Authentication:token');
    localStorage.removeItem('@Authentication:user');

    setData({} as AuthState);
  }, [])

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextDate {
  const context = useContext(AuthContext);

  if(!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}