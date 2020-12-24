import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { RoleGroup } from "../constant";

export default function useBlockLoginMember() {
  const history = useHistory();
  const roleGroup = useSelector((state) => state.login.roleGroup);
  useEffect(() => {
    if (roleGroup === RoleGroup.ROLE_LOGIN) {
      history.replace("/");
    }
  }, [roleGroup, history]);
}