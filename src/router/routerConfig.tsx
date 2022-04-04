import HomePage from "@/layouts/menus"
import LoginPage from "@/pages/login"

import DocPage from "@/pages/doc"
import PublicPage from "@/pages/publicComponents"
import CustomPage from "@/pages/testPlugin"
import LocalePage from "@/pages/locales"
import IconPage from "@/pages/icon"
import TableList from "@/pages/table"
import TableEdit from "@/pages/table/edit"
import TableDrag from "@/pages/table/drag"
import PrivateRoute from "./privateRouter"
import AuthPage from "@/pages/auth"


export default {
  routes: [
    { exact: true, path: "/", component: LoginPage },
    { exact: true, path: "/home", component: HomePage },
  ],
}
