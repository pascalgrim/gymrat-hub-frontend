import { api } from "../../util/axios";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
  const { dispatch } = useAuthContext();
  const signup = async (
    email: string,
    password: string,
    username: string,
    firstName?: string,
    lastName?: string
  ) => {
    const res = await api.post("/auth/signup", {
      email,
      password,
      username,
      firstName,
      lastName,
    });

    if (!(res.status = 201)) {
      return;
    }
    const data = res.data;
    localStorage.setItem("user", JSON.stringify(data));
    dispatch({ type: "LOGIN", payload: data });
  };

  return { signup };
};
