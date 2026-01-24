import { misHabitos } from './mocks/habitos';
import { HabitCard } from './components/habits/HabitCard';


export default function App(){


return(

<div style={{ display: 'grid', gap: '20px', padding: '20px' }} >

{misHabitos.map((habito) => 

<HabitCard

key = {habito.id}
habit={habito}
/>

)}

</div>


)

}

