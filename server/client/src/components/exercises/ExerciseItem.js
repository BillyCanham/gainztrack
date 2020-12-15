import React, {useContext} from 'react';
import LogItem from './LogItem';

import PropTypes from 'prop-types';
import ExerciseContext from '../../context/exercise/exerciseContext';




const ExerciseItem = ({exercise}) => {
    const exerciseContext = useContext(ExerciseContext);

    const {setCurrent, clearCurrent, deleteExercise, logs } = exerciseContext;
console.log(logs);

    const {id, name} = exercise;
    

    const onDelete = () => {
        deleteExercise(id);
        clearCurrent();
    }
    return(
<div className='grid-2'>




    <div className='card'  >
        
        <h3 className='text-cent text-white'>{name}</h3>
        
       
      

{/* {logs.map(log => (
               
               <LogItem key={log} log={log} value={name}/>
               
               ))} */}


{logs.map(log =>{
    if(log.exercise === exercise.name){
       return <LogItem key={log} log={log} />
    }
})}
 </div> 
 

    
 

    <div className=''>
    
    <button className='btn' onClick={() => setCurrent(exercise)}>Edit Exercise</button>
    <button className='btn' onClick={onDelete}>Delete Exercise</button>
</div>
</div>
    );
};

ExerciseItem.propTypes = {
    exercise: PropTypes.object.isRequired
}

export default ExerciseItem;

