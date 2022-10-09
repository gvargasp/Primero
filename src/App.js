import logoimg from './imagenes/logo.png';
import './App.css';
import TareaFormulario from './componentes/TareaFormulario';
import ListaDeTareas from './componentes/ListaDeTareas';

function App() {
  return (
    <div className="tarea">
      <div className='contenedor'>
        <img
          src={logoimg}
          className='logo'
          alt="" />
      </div>
      <div className='lista'>
        <h1>Lista de Tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
