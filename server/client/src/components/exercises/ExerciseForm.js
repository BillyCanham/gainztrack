import React, {useState, useContext, useEffect} from 'react';
import ExerciseContext from '../../context/exercise/exerciseContext';

const ExerciseForm = () => {
    const exerciseContext = useContext(ExerciseContext);

    

    const {addExercise, updateExercise, current, clearCurrent} = exerciseContext;

    useEffect(() => {
        if(current !== null) {
            setExercise(current);
        } else {
            setExercise({
                name:'',
                logs:[]
            });
        }
    },[exerciseContext, current]);

    const [exercise, setExercise] = useState({
        name:'',
        logs: []
    });

    const {name} = exercise;

    const onChange = e => setExercise({
        ...exercise, [e.target.name]: e.target.value
    });

    const onSubmit = e => {
        e.preventDefault();
        if(current === null) {
            addExercise(exercise);
        } else {
            updateExercise(exercise)
        }
        clearAll();
    };

    const clearAll = () => {
        clearCurrent();
    };

    return (
    <form onSubmit={onSubmit}>
        <h2>{current ? 'Edit Exercise' : 'Add Exercise'}</h2>
        <input
             type="text" 
             placeholder='Exercise Name' 
             name='name' value={name} 
             onChange={onChange}/>
<div>
                 <input className='btn' type="submit" value={current ? 'Update Exercise' : 'Add Exercise'} />
           
             
           {current && <button className='btn' onClick={clearAll} >Clear</button>}
             
             </div>
    </form>
    )
}

export default ExerciseForm;