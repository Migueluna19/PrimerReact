import Paciente from "./Paciente"

function ListadoPacientes({pacientes,setPaciente,eliminaPaciente}) {
 
  return (
    <div className="md:w-1/2 lg:3/5 md:h-screen overflow-scroll">
      {pacientes.length===0 ?(
        <>
          <h2 className="font-black text-3xl text-center">No hay Pacientes</h2>
        <p className="text-xl mt-5 mb-10 text-center">
          Commienza Agregando Pacientes {''}
          <span className="text-indigo-600 font-bold">y apareceran en este lugar</span>
        </p>
      </>
      ):(
        <>
      <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Administra tus {''}
            <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
          </p>
    </>
      )}
      
    {pacientes.map((paciente)=>(
      <Paciente
      key={paciente.id}
      paciente={paciente}
      setPaciente={setPaciente}
      eliminaPaciente={eliminaPaciente}
      />
     ))}
    </div>
  )
}

export default ListadoPacientes