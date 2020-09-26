import createDataContext from "./createDataContext";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [
        {
          id: Math.floor(Math.random() * 9999999),
          title: `Blog Post #${state.length + 1}`,
        },
        ...state,
      ];
    case "DEL":
      return state.filter((post) => post.id !== action.payload);
    default:
      return state;
  }
};

const addBlog = (dispatch) => {
  return () => {
    dispatch({ type: "ADD" });
  };
};

const delBlog = (dispatch) => {
  return (id) => {
    dispatch({ type: "DEL", payload: id });
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlog, delBlog },
  []
);
