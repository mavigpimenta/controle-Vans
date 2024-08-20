import { useState } from 'react';
import Logo from "/logo.png";

export const NewPassword = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordStrength, setPasswordStrength] = useState(0);
    const [passwordMatch, setPasswordMatch] = useState(true);

    const evaluatePasswordStrength = (password) => {
        let strength = 0;
        if (password.length >= 8) strength += 1;
        if (/[A-Z]/.test(password)) strength += 1;
        if (/[a-z]/.test(password)) strength += 1;
        if (/\d/.test(password)) strength += 1;
        setPasswordStrength(strength);
    };

    const getPasswordStrengthColor = () => {
        switch (passwordStrength) {
            case 1:
                return 'bg-red-500';
            case 2:
                return 'bg-yellow-500';
            case 3:
                return 'bg-blue-500';
            case 4:
                return 'bg-green-500';
            default:
                return 'bg-gray-300';
        }
    };

    const handlePasswordChange = (e) => {
        const value = e.target.value;
        setPassword(value);
        evaluatePasswordStrength(value);
        setPasswordMatch(value === confirmPassword);
    };

    const handleConfirmPasswordChange = (e) => {
        const value = e.target.value;
        setConfirmPassword(value);
        setPasswordMatch(value === password);
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
            <div className="absolute top-0 left-0 m-4">
                <img src={Logo} className="h-12" alt="Logo"/>
            </div>  
            <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Redefinir Senha</h2>
                <form>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Nova Senha</label>
                        <input type="password" id="password" value={password} onChange={handlePasswordChange} placeholder="Digite sua nova senha" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"/>
                        <p className="text-xs text-gray-600 mt-2">
                            A senha deve conter pelo menos 8 caracteres, uma letra maiúscula, uma letra minúscula e um número.
                        </p>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="confirmPassword" className="block text-gray-700 text-sm font-bold mb-2">Confirmar Senha</label>
                        <input type="password" id="confirmPassword" value={confirmPassword} onChange={handleConfirmPasswordChange} placeholder="Confirme sua senha" className={`w-full px-3 py-2 border ${passwordMatch ? 'border-gray-300' : 'border-red-500'} rounded-lg focus:outline-none focus:ring-2 ${passwordMatch ? 'focus:ring-red-600' : 'focus:ring-red-500'}`}/>
                        {!passwordMatch && <p className="text-xs text-red-500 mt-1">As senhas não coincidem.</p>}
                    </div>
                    <div className="h-2 mt-2 bg-gray-300 rounded mb-6">
                        <div className={`${getPasswordStrengthColor()} h-full rounded transition-all duration-300`} style={{ width: `${(passwordStrength / 4) * 100}%` }}></div>
                    </div>
                    <div className="flex items-center justify-between">
                        <button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-red-600" disabled={passwordStrength < 4 || !passwordMatch}>
                            Entrar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
