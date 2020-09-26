import createDataContext from "./createDataContext";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [
        {
          id: Math.floor(Math.random() * 9999999),
          title: action.payload.title,
          content: action.payload.content,
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
  return async (title, content, callback) => {
    await dispatch({
      type: "ADD",
      payload: {
        title,
        content,
      },
    });
    callback();
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
