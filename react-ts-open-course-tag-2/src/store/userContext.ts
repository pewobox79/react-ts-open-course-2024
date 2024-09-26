import { createContext } from "react";


export const UserContext = createContext<{ authUser: { email: string, password: string, loggedIn: boolean }, setAuthUser: React.Dispatch<React.SetStateAction<{ email: string, password: string, loggedIn: boolean }>> }>({authUser: {email: "", password: "", loggedIn: false}, setAuthUser: ()=>{}});