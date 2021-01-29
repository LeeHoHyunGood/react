import { all, call, put, takeLeading } from "redux-saga/effects";
import { callApi } from "../../../common/util/Api";
import { actions, Types } from "./index";
import { makeFetchSage } from "../../../common/util/fetch";

function* setMember({ history }) {
  const { isSuccess, data } = yield call(callApi, {
    url: "/api/member/list",
  });
  if (isSuccess && data) {
    yield put(actions.setData(data.item));
  }
}

export default function* sage() {
  yield all([
    takeLeading(
      Types.SetData,
      makeFetchSage({ fetchSage: setMember, canCache: false })
    ),
  ]);
}
