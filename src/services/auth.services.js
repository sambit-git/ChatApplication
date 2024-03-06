import store from "../redux-store/store";
import userActions from "../redux-store/user.slice";
import api from "./api.services";

export const getSelf = async () => {
  if (!localStorage.getItem("access-token")) {
    return { success: false, message: "missing token" };
  } else {
    try {
      const response = await api.get("/users/self");

      // get user data
      const userData = response.data.userData;
      console.log(response);

      // update redux-store
      store.dispatch(userActions.update({ ...userData }));

      return { success: true, data: userData };
    } catch (error) {
      return {
        success: false,
        message: error?.response?.data?.message || "Bad Request",
      };
    }
  }
};

export const login = async (username, password) => {
  try {
    const respose = await api.post("/users/login", { username, password });

    // get user data
    const userData = respose.data.userData;

    // save access token
    localStorage.setItem("access-token", userData.token);

    // update redux-store
    store.dispatch(userActions.update({ ...userData }));

    return { success: true, data: userData };
  } catch (error) {
    return {
      success: false,
      message: error?.response?.data?.message || "Bad Request",
    };
  }
};
