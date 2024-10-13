import React from 'react'
import Formulario from '../components/Formulario'
import {Form,useActionData, redirect} from 'react-router-dom'
import { agregarCliente } from '../data/clientes'

export async function action({request}){
  const formData = await request.formData()

  const datos = Object.fromEntries(formData)

  const errores = []
  if(Object.values(datos).includes('')){
    errores.push('Todos los campos son obligatorios')
    
  }

  if(Object.keys(errores).length){
    return errores
  }

  await agregarCliente(datos)

  return redirect('/clientes')
}

const ClienteNuevo = () => {

  const datos = useActionData()

  return (
    <div className="flex flex-col justify-start items-center min-h-screen p-6 bg-gray-100 rounded-lg shadow-md w-full">
    <div className='flex flex-col justify-start items-start w-full mb-10 mx-10'>
      <h2 className=" text-3xl text-slate-900  font-black  ">Nuevo Cliente</h2>
      <p className='font-bold text-slate-900'>Llene todos los campos para registrar un nuevo cliente</p>
    </div>


    <Form 
      className='md:w-3/5' 
      method='POST'
      
    >
      <Formulario/>
    
      <button
        type="submit"
        className="w-full bg-slate-800 font-bold text-white p-2 rounded hover:bg-slate-900"
      >
        Registrar cliente
      </button>

    </Form>
  </div>
  )
}

export default ClienteNuevo