import Logo from "/logo.png"

// POST para verificar email e senha para 

export const Login = () => {
    return (
        <>
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
                <div className="absolute top-0 left-0 m-4">
                  <img src={Logo} className="h-12"/>
                </div>  
                <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
                  <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Login</h2>
                  <form>
                    <div className="mb-4">
                      <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                      <input type="email" id="email" placeholder="Digite seu email" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"/>
                    </div>
                    <div className="mb-6">
                      <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Senha</label>
                      <input type="password" id="password" placeholder="Digite sua senha" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"/>
                    </div>
                    <div className="flex items-center justify-between">
                      <button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-red-600">Entrar</button>
                    </div>
                  </form>
                </div>
            </div>
        </>
    )
}