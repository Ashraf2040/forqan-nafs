import React from 'react';

const FinisheScreen = ({ maxPossiblePoints, points,highscore,dispatch }) => {

    const percentage = (points / maxPossiblePoints) * 100
    let emoji;
    if(percentage === 100) emoji="🎖️"
    if(percentage >= 80 && percentage < 100) emoji="🎉"
    if(percentage >= 50 && percentage < 80) emoji="🎊"
    if(percentage < 50) emoji="🥲🥲😔"
    return (
        <>
        <p className='result'>
         <span>{emoji}</span>   You Scored <strong>{ points}</strong> out of {maxPossiblePoints}  ({Math.ceil(percentage)}%) 
        </p>
            <p className='highscore'>(High score : {highscore} points)</p>
            <button className='btn btn-ui' onClick={()=>dispatch({type:"restart"})}>Restart The Quiz</button> 
            </>
    );
}

export default FinisheScreen;
