import logo from "../img/menulogo.png";
import { Outlet, Link } from "react-router-dom";
export const NavBar = () => {

    return (
        <nav className="bg-white border-gray-700 py-2.5">
            <div className="container max-w-[1200px] mx-auto md:px-10 sm:px-8 px-6 flex flex-wrap justify-between items-center mx-auto">
                <Link to="/" className="flex items-center">
                    <img src={logo} className=" mr-3 w-20" alt="DDM Smetanka" />
                </Link>
                <button id="triggerEl" data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 " aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6 text-yellow" area-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="flex flex-col p-4 mt-4 bg-gray-50 lg:text-lg  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white text-blue">

                        <li>
                            <Link to="/o-nas" className="block py-2 pr-4 pl-3 text-blue">O nás</Link>
                        </li>
                        <li>
                            <Link to="/aktuality" className="block py-2 pr-4 pl-3 text-blue">Aktuality</Link>
                        </li>
                        <li>
                            <Link to="/uzitecne-odkazy" className="block py-2 pr-4 pl-3 text-blue">Odkazy</Link>
                        </li>
                        <li>
                            <Link to="/kontakty" className="block py-2 pr-4 pl-3 text-blue">Kontakty</Link>
                        </li>
                        <li>
                            <input type="text" id="search-navbar" className="block p-2 pl-10 w-full text-gray-900 bg-gray-50 sm:text-lg focus:ring blue-500 focus:border-blue-500" placeholder="Vyhledat    ..." />
                        </li>
                        <li className="text-gray-500">
                            <div className="py-2">
                                <a href="">CZ</a> | <a href="">PL</a> | <a href="">EN</a></div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );

}
export default NavBar;