import React from 'react';
import type { Habit } from '../data/types';


interface HabitCardProps{

    habit: Habit;  
}

export const HabitCard = ({habit}: HabitCardProps) => {



    return (

        <div>

            <h3>{habit.nombre}</h3>
        </div>
    )
}