import { createSetValueAction } from "../../../common/redux-helper";

export const Types = {
  SetValue: "insert/SetValue",
  FetchSignup: "insert/FetchSignup",
};

export const actions = {
  setValue: createSetValueAction(Types.SetValue),
  fetchSignup: (
    memberId,
    pwd,
    teamName,
    memberName,
    memberEmail,
    memberHp,
    memberIp,
    history
  ) => ({
    type: Types.FetchSignup,
    memberId,
    pwd,
    teamName,
    memberName,
    memberEmail,
    memberHp,
    memberIp,
    history,
  }),
};
