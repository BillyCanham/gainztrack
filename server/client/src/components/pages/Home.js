import React from 'react';
import Exercises from '../exercises/Exercises';
import ExerciseForm from '../exercises/ExerciseForm';


const Home = () => {
    return(
        <div>
        <div className='grid-2'>
            <div>
            <Exercises/>
            </div>
            <div>
                <ExerciseForm/>
                {/* <ExerciseLogForm/> */}
            </div>
            
        </div>
    
    </div>
);
};


export default Home;