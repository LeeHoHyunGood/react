import { all, call, put, takeLeading } from "redux-saga/effects";
import { callApi } from "../../../common/util/Api";
import { actions, Types } from "./index";
import { makeFetchSage } from "../../../common/util/fetch";
import { RoleGroup } from "../../../common/constant";

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
    yield put(actions.setMember(data.memberId, data.roleGroup));
    if (data.roleGroup !== RoleGroup.ROLE_ANONYMOUS) {
      history.replace("/");
    }
  }
}

function* fetchMember() {
  const { resultCode, data } = yield call(callApi, {
    url: "/common/member",
  });

  if (resultCode === 0 && data) {
    yield put(actions.setMember(data.memberId, data.roleGroup));
  } else {
    yield put(actions.setMember("", RoleGroup.ROLE_ANONYMOUS));
  }
}

export default function* sage() {
  yield all([
    takeLeading(
      Types.FetchLogin,
      makeFetchSage({ fetchSage: fatchLogin, canCache: false })
    ),
    takeLeading(
      Types.FetchMember,
      makeFetchSage({ fetchSage: fetchMember, canCache: false })
    ),
  ]);
}
