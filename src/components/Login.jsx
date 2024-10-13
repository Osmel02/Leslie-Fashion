import React from 'react'
import { useState } from 'react'
import { FaEnvelope,FaLock,FaSignInAlt } from 'react-icons/fa'

const Login = (onLogin) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Aquí iría la lógica de autenticación
      onLogin(email, password);
    };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
      <h2 className="text-2xl font-bold mb-4">Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700"><FaEnvelope/></label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            placeholder="E-mail"
            required
          />
        </div>
        <div className="mb-4 flex flex-col">
          <label className=" text-gray-700 text-end"><FaLock/></label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className=" p-2 border border-gray-300 rounded mt-1"
            placeholder="Contraseña"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Iniciar Sesión <FaSignInAlt/>
        </button>
      </form>
    </div>
  </div>
  )
}

export default Login