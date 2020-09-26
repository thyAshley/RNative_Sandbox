import createDataContext from "./createDataContext";
import axios from "../api/axios";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "DEL":
      return state.filter((post) => post.id !== action.payload);
    case "EDIT":
      return state.map((blog) => {
        return blog.id === action.payload.id ? action.payload : blog;
      });
    case "GET":
      return action.payload;
    default:
      return state;
  }
};

const getBlog = (dispatch) => {
  return async () => {
    try {
      const response = await axios.get("/blogposts");
      dispatch({
        type: "GET",
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
const addBlog = () => {
  return async (title, content, callback) => {
    try {
      await axios.post("/blogposts", {
        title,
        content,
      });
      callback && callback();
    } catch (error) {
      console.log(error);
    }
  };
};

const delBlog = (dispatch) => {
  return async (id) => {
    try {
      await axios.delete(`/blogposts/${id}`);
      dispatch({ type: "DEL", payload: id });
    } catch (error) {
      console.log(error);
    }
  };
};

const editBlog = (dispatch) => {
  return async (id, title, content, callback) => {
    try {
      await axios.put(`/blogposts/${id}`, {
        title,
        content,
      });
      dispatch({
        type: "EDIT",
        payload: {
          id,
          title,
          content,
        },
      });
    } catch (error) {
      console.log(error);
    }
    callback && callback();
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlog, delBlog, editBlog, getBlog },
  []
);
