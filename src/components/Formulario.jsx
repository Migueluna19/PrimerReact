import { useState, useEffect } from "react"
import Error from "./Error"
function Formulario({setPacientes,pacientes,paciente,setPaciente}) {
  const [nombre, setNombre]=useState('');
  const [propietario, setPropietario]=useState('');
  const [email, setEmail]=useState('');
  const [fecha, setFecha]=useState('');
  const [sintomas, setSintomas]=useState('');
  const [error, setError]=useState(false);

  useEffect(()=>{
    if(Object.keys(paciente).length>0){
      setNombre(paciente.nombre)
    setPropietario(paciente.propietario)
    setEmail(paciente.email)
    setFecha(paciente.fecha)
    setSintomas(paciente.sintomas)
    }
  },[paciente]);

  const generarId=()=>{
    const random= Math.random().toString(36).substr(2);
    const fecha=Date.now().toString(36);
    return random+fecha;
  }

  const handleSumbit = (e) => {
    e.preventDefault();
    //Validacion de Formulaio
    if([nombre, propietario, email, fecha, sintomas].includes('')){
      setError(true)
      return;
    }
    setError(false)
    //objeto Paciente
    const objetoPaciente={
      nombre, 
      propietario, 
      email, 
      fecha, 
      sintomas
    }
    //Comprobar si estamos editando o Agregando nuevo paciente
    if(paciente.id){
      //Editando registro
      objetoPaciente.id=paciente.id
      const pacientesActualizados=pacientes.map(pacienteState=>pacienteState.id===paciente.id?objetoPaciente:pacienteState)
      setPacientes(pacientesActualizados)
      setPaciente({})
    }else{
      //Nuevo Registro
      objetoPaciente.id=generarId();
      setPacientes([...pacientes,objetoPaciente]);
    }
    
    //Reiniciar el Formulario
    setNombre('')
    setPropietario('')
    setEmail('')
    setFecha('')
    setSintomas('')
   
  }

  return (
    <div className="md:w-1/2 lg:w-2/5">
    <h2 className="font-black text-3xl text-center">Seguimiento de Pacientes</h2>
    <p className="text-lg mt-5 text-center mb-10">
      Añade Pacientes y {''}
      <span className="text-indigo-600 font-bold">Administralos</span>
    </p>
    <form onSubmit={handleSumbit} className="bg-white shadow-md rounded-lg py-10 px-5 mx-5 mb-10">
      {error && <Error><p>Todos los campos son obligatorios</p></Error>}
    <div className="mb-5">
      <label className="block text-gray-700 uppercase font-bold" htmlFor="nombre">Nombre Mascota</label>
      <input type="text" 
      id="nombre"
      placeholder="Nombre de la Mascota"
      className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
      value={nombre}
      onChange={(e)=>setNombre(e.target.value)}
      />
    </div>
    <div className="mb-5">
      <label className="block text-gray-700 uppercase font-bold" htmlFor="propietario">Nombre Propietario</label>
      <input type="text" 
      id="propietario"
      placeholder="Nombre del Propietario"
      className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
      value={propietario}
      onChange={(e)=>setPropietario(e.target.value)}
      />
    </div>
    <div className="mb-5">
      <label className="block text-gray-700 uppercase font-bold" htmlFor="email">E-mail</label>
      <input type="email" 
      id="email"
      placeholder="Correo Electrónico"
      className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
      value={email}
      onChange={(e)=>setEmail(e.target.value)}
      />
    </div>
    <div className="mb-5">
      <label className="block text-gray-700 uppercase font-bold" htmlFor="alta">Alta</label>
      <input type="date" 
      id="alta"
      className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
      value={fecha}
      onChange={(e)=>setFecha(e.target.value)}
      />
    </div>
    <div className="mb-5">
      <label className="block text-gray-700 uppercase font-bold" htmlFor="sintomas">Sintomas</label>
      <textarea
      id="sintomas"
      placeholder="Describe los Sintomas"
      className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
      value={sintomas}
      onChange={(e)=>setSintomas(e.target.value)}
      />
    </div>
    <input type="submit"
    className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
    value={paciente.id? 'Editar Paciente':'Agregar Paciente'}  
    />
    </form>
    </div>
  )
}

export default Formulario