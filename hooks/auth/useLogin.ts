import { api } from "../../util/axios";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
  const { dispatch } = useAuthContext();
  const login = async (email: string, password: string) => {
    const res = await api.post("/auth/signin", {
      email,
      password,
    });

    if (!(res.status = 201)) {
      return;
    }
    const data = res.data;
    localStorage.setItem("user", JSON.stringify(data));
    dispatch({ type: "LOGIN", payload: data });
  };

  return { login };
};
