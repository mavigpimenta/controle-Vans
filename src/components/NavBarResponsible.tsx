import { NavLink } from "react-router-dom"
import Logo from "/logo.png"
import { useState } from "react";
import { FaBars } from "react-icons/fa";

export const NavBarResponsible = () => {
    
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    
    return (
        <>
            <nav className="bg-white p-4 shadow-lg">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="flex items-center">
                        <img src={Logo} alt="Logo" className="h-10 mr-4"/>
                    </div>
                    <div className="flex space-x-4">
                        <NavLink to="/homeresp" className="text-gray-700 hover:text-red-600 px-3 py-2 rounded-md text-sm font-semibold">
                            Home
                        </NavLink>
                        <NavLink to="/map" className="text-gray-700 hover:text-red-600 px-3 py-2 rounded-md text-sm font-semibold">
                            Mapa
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
                        <NavLink to="/homeresp" onClick={toggleMenu} className="block text-gray-700 hover:text-red-600 px-3 py-2 rounded-md text-sm font-semibold">
                            Home
                        </NavLink>
                        <NavLink to="/map" onClick={toggleMenu} className="block text-gray-700 hover:text-red-600 px-3 py-2 rounded-md text-sm font-semibold">
                            Mapa
                        </NavLink>
                    </div>
                )}
            </nav>
        </>
    )
}