import { Outlet, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import NavigationHeader from "../components/NavigationHeader"

export const LayoutOther = () => {
    const navigate = useNavigate();
    return(
        <>
        <NavBar></NavBar>
        <NavigationHeader heading={"Aktuality"}/>
        <Outlet />
        <Footer/>
    </>
    );
}

export default LayoutOther;