import { Outlet } from "react-router-dom";
import { Link, Header, Navv } from "../styles/NavStyles";

export const Nav = () => {
    return (
        <>
            <Header>
                <Navv>
                    <Link to="/">Home</Link>
                    <Link to="/movies">Movies</Link>
                </Navv>
            </Header>
            <Outlet />
        </>
    )
}
