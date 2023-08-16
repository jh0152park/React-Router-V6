import { useOutletContext } from "react-router-dom";

interface IFollowerContect {
    nameOfMyUser: string;
}

function Followers() {
    const { nameOfMyUser } = useOutletContext<IFollowerContect>();

    return <h1>Followers from: {nameOfMyUser} </h1>;
}

export default Followers;
