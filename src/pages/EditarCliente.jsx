import { obtenerCliente } from "../data/clientes"
import { Form,useLoaderData,redirect } from "react-router-dom"
import Formulario from "../components/Formulario"
import { actualizarCliente } from "../data/clientes"

export async function loader({params}) {
    const cliente = await obtenerCliente(params.clienteId)
    if(Object.values(cliente).length === 0){
      throw new Response('',{
        status: 404,
        statusText: 'El cliente no fue encontrado'
      })
    }

    return cliente
}

export async function action({request,params}) {
  const formData = await request.formData()

  const datos = Object.fromEntries(formData)

  const errores = []
  if(Object.values(datos).includes('')){
    errores.push('Todos los campos son obligatorios')
    
  }

  if(Object.keys(errores).length){
    return errores
  }

  await actualizarCliente(params.clienteId, datos)

  return redirect('/clientes')
}

const EditarCliente = () => {

  const cliente = useLoaderData()
  console.log(cliente)
  return (
    <div className="flex flex-col justify-start items-center min-h-screen p-6 bg-gray-100 rounded-lg shadow-md w-full">
    <div className='flex flex-col justify-start items-start w-full mb-10 mx-10'>
      <h2 className=" text-3xl text-slate-900  font-black  ">Editar Cliente</h2>
      <p className='font-bold text-slate-900'>Modifique los datos del cliente</p>
    </div>


    <Form 
      className='md:w-3/5' 
      method='POST'
      
    >
      <Formulario
        cliente={cliente}
      />

      <button
        type="submit"
        className="w-full bg-slate-800 font-bold text-white p-2 rounded hover:bg-slate-900"
      >
        Actualizar cliente
      </button>
    
    </Form>
  </div>
  )
}

export default EditarCliente