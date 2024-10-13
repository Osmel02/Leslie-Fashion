import React from 'react'
import { useNavigate,Form ,redirect} from 'react-router-dom'
import { eliminarCliente } from '../data/clientes'


export async function action({params}) {
  await eliminarCliente(params.clienteId)
  return redirect('/clientes')
}


const Cliente = ({cliente}) => {
  const navigate = useNavigate()
  const {nombre,empresa,email,telefono,id} = cliente
  
  return (
    <tr className='border-b'>
        <td className='p-6'>
            <p className='text-2xl text-gray-800'>{nombre}</p>
            <p>{empresa}</p>
        </td>
        
        <td className='p-6'>
            <p className='text-gray-600 '><span className='text-gray-800 uppercase font-bold'>Email: </span>{email}</p>
            <p className='text-gray-600 '><span className='text-gray-800 uppercase font-bold'>Telefono: </span>{telefono}</p>
        </td>

        <td className='p-6 flex gap-3'>
            <button 
              className='text-blue-700 hover:text-blue-900 uppercase font-bold text-xs' 
              onClick={()=> navigate(`/clientes/${id}/editar`)}
            >Editar</button>
            
            <Form
              method='post'
              action={`/clientes/${id}/eliminar`}
              onSubmit={(e)=> {
                if(!confirm('Deseas eliminar este registro ?')){
                  e.preventDefault()
                }
              }}
            >
              <button className='text-red-700 hover:text-red-900 uppercase font-bold text-xs'>Eliminar</button>
            </Form>
            
        
        </td>
    </tr>
  )
}

export default Cliente