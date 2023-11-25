"use client"

import { routes } from "@/data/routes";
import { usePathname } from "next/navigation";
import { createContext, useContext, useState } from "react";
type SelectedRouteContextProps = {
    selectedRoute: Route,
    setSelectedRoute: React.Dispatch<React.SetStateAction<Route>>
}
const SelectedRoute = createContext<SelectedRouteContextProps>({
    selectedRoute: routes[0],
    setSelectedRoute: () => { }
})
function getFirstPartOfURL(pathname:string) {
    const parts = pathname.split('/').filter(part => part !== '');
    return parts.length > 0 ? parts[0] : null;
  }
export const SelectedRouteProvider = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname()
    const initialRoutename = getFirstPartOfURL(pathname)
    const initialRoute = initialRoutename ? routes.find(route=>route.route.includes(initialRoutename))|| routes[0]:routes[0]
    const [selectedRoute, setSelectedRoute] = useState<Route>(initialRoute);
    return (
        <SelectedRoute.Provider value={{ selectedRoute, setSelectedRoute }}>
            {children}
        </SelectedRoute.Provider>
    )
};

export const useSelectedRoute = () => useContext(SelectedRoute);