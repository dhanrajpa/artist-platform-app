import { useContext } from "react";
import AuthContext from "../authCheck/AuthProvider";

const useAuth = () => {
    return useContext(AuthContext);
}

export default useAuth 