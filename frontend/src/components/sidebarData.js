import React from "react";
import "../App.css";
import HomeIcon from '@mui/icons-material/Home';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';



export const sidebarData = [
    {
        title: "Home",
        icon: <HomeIcon />,
        link: "/home"

    },
    {
        title: "Orders",
        icon: <DeliveryDiningIcon />,
        link: "/orders"

    },

] 
export default sidebarData;
