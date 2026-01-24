import React from 'react';
import { useState } from 'react';
import type { Habit } from '../../types';


interface HabitCardProps{

    habit: Habit;  
}

export const HabitCard = ({habit}: HabitCardProps) => {
const [progreso,setProgreso ] = useState(0);
 const metaCompleta = progreso >= habit.meta;
const porcentaje = Math.min(( progreso * habit.meta) * 1 , 100);












 
function progresos() {

setProgreso(progreso + 1);
 console.log(habit.nombre)
 






}

    return (
        

        <div style={{borderColor: habit.color, borderStyle: "solid" }}>

            <h3>{habit.nombre}</h3>
            <p>{habit.descripcion}</p>


<div style={{ background: '#eee', height: '10px', width: '100%', marginBottom: '10px', borderRadius: '5px' }}>
                <div style={{
                    background: habit.color,
                    height: '100%',
                    width: `${porcentaje}%`,  // Usamos el porcentaje corregido
                    borderRadius: '5px',
                    transition: 'width 0.3s ease'
                }} />
            </div>



            <>
           { metaCompleta ? (
            <p> terminado</p>
           ) :(
            < button onClick={progresos}  >
            point
        
            {progreso} / {habit.meta}
           </button>
          )
           
        }
     

           </>
        </div>
    )
}