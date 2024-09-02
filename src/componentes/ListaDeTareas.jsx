import React, { useState } from 'react';
import TareaFormulario from './TareaFormulario';
import Tarea from './Tarea';
import '../hojas-de-estilo/ListaDeTareas.css';

function ListaDeTareas() {

  const [tareas, setTareas] = useState([]);

  const agregarTarea = tarea => {
      //Verificamos si la candena no esta vacia    
   if (tarea.texto.trim()) {
      //Quitamos los espacios innecesarios	
      tarea.texto = tarea.texto.trim(); 
      //Creamos un arreglo con todas las tareas anteriores y la nueva tarea
      const tareasActualizadas = [tarea, ...tareas];
      //Luego actualizamos el estado
      setTareas(tareasActualizadas);
    } 
  };

  const eliminarTarea = id => {
    const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
    setTareas(tareasActualizadas);
  };

  const completarTarea = id => {
    const tareasActualizadas = tareas.map(tarea => {
      if (tarea.id === id) {
        tarea.completada = !tarea.completada;
      }
      return tarea;
    });
    setTareas(tareasActualizadas);
  };

  return(
    <>
      <TareaFormulario onSubmit={agregarTarea}/>
      <div className='tareas-lista-contenedor'>
        {
          tareas.map((tarea) => 
            <Tarea 
              key={tarea.id}
              id={tarea.id}
              texto={tarea.texto}
              completada={tarea.completada}
              eliminarTarea={eliminarTarea}
              completarTarea={completarTarea}
            />
          ) 
        }
      </div>
    </>
  );
}

export default ListaDeTareas;