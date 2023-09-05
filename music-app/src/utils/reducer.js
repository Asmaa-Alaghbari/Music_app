// reducer for managing a token
// We use this reducer to manage authentication or similar state
import { reducerCases } from "./constants";
export const initialState = {
  token: null,
};

//The reducer's purpose is to specify how the state should change in response to different actions
const reducer = (state, action) => {
  switch (action.type) {
    //it sets the token in the state to the value provided in the action
    case reducerCases.SET_TOKEN: {
      return {
        ...state,
        token: action.token,
      };
    }
    default:
      return state;
  }
};

export default reducer;
