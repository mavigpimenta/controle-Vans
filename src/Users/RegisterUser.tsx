import { useState } from "react";
import { NavBarAdm } from "../components/NavBarAdm";

export const RegisterUser = () => {
    const [profile, setProfile] = useState('');
    const [showEmployeeDetails, setShowEmployeeDetails] = useState(false);
    const [showResponsibleDetails, setShowResponsibleDetails] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [childrenList, setChildrenList] = useState([
        { id: '1', name: 'João' },
        { id: '2', name: 'Maria' },
        { id: '3', name: 'Pedro' },
    ]);

    const handleProfileChange = (e) => {
        setProfile(e.target.value);
        setShowEmployeeDetails(e.target.value === 'Employee');
        setShowResponsibleDetails(e.target.value === 'Responsible');
    }

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredChildren = childrenList.filter(child =>
        child.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    return (
        <>
            <NavBarAdm/>
            <div className="max-w-3xl mx-auto mt-10 p-5 border rounded shadow-lg mb-11">
                <h1 className="text-2xl font-bold mb-5 text-gray-700">Registro de Usuário</h1>
                <form className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nome:</label>
                        <input type="text" id="name" name="name" className="mt-1 block w-full p-2 border border-gray-300 rounded" required />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
                        <input type="email" id="email" name="email" className="mt-1 block w-full p-2 border border-gray-300 rounded" required />
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                        <div>
                            <label htmlFor="country" className="block text-sm font-medium text-gray-700">País:</label>
                            <input type="text" id="country" name="country" className="mt-1 block w-full p-2 border border-gray-300 rounded" required />
                        </div>
                        <div>
                            <label htmlFor="ddd" className="block text-sm font-medium text-gray-700">DDD:</label>
                            <input type="text" id="ddd" name="ddd" className="mt-1 block w-full p-2 border border-gray-300 rounded" required />
                        </div>
                        <div>
                            <label htmlFor="phone_number" className="block text-sm font-medium text-gray-700">Número:</label>
                            <input type="text" id="phone_number" name="phone_number" className="mt-1 block w-full p-2 border border-gray-300 rounded" required />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="road" className="block text-sm font-medium text-gray-700">Rua:</label>
                            <input type="text" id="road" name="road" className="mt-1 block w-full p-2 border border-gray-300 rounded" required />
                        </div>
                        <div>
                            <label htmlFor="number" className="block text-sm font-medium text-gray-700">Número:</label>
                            <input type="number" id="number" name="number" className="mt-1 block w-full p-2 border border-gray-300 rounded" required />
                        </div>
                        <div>
                            <label htmlFor="neighborhood" className="block text-sm font-medium text-gray-700">Bairro:</label>
                            <input type="text" id="neighborhood" name="neighborhood" className="mt-1 block w-full p-2 border border-gray-300 rounded" required />
                        </div>
                        <div>
                            <label htmlFor="cep" className="block text-sm font-medium text-gray-700">CEP:</label>
                            <input type="text" id="cep" name="cep" className="mt-1 block w-full p-2 border border-gray-300 rounded" required />
                        </div>
                        <div>
                            <label htmlFor="city" className="block text-sm font-medium text-gray-700">Cidade:</label>
                            <input type="text" id="city" name="city" className="mt-1 block w-full p-2 border border-gray-300 rounded" required />
                        </div>
                        <div>
                            <label htmlFor="state" className="block text-sm font-medium text-gray-700">Estado:</label>
                            <input type="text" id="state" name="state" className="mt-1 block w-full p-2 border border-gray-300 rounded" required />
                        </div>
                    </div>
                    <div className="mb-4">
                                <label htmlFor="birthDate" className="block text-sm font-medium text-gray-700">Data de Nascimento:</label>
                                <input type="date" id="admissionDate" name="admissionDate" className="mt-1 block w-full p-2 border border-gray-300 rounded" required />
                            </div>
                    <div>
                        <label htmlFor="profile" className="block text-sm font-medium text-gray-700">Perfil:</label>
                        <select id="profile" name="profile" className="mt-1 block w-full p-2 border border-gray-300 rounded" onChange={handleProfileChange} required>
                            <option value="">Selecione um perfil</option>
                            <option value="Employee">Funcionário</option>
                            <option value="Responsible">Responsável</option>
                            <option value="Administrator">Administrador</option>
                        </select>
                    </div>

                    {showEmployeeDetails && (
                        <div className="mt-5 gap-2">
                            <h3 className="text-gray-700 text-xl font-bold mb-3">Detalhes do Funcionário</h3>
                            <div className="grid grid-cols-2 gap-4 mb-4">
                                <div > 
                                    <label htmlFor="cnhNumber" className="block text-sm font-medium text-gray-700">Número CNH:</label>
                                    <input type="text" id="cnhId" name="cnhId" className="mt-1 block w-full p-2 border border-gray-300 rounded" required />
                                </div>
                                <div>
                                    <label htmlFor="cnhValidity" className="block text-sm font-medium text-gray-700">Validade da CNH:</label>
                                    <input type="date" id="cnhId" name="cnhId" className="mt-1 block w-full p-2 border border-gray-300 rounded" required />
                                </div>
                            </div>
                                <div className="mb-4">
                                    <label htmlFor="employeeId" className="block text-sm font-medium text-gray-700">Categoria:</label>
                                    <select id="profile" name="profile" className="mt-1 block w-full p-2 border border-gray-300 rounded" onChange={handleProfileChange} required>
                                        <option value="">Selecione a Categoria</option>
                                        <option value="BC">BC</option>
                                        <option value="BCD">BCD</option>
                                        <option value="ABC">ABC</option>
                                        <option value="ABCD">ABCD</option>
                                    </select>
                                </div>
                            <div className="mb-4">
                                <label htmlFor="admissionDate" className="block text-sm font-medium text-gray-700">Data de Admissão:</label>
                                <input type="date" id="admissionDate" name="admissionDate" className="mt-1 block w-full p-2 border border-gray-300 rounded" required />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="position" className="block text-sm font-medium text-gray-700">Cargo:</label>
                                <input type="text" id="position" name="position" className="mt-1 block w-full p-2 border border-gray-300 rounded" required />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="wage" className="block text-sm font-medium text-gray-700">Salário:</label>
                                <input type="number" id="wage" name="wage" className="mt-1 block w-full p-2 border border-gray-300 rounded" required />
                            </div>
                        </div>
                    )}

                    {showResponsibleDetails && (
                        <div className="mt-5">
                            <h3 className="text-xl font-bold mb-3">Detalhes do Responsável</h3>
                            <div>
                                <label htmlFor="childrenId" className="block text-sm font-medium text-gray-700">Criança:</label>
                                <input type="text" id="childrenSearch" name="childrenSearch" className="mt-1 block w-full p-2 border border-gray-300 rounded" placeholder="Digite o nome da criança..." value={searchTerm} onChange={handleSearchChange}/>
                                <select id="childrenId" name="childrenId" className="mt-2 block w-full p-2 border border-gray-300 rounded" required>
                                    {filteredChildren.map(child => (
                                        <option key={child.id} value={child.id}>{child.name}</option>
                                    ))}
                                </select>
                                <div className="mt-2">
                                    <a href="/registerchild" className="text-red-700 hover:underline">
                                        Não achou a criança? Registre ela aqui.
                                    </a>
                                </div>
                            </div>
                        </div>
                    )}

                    <button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white p-2 rounded mt-4 font-semibold">Registrar</button>
                </form>
            </div>
        </>
    )
}