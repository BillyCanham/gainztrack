import React, { useReducer} from 'react';
import {v4 as uuid} from 'uuid';

import ExerciseContext from './exerciseContext';
import exerciseReducer from './exerciseReducer';
import {
    ADD_EXERCISE, 
     DELETE_EXERCISE,
     UPDATE_EXERCISE, 
     ADD_EXERCISE_LOG,
     DELETE_EXERCISE_LOG, 
     UPDATE_EXERCISE_LOG, 
     SET_CURRENT,
     CLEAR_CURRENT, 
     FILTER_EXERCISE_LOGS, 
     FILTER_EXERCISES, 
     CLEAR_FILTER, 
     SET_ALERT, 
     REMOVE_ALERT 
} from '../types';

const ExerciseState = props => {
    const initialState = {
        exercises: [{
            id: 1,
            exercise_name: 'Bench Press',
            logs: [{
                id:1,
                weight: 100,
                reps: 10
            },
            {
                id:2,
                weight: 105,
                reps: 9
            },]
            },
    
            {
                id: 2,
                exercise_name: 'Deadlift',
                logs: [{
                    id:2,
                    weight: 150,
                    reps: 5
                },
                {
                    id:2,
                    weight: 155,
                    reps: 3
                },]
                },

                {
                    id: 3,
                    exercise_name: 'Squat',
                    logs: [{
                        id:1,
                        weight: 130,
                        reps: 10
                    },
                    {
                        id:2,
                        weight: 105,
                        reps: 10
                    },]
                    },
    ],
    current:null,
    filtered:null
    };

    const [state, dispatch] = useReducer(exerciseReducer, initialState);

//  ADD_EXERCISE, 

//  DELETE_EXERCISE,

//  UPDATE_EXERCISE, 

//  ADD_EXERCISE_LOG,

//  DELETE_EXERCISE_LOG, 

//  UPDATE_EXERCISE_LOG, 

//  SET_CURRENT,

//  CLEAR_CURRENT, 

//  FILTER_EXERCISE_LOGS, 

//  FILTER_EXERCISES, 

//  CLEAR_FILTER, 

//  SET_ALERT, 

//  REMOVE_ALERT 

return (
    <ExerciseContext.Provider 
    value={{

    }}>
{props.children}
    </ExerciseContext.Provider>
);
};

export default ExerciseState;

