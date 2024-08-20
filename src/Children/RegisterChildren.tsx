import React, { useState } from 'react';
import { NavBarAdm } from '../components/NavBarAdm';

export const RegisterChildren = () => {

    const schools = [
        { id: '1', name: 'Bagozzi' },
        { id: '2', name: 'Amplação' },
        { id: '3', name: 'Sagrado' },
    ];
    const routes = [
        { id: '1', name: 'Rota 1' },
        { id: '2', name: 'Rota 2' },
        { id: '3', name: 'Rota 3' },
    ];
    const [childName, setChildName] = useState('');
    const [selectedSchool, setSelectedSchool] = useState('');
    const [selectedRoute, setSelectedRoute] = useState('');

    return (
        <>
        <NavBarAdm/>
        <div className="max-w-md mx-auto mt-10 p-5 border rounded shadow-lg mt-52">
            <h1 className="text-2xl font-bold mb-5 text-gray-700">Registrar Criança</h1>
            <form className="space-y-4">
                <div>
                    <label htmlFor="childName" className="block text-sm font-medium text-gray-700">Nome da Criança:</label>
                    <input type="text" id="childName" name="childName" className="mt-1 block w-full p-2 border border-gray-300 rounded" value={childName} onChange={(e) => setChildName(e.target.value)} required/>
                </div>
                <div>
                    <label htmlFor="schoolId" className="block text-sm font-medium text-gray-700">Escola:</label>
                    <select id="schoolId" name="schoolId" className="mt-1 block w-full p-2 border border-gray-300 rounded" value={selectedSchool} onChange={(e) => setSelectedSchool(e.target.value)} required>
                        <option value="">Selecione uma escola</option>
                        {schools.map(school => (
                            <option key={school.id} value={school.id}>{school.name}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label htmlFor="routeId" className="block text-sm font-medium text-gray-700">Rota:</label>
                    <select id="routeId" name="routeId" className="mt-1 block w-full p-2 border border-gray-300 rounded" value={selectedRoute} onChange={(e) => setSelectedRoute(e.target.value)} required>
                        <option value="">Selecione uma rota</option>
                        {routes.map(route => (
                            <option key={route.id} value={route.id}>{route.name}</option>
                        ))}
                    </select>
                </div>
                <button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white p-2 rounded mt-4">
                    Registrar Criança
                </button>
            </form>
        </div>
        </>
    );
};

