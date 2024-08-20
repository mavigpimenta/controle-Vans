import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "/logo.png";
import { FaBars } from "react-icons/fa"; 

export const NavBarAdm = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-white p-4 shadow-lg z-10">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <img src={Logo} alt="Logo" className="h-10 mr-4"/>
                </div>
                <div className="hidden md:flex space-x-4">
                    <NavLink to="/dashboard" className="text-gray-700 hover:text-red-600 px-3 py-2 rounded-md text-sm font-semibold">
                        Home
                    </NavLink>
                    <NavLink to="/employees" className="text-gray-700 hover:text-red-600 px-3 py-2 rounded-md text-sm font-semibold">
                        Funcionários
                    </NavLink>
                    <NavLink to="/children" className="text-gray-700 hover:text-red-600 px-3 py-2 rounded-md text-sm font-semibold">
                        Crianças
                    </NavLink>
                    <NavLink to="/vans" className="text-gray-700 hover:text-red-600 px-3 py-2 rounded-md text-sm font-semibold">
                        Vans
                    </NavLink>
                    <NavLink to="/monthly" className="text-gray-700 hover:text-red-600 px-3 py-2 rounded-md text-sm font-semibold">
                        Mensalidades
                    </NavLink>
                    <NavLink to="/fuel" className="text-gray-700 hover:text-red-600 px-3 py-2 rounded-md text-sm font-semibold">
                        Abastecimento
                    </NavLink>
                </div>
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-gray-700 hover:text-red-600 focus:outline-none">
                        <FaBars className="h-6 w-6" />
                    </button>
                </div>
            </div>
            {isMenuOpen && (
                <div className="md:hidden mt-4 space-y-2">
                    <NavLink to="/dashboard" onClick={toggleMenu} className="block text-gray-700 hover:text-red-600 px-3 py-2 rounded-md text-sm font-semibold">
                        Home
                    </NavLink>
                    <NavLink to="/employees" onClick={toggleMenu} className="block text-gray-700 hover:text-red-600 px-3 py-2 rounded-md text-sm font-semibold">
                        Funcionários
                    </NavLink>
                    <NavLink to="/children" onClick={toggleMenu} className="block text-gray-700 hover:text-red-600 px-3 py-2 rounded-md text-sm font-semibold">
                        Crianças
                    </NavLink>
                    <NavLink to="/vans" onClick={toggleMenu} className="block text-gray-700 hover:text-red-600 px-3 py-2 rounded-md text-sm font-semibold">
                        Vans
                    </NavLink>
                    <NavLink to="/monthly" onClick={toggleMenu} className="block text-gray-700 hover:text-red-600 px-3 py-2 rounded-md text-sm font-semibold">
                        Mensalidades
                    </NavLink>
                    <NavLink to="/fuel" onClick={toggleMenu} className="block text-gray-700 hover:text-red-600 px-3 py-2 rounded-md text-sm font-semibold">
                        Abastecimento
                    </NavLink>
                </div>
            )}
        </nav>
    );
};
