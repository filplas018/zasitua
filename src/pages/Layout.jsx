import { Outlet, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export const Layout = () => {
    const navigate = useNavigate();
    return(
        <>
        <NavBar></NavBar>
        <Outlet />
        <Footer/>
    </>
    );
}

export default Layout;