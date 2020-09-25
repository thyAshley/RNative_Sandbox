import createDataContext from "./createDataContext";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        {
          id: state.length + 1,
          title: `Blog Post #${state.length + 1}`,
        },
      ];
    default:
      return state;
  }
};

const addBlog = (dispatch) => {
  return () => {
    dispatch({ type: "ADD" });
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlog },
  []
);
