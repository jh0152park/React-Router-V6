import { useParams } from "react-router-dom";
import { USERS } from "../../db";

function User() {
    const params = useParams();
    return <h1>User: {USERS[Number(params.user_id) - 1].name}</h1>;
}

export default User;
