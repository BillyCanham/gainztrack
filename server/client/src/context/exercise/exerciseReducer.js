import {
    ADD_EXERCISE, 
     DELETE_EXERCISE,
     UPDATE_EXERCISE, 
     SET_CURRENT,
     CLEAR_CURRENT, 
     FILTER_EXERCISES, 
     CLEAR_FILTER, 
     SET_ALERT, 
     REMOVE_ALERT, 
    
} from '../types';

export default (state, action) => {
    switch(action.type){
    //  ADD_EXERCISE, 
case ADD_EXERCISE:
    return{
        ...state,
        exercises: [...state.exercises, action.payload]
    };
    //  DELETE_EXERCISE,
case DELETE_EXERCISE:
    return{
        ...state,
        exercises: state.exercises.filter(exercise => exercise.id !== action.payload)
    };
    //  UPDATE_EXERCISE, 
case UPDATE_EXERCISE:
    return {
        ...state,
        exercises: state.exercises.map(
            exercise => exercise.id === action.payload.id ?
            action.payload : exercise
        ),
      
    };         
            
    //  SET_CURRENT,
case SET_CURRENT:
    return {
        ...state,
        current: action.payload
    };
    //  CLEAR_CURRENT, 
    case CLEAR_CURRENT:
        return {
            ...state,
            current: null
        };
 
    //  CLEAR_CURRENT, 
    
  

    //  FILTER_EXERCISES, 

    //  CLEAR_FILTER, 

    //  SET_ALERT, 

    //  REMOVE_ALERT 

    default:
        return state;
    }
};