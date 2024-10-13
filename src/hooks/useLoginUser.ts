import { useContext } from "react"
import { LoginUserContext, LoginUserContextType } from "../providers/LoginUserProvider";

// export const = useLoginUser => {
//   useContext(LoginUserContext);
// }

export const useLoginUser = ():LoginUserContextType => {
  return useContext(LoginUserContext);
}
