import React, {useState, useContext, useEffect} from 'react';
import ExerciseContext from '../../context/exercise/exerciseContext';

const ExerciseLogForm = () => {
const exerciseContext = useContext(ExerciseContext);

const {addExerciseLog, updateExerciseLog, currentLog, clearCurrentLog} = exerciseContext;

useEffect(() => {
    if(currentLog !== null) {
        setExerciseLog(currentLog);
    } else {
        setExerciseLog({
            reps: '',
            weight: '',
            date: ''
        });
    }
},[exerciseContext, currentLog]);

const [exerciseLog, setExerciseLog] = useState({
    reps: '',
            weight: '',
            date: ''
});

const onChange = e => setExerciseLog({
    ...exerciseLog, [e.target.name]: e.target.value
});

const onSubmit = e => {
    e.preventDefault();
    if(currentLog === null) {
        addExerciseLog(exerciseLog);
    } else {
        updateExerciseLog(exerciseLog)
    }
    clearAll();
};

const clearAll = () => {
    clearCurrentLog();
};


    return(
        <form onSubmit={onSubmit}>
        <h2>Add Exercise Log</h2>
        <select name="" id="" >

        </select>
        <input type="number" placeholder='Reps' />
        <input type="number" placeholder='Weight KG'/>
        <input type="Date"/>
        <input className='btn' type="submit" value='Add Log' />
        </form>

    )
}

export default ExerciseLogForm;