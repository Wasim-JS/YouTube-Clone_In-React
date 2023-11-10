import { createContext,useContext, useState } from "react";

const context = createContext()


export const ContextProvider = ({children}) =>{

    const [sideBar,setSideBar] = useState(false)
    return <context.Provider value={{sideBar,setSideBar}}>

        {children}

    </context.Provider>
}

export const useCustomContext = () => useContext(context)