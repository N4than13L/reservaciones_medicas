/*!

=========================================================
* Paper Dashboard React - v1.3.2
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.js";
import Dates from "views/Dates";
// import Typography from "views/Typography.js";
// import TableList from "views/Tables.js";
import UserPage from "views/User.js";
import UpgradeToPro from "views/Upgrade.js";
import { Register } from "views/Register";
import { Login } from "views/Login";
import Watch from "views/Watch";
import Medical_History from "views/Med_his";
import Add_Medical_History from "views/Add_Med_His";
import Bill from "views/Bill";
import Add_Bill from "views/Add_Bill";

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-bank",
    component: <Dashboard />,
    layout: "/admin",
  },
  {
    path: "/historial",
    name: "Icons",
    icon: "nc-icon nc-diamond",
    component: <Medical_History />,
    layout: "/admin",
  },
  {
    path: "/agregar-historial",
    name: "agregar historial medico",
    icon: "nc-icon nc-diamond",
    component: <Add_Medical_History />,
    layout: "/admin",
  },

  {
    path: "/factura",
    name: "factura",
    icon: "nc-icon nc-diamond",
    component: <Bill />,
    layout: "/admin",
  },

  {
    path: "/agregar-factura",
    name: "agregar-factura",
    icon: "nc-icon nc-diamond",
    component: <Add_Bill />,
    layout: "/admin",
  },
  {
    path: "/agregarcitas",
    name: "Icons",
    icon: "nc-icon nc-diamond",
    component: <Dates />,
    layout: "/admin",
  },
  {
    path: "/login",
    name: "Login",
    icon: "nc-icon nc-pin-3",
    component: <Login />,
    layout: "/admin",
  },
  {
    path: "/register",
    name: "Register",
    icon: "nc-icon nc-bell-55",
    component: <Register />,
    layout: "/admin",
  },
  {
    path: "/user-page",
    name: "User Profile",
    icon: "nc-icon nc-single-02",
    component: <UserPage />,
    layout: "/admin",
  },
  {
    path: "/vercitas",
    name: "Ver citas",
    icon: "nc-icon nc-tile-56",
    component: <Watch />,
    layout: "/admin",
  },
  // {
  //   path: "/typography",
  //   name: "Typography",
  //   icon: "nc-icon nc-caps-small",
  //   component: <Typography />,
  //   layout: "/admin",
  // },
  {
    pro: true,
    path: "/upgrade",
    name: "Upgrade to PRO",
    icon: "nc-icon nc-spaceship",
    component: <UpgradeToPro />,
    layout: "/admin",
  },
];
export default routes;
