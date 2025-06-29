
import { Outlet } from "react-router";
import Nav from "./Nav";

const appTitle = 'Tennis Parser';
const navLinks = [
    { to: '/rankings', label: 'Rankings' },
    { to: '/players', label: 'Players' },
];


export default function Root() {
    return (
        <div>
            <Nav appTitle={appTitle} navLinks={navLinks} />
            <Outlet />
        </div>
    );
}