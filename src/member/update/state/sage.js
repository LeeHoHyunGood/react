import { all, call, put, takeLeading } from "redux-saga/effects";
import { callApi } from "../../../common/util/Api";
import { actions, Types } from "./index";
import { makeFetchSage } from "../../../common/util/fetch";

function* setData({ history }) {
  const { isSuccess, data } = yield call(callApi, {
    url: "/api/member/list",
  });
  if (isSuccess && data) {
    yield put(actions.setData(data.item, history));
  } else {
    history.replace(data.redirectUrl);
  }
}

function* fetchUpdate({
  memberId,
  pwd,
  teamName,
  memberName,
  memberEmail,
  memberHp,
  memberIp,
  history,
}) {
  const { isSuccess, data } = yield call(callApi, {
    url: "/api/member/update",
    method: "put",
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
  if (isSuccess && data) {
    history.replace("/memberlist");
  }
}

function* getMember({ memberId, history }) {
  const { isSuccess, data } = yield call(callApi, {
    url: "/api/member/getVo",
    params: { memberId },
  });
  if (isSuccess && data) {
    yield put(
      actions.setMember(
        data.item.memberId,
        data.item.teamName,
        data.item.memberName,
        data.item.memberEmail,
        data.item.memberHp,
        data.item.memberIp
      )
    );
    history.replace("/memberDetail");
  } else {
    history.replace(data.redirectUrl);
  }
}

export default function* sage() {
  yield all([
    takeLeading(
      Types.SetData,
      makeFetchSage({ fetchSage: setData, canCache: false })
    ),
    takeLeading(
      Types.FetchUpdate,
      makeFetchSage({ fetchSage: fetchUpdate, canCache: false })
    ),
    takeLeading(
      Types.GetMember,
      makeFetchSage({ fetchSage: getMember, canCache: false })
    ),
  ]);
}
