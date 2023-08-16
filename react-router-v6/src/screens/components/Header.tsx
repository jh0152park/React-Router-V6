import { Link, useNavigate } from "react-router-dom";

function Header() {
    const navigate = useNavigate();
    function handleAboutClick() {
        navigate("/about");
    }

    return (
        <header>
            <ul>
                <li>
                    <Link to={"/"}>Home</Link>
                </li>
                <li>
                    <button onClick={handleAboutClick}>About</button>
                </li>
            </ul>
        </header>
    );
}

export default Header;
