export interface Habit {
  id: string;
  nombre: string;
  descripcion: string; 
  fechaCreacion: string; 
  color: string;

  categoria: string[];

  dificultad: 'facil' | 'media' |'intermedio'| 'dificil' | 'legendaria';
 
  habitosSiguientes: string[]; 

  meta: number;
  progresoActual: number;
  prioridadDelDia: number; 

  completado: boolean;
  archivado: boolean;
  notificaciones: boolean;


  frecuencia: 'diaria' | 'semanal' | 'mensual';

  fechaLimite: string;
  limiteHorario: string; 
}



