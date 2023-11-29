"use client"

import { routes } from "@/data/routes";
import { usePathname } from "next/navigation";
import { createContext, useContext, useState } from "react";
type SidenavStateProviderProps = {
    collapsed: boolean,
    setCollapsed: React.Dispatch<React.SetStateAction<boolean>>
}
const SidenavStateContext = createContext<SidenavStateProviderProps>({
    collapsed: false,
    setCollapsed: () => { }
})

export const SidenavStateProvider = ({ children }: { children: React.ReactNode }) => {

    const [collapsed, setCollapsed] = useState(false);
    return (
        <SidenavStateContext.Provider value={{ collapsed, setCollapsed }}>
            {children}
        </SidenavStateContext.Provider>
    )
};

export const useSidenavState = () => useContext(SidenavStateContext);