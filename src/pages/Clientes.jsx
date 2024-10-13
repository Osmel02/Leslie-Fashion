import React from 'react'
import Cliente from '../components/Cliente'
import {useLoaderData} from 'react-router-dom'
import { obtenerClientes } from '../data/clientes'

export function loader(){
  const clientes = obtenerClientes()

  return clientes
}

const Clientes = () => {

  const clientes = useLoaderData()

  return (
    <div className='p-4  '>
      <h2 className='text-xl font-bold mt-10 '>Administra tus clientes</h2>
    
      {clientes.length ?(<table className='w-full mt-5 '>
         <thead className='bg-blue-600 font-bold text-center'>
          <tr>
            <th>Clients</th>
            <th>Contact</th>
            <th>Actions</th>
          </tr>
         </thead>

          <tbody>
              {clientes.map(cliente =>(
                <Cliente 
                cliente={cliente}
                key={cliente.id}
                />
              ))}
          </tbody>


      </table>)
      :(<p className='font-bold text-lg mt-5'>No hay clientes </p>)}

    </div>
  )
}

export default Clientes