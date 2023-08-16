import { Link, Outlet, useParams } from "react-router-dom";
import { USERS } from "../../db";

function User() {
    const params = useParams();
    return (
        <div>
            <h1>User: {USERS[Number(params.user_id) - 1].name}</h1>
            <hr></hr>
            <Link to="followers">See Followers!</Link>
            <Outlet
                context={{
                    nameOfMyUser: USERS[Number(params.user_id) - 1].name,
                }}
            ></Outlet>
        </div>
    );
}

export default User;
