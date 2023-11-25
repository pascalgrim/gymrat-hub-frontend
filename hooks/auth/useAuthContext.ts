import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw Error("authContext must be used inside an AuthContextProvider");
  }
  return context;
};
