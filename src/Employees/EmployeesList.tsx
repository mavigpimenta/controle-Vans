import { useState } from 'react';
import { FaEdit, FaTrash, FaPlus } from 'react-icons/fa';
import { NavBarAdm } from '../components/NavBarAdm';
import { useNavigate } from 'react-router-dom';

export const EmployeesList = () => {
    const [employees, setEmployees] = useState([
        { id: 1, name: 'João Souza', dob: '1990-01-01', cnh: '123456789' },
        { id: 2, name: 'Maria Pimenta', dob: '1985-05-15', cnh: '987654321' },
        { id: 3, name: 'João Souza', dob: '1990-01-01', cnh: '123456789' },
        { id: 4, name: 'Maria Pimenta', dob: '1985-05-15', cnh: '987654321' },
        { id: 5, name: 'João Souza', dob: '1990-01-01', cnh: '123456789' },
        { id: 6, name: 'Maria Pimenta', dob: '1985-05-15', cnh: '987654321' },
        { id: 7, name: 'João Souza', dob: '1990-01-01', cnh: '123456789' },
        { id: 8, name: 'Maria Pimenta', dob: '1985-05-15', cnh: '987654321' },
        { id: 9, name: 'João Souza', dob: '1990-01-01', cnh: '123456789' },
        { id: 10, name: 'Maria Pimenta', dob: '1985-05-15', cnh: '987654321' },
        { id: 11, name: 'João Souza', dob: '1990-01-01', cnh: '123456789' },
        { id: 12, name: 'Maria Pimenta', dob: '1985-05-15', cnh: '987654321' },
        { id: 13, name: 'João Souza', dob: '1990-01-01', cnh: '123456789' },
        { id: 14, name: 'Maria Pimenta', dob: '1985-05-15', cnh: '987654321' },
    ]);

    const [currentPage, setCurrentPage] = useState(1);
    const employeesPage = 10;
    const indexOfLastEmployee = currentPage * employeesPage;
    const indexOfFirstEmployee = indexOfLastEmployee - employeesPage;
    const currentEmployees = employees.slice(indexOfFirstEmployee, indexOfLastEmployee);
    const totalPages = Math.ceil(employees.length / employeesPage);
    const navigate = useNavigate();

    const handleAddEmployee = () => {
        navigate("/registerfunc");
    };

    const handleEditEmployee = (id) => {
        // EDITAR
    };

    const handleDeleteEmployee = (id) => {
        setEmployees(employees.filter(employee => employee.id !== id));
    };

    return (
        <>
            <NavBarAdm/>
            <div className="max-h-screen bg-white p-8 z-1 mt-5">
                <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4 md:mb-0">Gerenciar Funcionários</h2>
                    <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 flex items-center" onClick={handleAddEmployee}>
                        <FaPlus className="mr-2"/> Adicionar Funcionário
                    </button>
                </div>
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border rounded-lg">
                        <thead>
                            <tr>
                                <th className="py-2 px-4 border-b text-left text-gray-700">Nome</th>
                                <th className="py-2 px-4 border-b text-left text-gray-700">Data de Nascimento</th>
                                <th className="py-2 px-4 border-b text-left text-gray-700">CNH</th>
                                <th className="py-2 px-4 border-b text-left text-gray-700">Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentEmployees.map((employee) => (
                                <tr key={employee.id}>
                                    <td className="py-2 px-4 border-b">{employee.name}</td>
                                    <td className="py-2 px-4 border-b">{employee.dob}</td>
                                    <td className="py-2 px-4 border-b">{employee.cnh}</td>
                                    <td className="py-2 px-4 border-b flex space-x-2">
                                        <button className="p-2 text-blue-600 hover:text-blue-800" onClick={() => handleEditEmployee(employee.id)}>
                                            <FaEdit />
                                        </button>
                                        <button className="p-2 text-red-600 hover:text-red-800" onClick={() => handleDeleteEmployee(employee.id)}>
                                            <FaTrash />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="mt-4 flex flex-row justify-center">
                    {Array.from({ length: totalPages }, (_, index) => (
                        <button key={index + 1} onClick={() => setCurrentPage(index + 1)} className={`mx-1 px-3 py-1 border rounded ${currentPage === index + 1 ? 'bg-red-600 text-white' : 'bg-white text-gray-800 hover:bg-gray-200'}`}>
                            {index + 1}
                        </button>
                    ))}
                </div>
            </div>
        </>
    );
};
