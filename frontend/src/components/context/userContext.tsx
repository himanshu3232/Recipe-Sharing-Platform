import { createContext } from "react";
interface user{
    username: string;
    password: string;
    setUsername: React.Dispatch<React.SetStateAction<string>>;
    setPassword: React.Dispatch<React.SetStateAction<string>>;
    login: boolean;
    setLogin: React.Dispatch<React.SetStateAction<boolean>>;
}
export const userContext = createContext<user | undefined>(undefined)