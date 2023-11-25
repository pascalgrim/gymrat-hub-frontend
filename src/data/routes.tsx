import { Activity, Dumbbell, LayoutDashboard, MessageCircle, Settings } from "lucide-react";

export const routes: Route[] = [{
    route: "dashboard",
    name: "Dashboard",
    icon: <LayoutDashboard />
},
{
    route: "workouts",
    name: "Workouts",
    icon: <Dumbbell />
},
{
    route: "exercises",
    name: "Übungen",
    icon: <Activity />
},
{
    route: "chats",
    name: "Chats",
    icon: <MessageCircle />
},
{
    route: "settings",
    name: "Settings",
    icon: <Settings />
},
]