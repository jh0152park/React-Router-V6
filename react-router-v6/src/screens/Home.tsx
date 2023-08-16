import { Link } from "react-router-dom";
import { USERS } from "../db";

function Home() {
    return (
        <div>
            <h1>Users</h1>
            <ul>
                {USERS.map((user) => (
                    <li key={user.id}>
                        <Link to={`/users/${user.id}`}>{user.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Home;
