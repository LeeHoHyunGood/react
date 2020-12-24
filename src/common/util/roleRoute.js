import { Route } from "react-router-dom";
import Home from "../../Home";
import Signup from "../../member/insert/container/Signup";
import Login from "../../member/login/container/Login";
import { RoleGroup } from "../constant";

export const RoleRoute = ({ role, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (role === RoleGroup.ROLE_ANONYMOUS && Component.name === "Login") {
          return <Login {...props} role={role} />;
        }
        if (role === RoleGroup.ROLE_ANONYMOUS && Component.name === "Signup") {
          return <Signup {...props} role={role} />;
        }

        if (role === RoleGroup.ROLE_LOGIN && Component.name === "Home") {
          return <Home {...props} role={role} />;
        }

        return <Login {...props} role={role} />;
      }}
    />
  );
};
