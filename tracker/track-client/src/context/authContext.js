import createDataContext from "./createDataContext";

const authReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const signup = dispatch => {
  return async({email, password}) => {
    const await 
  }
}
const signin = dispatch => {
  return async({email, password}) => {
    const await 
  }
}
}
const signout = dispatch => {
  return async() => {
  }
}
export const { Provider, Context } = createDataContext(
  authReducer,
  {signup, signin, signout},
  {
    isSignedIn: false,
  }
);
