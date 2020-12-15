import React, {useContext} from 'react';


import PropTypes from 'prop-types';
import ExerciseContext from '../../context/exercise/exerciseContext';

const LogItem = ({log}) => {
    const exerciseContext = useContext(ExerciseContext);

    const {setCurrent, clearCurrent, deleteExerciseLog, } = exerciseContext;

    const {id,exercise, weight, reps, date} = log;
    
    // const onDeleteLog = () => {
    //     deleteExerciseLog(logid);
        
    // }

    
    return(
        <div className='grid-2 pad-btm-sm'>
        
          {   log ?
        <div className='grid-3 text-white'>
       
        <span>{date.split("-").reverse().join("-")}</span>
        <p>Weight: {weight}KG</p>
        <p>Reps: {reps}</p>
        
        </div> : <p className='text-white'>No Logs</p>
        
          }
          <div>
          <button className='btn' >Edit Log</button>
          <button className='btn' >Delete Log</button>
    </div>
        </div>
    );
};

LogItem.propTypes = {
    log: PropTypes.object.isRequired
}

export default LogItem;