import { Navigate } from "react-router-dom";
import { useAuth } from "../../../hooks/use-auth";

const User = () => {

    const {isAuth} = useAuth();

    return isAuth ? (
        <h1>Partner card</h1>
    ) : (<Navigate to="/signin" /> )
}

export default User;