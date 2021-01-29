import {
  createReducer,
  createSetValueAction,
  setValueReducer,
} from "../../../common/redux-helper";

export const Types = {
  SetValue: "auth/SetValue",
  SetData: "auth/SetData",
  FetchUpdate: "fetch/SetUpdate",
  GetMember: "auth/getMember",
  SetMember: "auth/setMember",
};

export const actions = {
  setValue: createSetValueAction(Types.SetValue),
  setData: (data, history) => ({
    type: Types.SetData,
    data,
    history,
  }),
  getMember: (memberId, history) => ({
    type: Types.GetMember,
    memberId,
    history,
  }),
  fetchUpdate: (
    memberId,
    pwd,
    teamName,
    memberName,
    memberEmail,
    memberHp,
    memberIp,
    history
  ) => ({
    type: Types.FetchUpdate,
    memberId,
    pwd,
    teamName,
    memberName,
    memberEmail,
    memberHp,
    memberIp,
    history,
  }),
  setMember: (
    memberId,
    teamName,
    memberName,
    memberEmail,
    memberHp,
    memberIp
  ) => ({
    type: Types.SetMember,
    memberId,
    teamName,
    memberName,
    memberEmail,
    memberHp,
    memberIp,
  }),
};

const INITIAL_STATE = {
  data: [],
  memberId: "",
  teamName: "",
  memberName: "",
  memberEmail: "",
  memberHp: "",
  memberIp: "",
};

const reducer = createReducer(INITIAL_STATE, {
  [Types.SetValue]: setValueReducer,
  [Types.SetData]: (state, action) => {
    state.data = action.data;
  },
  [Types.SetMember]: (state, action) => {
    state.memberId = action.memberId;
    state.teamName = action.teamName;
    state.memberName = action.memberName;
    state.memberEmail = action.memberEmail;
    state.memberHp = action.memberHp;
    state.memberIp = action.memberIp;
  },
});

export default reducer;
