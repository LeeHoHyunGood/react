import { all, call, put, takeLeading } from "redux-saga/effects";
import { callApi } from "../../../common/util/Api";
import { actions, Types } from "./index";
import { makeFetchSage } from "../../../common/util/fetch";
import { RoleGroup } from "../../../common/constant";
import { storageHelper } from "../../../common/util/storageHelper";

function* fatchLogin({ memberId, pwd, history }) {
  let form = new FormData();
  form.append("memberId", memberId);
  form.append("pwd", pwd);
  const { isSuccess, data } = yield call(callApi, {
    url: "/common/login/doLogin",
    method: "post",
    data: form,
  });
  if (isSuccess && data) {
    yield put(
      actions.setMember(data.item.member.memberId, data.item.member.roleGroup)
    );
    if (data.roleGroup !== RoleGroup.ROLE_ANONYMOUS) {
      storageHelper.set("token", data.item.token);
      history.replace("/");
    }
  }
}

export default function* sage() {
  yield all([
    takeLeading(
      Types.FetchLogin,
      makeFetchSage({ fetchSage: fatchLogin, canCache: false })
    ),
  ]);
}
