import { useState, useEffect } from "react"
import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListadoPacientes from "./components/ListadoPacientes"

//Props -> propiedades - para pasar variables o funciones de otros componentes
// Ejemplo - <Header nombreProp={ datos o funciones } />
function App() {

  /*const [pacientes, setPacientes]  = useState([]);
  const [paciente, setPacientes] = useState([]);*/

  const [pacientes, setPacientes] = useState(() =>
    JSON.parse(localStorage.getItem('pacientes')) || []);
  const [paciente,setPaciente] = useState({});

  // useEffect(() => {
  //   const obtenerLS = () =>{
  //     const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];

  //     setPacientes(pacientesLS)
  //   }
  //   obtenerLS()
  // }, [])
  // useEffect(() => {
  //   const pacientesLS = JSON.parse(localStorage.getItem('pacientes'));
  //   pacientesLS?.length > 0 && setPacientes(pacientesLS);
  // }, [pacientes]);

  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes))
  }, [pacientes])

  const eliminarPaciente = (id) => {
    //console.log('Eliminando paciente', id)
    const pacientesActualizados = pacientes.filter( paciente => paciente.id !== id)
    setPacientes(pacientesActualizados)
  }

  return (
    <div className="container mx-auto mt-20">
      <Header/>

      <div className="mt-12 md:flex">
          <Formulario
            pacientes={pacientes}        
            setPacientes={setPacientes}
            paciente={paciente}
            setPaciente={setPaciente}
          />
          <ListadoPacientes
            pacientes = {pacientes}
            setPaciente={setPaciente}
            eliminarPaciente={eliminarPaciente}
          />        
      </div>
      
    </div>
  )
}

export default App
