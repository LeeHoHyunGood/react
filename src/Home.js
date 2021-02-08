import React from "react";
import useNeedLogin from "./common/hook/useNeedLogin";
import CommonLayout from "./common/component/CommonLayout";
import { useDispatch } from "react-redux";
import { RoleGroup } from "./common/constant";
import { storageHelper } from "./common/util/storageHelper";
import { loginActions } from "./member/login/state/index";

export default function Home() {
  useNeedLogin();

  const dispatch = useDispatch();
  function onLogout() {
    dispatch(loginActions.setMember("", RoleGroup.ROLE_ANONYMOUS));
    storageHelper.set("token", "");
  }

  return <CommonLayout onLogout={onLogout} />;
}
