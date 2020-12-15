import React, {Fragment, useContext} from 'react';

import ExerciseItem from './ExerciseItem';
import ExerciseContext from '../../context/exercise/exerciseContext';

const Exercises = () => {
const exerciseContext = useContext(ExerciseContext);
const {exercises} = exerciseContext;


    return(
        <Fragment>
            
            {exercises.map(exercise => (
               
            <ExerciseItem key={exercise.id} exercise={exercise}/>
            
            ))}
           
                
        </Fragment>
    );
};

export default Exercises;