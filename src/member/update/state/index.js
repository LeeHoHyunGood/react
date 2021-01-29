import {
  createReducer,
  createSetValueAction,
  setValueReducer,
} from "../../../common/redux-helper";

export const Types = {
  SetValue: "auth/SetValue",
  SetData: "auth/SetData",
};

export const actions = {
  setValue: createSetValueAction(Types.SetValue),
  setData: (data) => ({
    type: Types.SetData,
    data,
  }),
};

const INITIAL_STATE = {
  data: [],
};

const reducer = createReducer(INITIAL_STATE, {
  [Types.SetValue]: setValueReducer,
  [Types.SetData]: (state, action) => {
    state.data = action.data;
  },
});

export default reducer;
