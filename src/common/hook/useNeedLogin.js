import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { RoleGroup } from "../constant";
import { storageHelper } from "../util/storageHelper";

export default function useNeedLogin() {
  const history = useHistory();
  const roleGroup = useSelector((state) => state.login.roleGroup);
  const token = storageHelper.get("token");
  useEffect(() => {
    if (
      roleGroup === undefined ||
      roleGroup === RoleGroup.ROLE_ANONYMOUS ||
      token === "undefined" ||
      token === null
    ) {
      history.replace("/login");
    }
  }, [roleGroup, history, token]);
}
