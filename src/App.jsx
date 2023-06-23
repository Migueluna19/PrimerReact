import { useState,useEffect } from "react"
import Formulario from "./components/Formulario"
import ListadoPacientes from "./components/ListadoPacientes"
import Header from "./components/header"

function App() {
  const [pacientes, setPacientes]=useState([]);
  const [paciente,setPaciente]=useState({});

  useEffect(()=>{
  const ObtenerLS = () =>{
    const pacientesLS= JSON.parse(localStorage.getItem('pacientes')) ?? [];
    setPacientes(pacientesLS)
   }  
   ObtenerLS();
  },[]);

      
  useEffect(()=>{
    localStorage.setItem('pacientes',JSON.stringify(pacientes));    
  },[pacientes])

  const eliminaPaciente=(id)=>{
    const pacientesActualizados=pacientes.filter(paciente=>paciente.id!==id);
    setPacientes(pacientesActualizados)
  }
  return (
   <div className="container mx-auto mt-20">
   <Header/>
   <div className="mt-12 md:ml-5 md:flex">
        <Formulario
        pacientes={pacientes}
        setPacientes={setPacientes}
        paciente={paciente}
        setPaciente={setPaciente}
        />
          <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminaPaciente={eliminaPaciente}
          />
   </div>
   </div>
  )
}

export default App
