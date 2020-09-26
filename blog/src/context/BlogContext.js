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
    case "EDIT":
      return state.map((blog) => {
        return blog.id === action.payload.id ? action.payload : blog;
      });
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
    callback && callback();
  };
};

const delBlog = (dispatch) => {
  return (id) => {
    dispatch({ type: "DEL", payload: id });
  };
};

const editBlog = (dispatch) => {
  return (id, title, content, callback) => {
    dispatch({
      type: "EDIT",
      payload: {
        id,
        title,
        content,
      },
    });
    callback && callback();
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlog, delBlog, editBlog },
  [{ id: 1, title: "init", content: "this is here" }]
);
