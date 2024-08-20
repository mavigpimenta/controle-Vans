import { NavLink } from "react-router-dom"
import Logo from "/logo.png"
import { useState } from "react";
import { FaBars } from "react-icons/fa";

export const NavBarEmployee = () => {

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
                        <NavLink to="/homefunc" className="text-gray-700 hover:text-red-600 px-3 py-2 rounded-md text-sm font-semibold">
                            Home
                        </NavLink>
                        <NavLink to="/routes" className="text-gray-700 hover:text-red-600 px-3 py-2 rounded-md text-sm font-semibold">
                            Rotas
                        </NavLink>
                        <NavLink to="/registerfuel" className="text-gray-700 hover:text-red-600 px-3 py-2 rounded-md text-sm font-semibold">
                            Abastecimento {/* Criar abastecimento */}
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
                        <NavLink to="/homefunc" onClick={toggleMenu} className="block text-gray-700 hover:text-red-600 px-3 py-2 rounded-md text-sm font-semibold">
                            Home
                        </NavLink>
                        <NavLink to="/routes" onClick={toggleMenu} className="block text-gray-700 hover:text-red-600 px-3 py-2 rounded-md text-sm font-semibold">
                            Rotas {/* Lista de rotas que o id daquele motorista esta */}
                        </NavLink>
                        <NavLink to="/registerfuel" onClick={toggleMenu} className="block text-gray-700 hover:text-red-600 px-3 py-2 rounded-md text-sm font-semibold">
                            Abastecimento
                        </NavLink>
                    </div>
                )}
            </nav>
        </>
    )
}