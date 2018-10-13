import DashboardUser from "./views/DashboardUser/DashboardUser.jsx";
import UserImpact from "./views/UserImpact/UserImpact.jsx";
import Icons from "./views/Icons/Icons.jsx";
import DashboardCompagny from "./views/DashboardCompagny/DashboardCompagny.jsx";
import Compagny from "./views/CompagnyPage/CompagnyPage.jsx";
import TableList from "./views/TableList/TableList.jsx";
import UserPage from "./views/UserPage/UserPage.jsx";

var DashRoutes = [

  {
    path: "/dashboardCompagny",
    name: "Dashboard - Compagny",
    icon: "design_app",
    component: DashboardCompagny
  },
  {
    path: "/dashboardUser",
    name: "Dashboard - User",
    icon: "design_app",
    component: DashboardUser
  },
  { 
    path: "/icons",
    name: "Weather",
    icon: "objects_umbrella-13",
    component: Icons
  },
  {
    path: "/userImpact",
    name: "User Impact",
    icon: "objects_globe",
    component: UserImpact
  },
  {
    path: "/userPage",
    name: "User Profile",
    icon: "users_single-02",
    component: UserPage
  },
  {
    path: "/compagnyPage",
    name: "Compagny Profile",
    icon: "users_single-02",
    component: Compagny
  },
  {
    path: "/extended-tables",
    name: "Business",
    icon: "shopping_cart-simple",
    component: TableList
  },
  { redirect: true, path: "/", pathTo: "/dashboardCompagny", name: "DashboardCompagny" }
];
export default DashRoutes;
