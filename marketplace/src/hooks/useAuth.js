import { useContext } from "react";
import AuthContext from "../Context/authContext";
import AuthStorage from "../Context/storage";
import JwtDecode from "jwt-decode";

export default useAuth = () => {
  const { user, setUser } = useContext(AuthContext);

  const logOut = () => {
    setUser(null);
    AuthStorage.removeToken();
  };

  const logIn = (token) => {
    const user = JwtDecode(token);
    setUser(user);
    AuthStorage.storeToken(token);
  };

  return { user, setUser, logOut, logIn };
};
