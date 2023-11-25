"use client"

import { routes } from "@/data/routes";
import { createContext, useContext, useState } from "react";
type SelectedRouteContextProps = {
    selectedRoute: Route,
    setSelectedRoute: React.Dispatch<React.SetStateAction<Route>>
}
const SelectedRoute = createContext<SelectedRouteContextProps>({
    selectedRoute: routes[0],
    setSelectedRoute: () => { }
})

export const SelectedRouteProvider = ({ children }: { children: React.ReactNode }) => {
    const [selectedRoute, setSelectedRoute] = useState<Route>(routes[0]);

    return (
        <SelectedRoute.Provider value={{ selectedRoute, setSelectedRoute }}>
            {children}
        </SelectedRoute.Provider>
    )
};

export const useSelectedRoute = () => useContext(SelectedRoute);