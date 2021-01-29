import React, { useEffect } from "react";
import Login from "./member/login/container/Login";
import Signup from "./member/insert/container/Signup";
import "antd/dist/antd.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import { useSelector } from "react-redux";
import MemberUpdate from "./member/update/container/MemberUpdate";

export default function App() {
  useEffect(() => {
    const bodyEl = document.getElementsByTagName("body")[0];
    const loadingEl = document.getElementById("init-loading");
    bodyEl && loadingEl && bodyEl.removeChild(loadingEl);
  }, []);

  const roleGroup = useSelector((state) => state.login.roleGroup);

  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route role={roleGroup} component={Home} exact path="/" />
          <Route role={roleGroup} component={Login} path="/login" />
          <Route role={roleGroup} component={Signup} path="/signup" />
          <Route
            role={roleGroup}
            component={MemberUpdate}
            path="/memberUpdate"
          />
        </Switch>
      </BrowserRouter>
    </>
  );
}
