import { all, call, takeLeading } from "redux-saga/effects";
import { makeFetchSage } from "../../../common/util/fetch";
import { Types } from "./index";
import { callApi } from "../../../common/util/Api";

function* fetchSignup({
  memberId,
  pwd,
  teamName,
  memberName,
  memberEmail,
  memberHp,
  memberIp,
  history,
}) {
  const { resultCode } = yield call(callApi, {
    url: "/common/signup",
    method: "post",
    data: {
      memberId,
      pwd,
      teamName,
      memberName,
      memberEmail,
      memberHp,
      memberIp,
    },
  });
  if (resultCode === 0) {
    history.replace("/login");
  }
}

export default function* sage() {
  yield all([
    takeLeading(
      Types.FetchSignup,
      makeFetchSage({ fetchSage: fetchSignup, canCache: false })
    ),
  ]);
}
