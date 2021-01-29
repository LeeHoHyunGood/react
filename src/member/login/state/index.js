import { RoleGroup } from "../../../common/constant";
import {
  createReducer,
  createSetValueAction,
  setValueReducer,
} from "../../../common/redux-helper";

export const Types = {
  SetValue: "auth/SetValue",
  FetchLogin: "auth/FetchLogin",
  SetMember: "auth/SetMember",
};

export const actions = {
  setValue: createSetValueAction(Types.SetValue),
  fetchLogin: (memberId, pwd, history) => ({
    type: Types.FetchLogin,
    memberId,
    pwd,
    history,
  }),
  setMember: (memberId, roleGroup) => ({
    type: Types.SetMember,
    memberId,
    roleGroup,
  }),
};

const INITIAL_STATE = {
  memberId: "",
  roleGroup: undefined,
};

const reducer = createReducer(INITIAL_STATE, {
  [Types.SetValue]: setValueReducer,
  [Types.SetMember]: (state, action) => {
    state.memberId = action.memberId;
    state.roleGroup = action.roleGroup
      ? action.roleGroup
      : RoleGroup.ROLE_ANONYMOUS;
  },
});

export default reducer;
