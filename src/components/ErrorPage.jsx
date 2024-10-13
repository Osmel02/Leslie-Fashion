import React from 'react';
import { motion } from 'framer-motion';
import {Link} from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      className="bg-white p-8 rounded-lg shadow-lg text-center"
    >
      <h1 className="text-6xl font-bold text-red-500">Error</h1>
      <p className="text-2xl mt-4">Trabajamos en su pronta solucion</p>
      <p className="mt-2 text-gray-600">Intente mas tarde</p>
      <Link to='/' className="mt-6 inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
        Volver al inicio
      </Link>
    </motion.div>
  </div>
  );
};

export default ErrorPage
