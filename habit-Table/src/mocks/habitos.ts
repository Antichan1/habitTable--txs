import type { Habit } from '../../types';

export const misHabitos: Habit[] = [
    {id: "h1",
    nombre: "Leer Programación",
    descripcion: "Leer 10 páginas de React docs",
    fechaCreacion: "2026-01-12",
    color: "#3498db", // Azul
    categoria: ["Estudio", "Carrera"],
    dificultad: "dificil", // Fíjate que coincide con las opciones que dimos
    habitosSiguientes: [], 
    meta: 10,
    progresoActual: 0,
    prioridadDelDia: 1,
    completado: false,
    archivado: false,
    notificaciones: true,
    frecuencia: "diaria",
    fechaLimite: "2026-12-31",
    limiteHorario: "20:00"},
    {
    id: "h2",
    nombre: "Prácticar 1 hora ingles",
    descripcion: "20 minutos de audio, 20 de repaso, 20 de speaking",
    fechaCreacion: "2026-01-12",
    color: "#6334db", // Azul
    categoria: ["Estudio", "Carrera","dinero/futuro"],
    dificultad: "intermedio", // Fíjate que coincide con las opciones que dimos
    habitosSiguientes: ['ejercicio'], 
    meta: 10,
    progresoActual: 0,
    prioridadDelDia: 3,
    completado: false,
    archivado: false,
    notificaciones: true,
    frecuencia: "diaria",
    fechaLimite: "2026-12-31",
    limiteHorario: "20:00"    
    },
    
];