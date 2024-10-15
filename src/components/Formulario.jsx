import { em } from "framer-motion/client"

const Formulario = ({cliente}) => {
  
  
  
  return (
        <>
            
      <div className="mb-4">
        <label htmlFor='nombre' className="block font-bold text-slate-900">Nombre</label>
        <input
          id='nombre'
          name='nombre'
          type="text"
          className="w-full p-2 border border-gray-300 rounded mt-1"
          placeholder="Nombre"
          defaultValue={cliente?.nombre}
          
        />
      </div>
      <div className="mb-4">
        <label htmlFor='empresa' className="block font-bold ">Empresa</label>
        <input
          name='empresa'
          id='empresa'
          type="text"
          className="w-full p-2 border border-gray-300 rounded mt-1"
          placeholder="Empresa"
          defaultValue={cliente?.empresa}
        />
      </div>
      <div className="mb-4">
        <label htmlFor='email' className="block font-bold text-slate-900">E-mail</label>
        <input
          name='email'
          id='email'
          type="email"
          className="w-full p-2 border border-gray-300 rounded mt-1"
          placeholder="E-mail"
          defaultValue={cliente?.email}
        />
      </div>
      <div className="mb-4">
        <label htmlFor='telefono' className="block font-bold text-slate-900">Teléfono</label>
        <input
          name='telefono'
          id='telefono'
          type="tel"
          className="w-full p-2 border border-gray-300 rounded mt-1"
          placeholder="Teléfono"
          defaultValue={cliente?.telefono}
        />
      </div>
      <div className="mb-4">
        <label htmlFor='notas' className="block font-bold text-slate-900">Notas</label>
        <textarea
          name='notas'
          id='notas'
          className="w-full p-2 border border-gray-300 rounded mt-1"
          placeholder="Notas"
          defaultValue={cliente?.notas}
        ></textarea>
      </div>

        </>
    )
}

export default Formulario