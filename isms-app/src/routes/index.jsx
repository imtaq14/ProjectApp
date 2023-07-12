/* eslint-disable no-unused-vars */
import { ROUTES_PATHS } from "../../constants";
import * as Layout from "../components/Layout/";
import * as Page from "../pages";

/* layout: null ko import layout nào cả
   layout: custom custom layout theo cách của ban!
   nếu ko sẽ mặc định dùng layout default */
//public route
const publicRoutes = [
  { path: "/", component: Page.Home },
  { path: "/following", component: Page.Following, layout: null },
  { path: "/profile", component: Page.Profile, layout: Layout.CustomLayout },
  { path: "/login", component: Page.Login, layout: Layout.FooterOnly },
];

//private route: dành cho những route cần đăng nhập
const privateRoutes = [
  {
    path: ROUTES_PATHS.ADMIN,
    component: Page.Dashboard,
    layout: Layout.AdminLayout,
  },
  {
    path: ROUTES_PATHS.ADMIN_TICKET,
    component: Page.AdminTicket,
    layout: Layout.AdminLayout,
  },
  {
    path: ROUTES_PATHS.ADMIN_USER,
    component: Page.AdminUser,
    layout: Layout.AdminLayout,
  },
  {
    path: ROUTES_PATHS.ADMIN_REPORT,
    component: Page.AdminReport,
    layout: Layout.AdminLayout,
  },
  {
    path: ROUTES_PATHS.ADMIN_SETTING,
    component: Page.Dashboard,
    layout: Layout.AdminLayout,
  },
  {
    path: ROUTES_PATHS.ADMIN_CONTACT,
    component: Page.Dashboard,
    layout: Layout.AdminLayout,
  },
];

export { publicRoutes, privateRoutes };