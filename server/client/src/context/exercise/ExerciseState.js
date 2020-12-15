import React, { useReducer} from 'react';
import {v4 as uuid} from 'uuid';

import ExerciseContext from './exerciseContext';
import exerciseReducer from './exerciseReducer';
import logsReducer from './logsReducer';

import {
    ADD_EXERCISE, 
     DELETE_EXERCISE,
     UPDATE_EXERCISE, 
     ADD_EXERCISE_LOG,
     DELETE_EXERCISE_LOG, 
     UPDATE_EXERCISE_LOG, 
     SET_CURRENT_EXERCISE,
     SET_CURRENT,
     CLEAR_CURRENT, 
     SET_CURRENT_LOG,
     CLEAR_CURRENT_LOG, 
     FILTER_EXERCISE_LOGS, 
     FILTER_EXERCISES, 
     CLEAR_FILTER, 
     SET_ALERT, 
     REMOVE_ALERT 
} from '../types';


const ExerciseState = props => {
    
    const initialState = {
       exercises:[
           {
               id: 1,
               name: 'Bench Press'
            },
           {
               id: 2,
               name: 'Overhead Press'
            },
           {
               id: 3,
               name: 'Deadlift'
            },
           {
               id: 4,
               name: 'Squat'
            },
        ],
        logs:[
            {
                id:1,
                exercise: 'Bench Press',
                weight: 50,
                reps:10,
                date:'1/1/11'
            },
            {
                id:2,
                exercise: 'Bench Press',
                weight: 55,
                reps:10,
                date:'1/1/11'
            },
            {
                id:3,
                exercise: 'Overhead Press',
                weight: 50,
                reps:10,
                date:'1/1/11'
            },
            {
                id:4,
                exercise: 'Squat',
                weight: 50,
                reps:10,
                date:'1/1/11'
            },
            {
                id:5,
                exercise: 'Deadlift',
                weight: 50,
                reps:10,
                date:'1/1/11'
            },
        ],
    current: null,
    }
    
  

    const [state, dispatch] = useReducer(exerciseReducer, initialState);
    
//     const [state, dispatch] = useReducer(exerciseReducer, initialState);
console.log(state)
//  ADD_EXERCISE, 
const addExercise = exercise => {
    exercise.id=uuid();
    dispatch({type:ADD_EXERCISE, payload:exercise});
};
//  DELETE_EXERCISE,
const deleteExercise = id => {
    dispatch({type:DELETE_EXERCISE, payload:id});
}
//  UPDATE_EXERCISE, 
const updateExercise = exercise => {
    dispatch({type: UPDATE_EXERCISE, payload:exercise});
    
};
//  ADD_EXERCISE_LOG,

// Delete exercise log

//  UPDATE_EXERCISE_LOG, 


//  SET_CURRENT,
const setCurrent = exercise => {
    dispatch({type: SET_CURRENT, payload:exercise});
};
//  CLEAR_CURRENT, 
const clearCurrent = exercise => {
    dispatch({type:CLEAR_CURRENT});
};
//  SET_CURRENT_LOG,

//  CLEAR_CURRENT_LOg, 

//  FILTER_EXERCISE_LOGS, 

//  FILTER_EXERCISES, 

//  CLEAR_FILTER, 

//  SET_ALERT, 

//  REMOVE_ALERT 

return (
    <ExerciseContext.Provider 
    value={{
        exercises: state.exercises,
        logs: state.logs,
        current: state.current,
        addExercise,
        updateExercise,
        deleteExercise,
        
        setCurrent,
        clearCurrent,
        
    }}>
{props.children}
    </ExerciseContext.Provider>
);
};

export default ExerciseState;

