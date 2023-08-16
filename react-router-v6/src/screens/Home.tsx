import { Link, useSearchParams } from "react-router-dom";
import { USERS } from "../db";

function Home() {
    const [readSearchParams, setSearchParams] = useSearchParams();

    readSearchParams.get("geo"); // if we has geo, then will return value of geo
    readSearchParams.has("geo"); // if we has geo, then will return true, if dont? return false
    setSearchParams({
        day: "today",
        tomorrow: "idk!",
    }); // then our search url will be changed

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
