import React from 'react';


const Part = ({name,excercises}) =>{

    return <li>{name} {excercises}</li>

}

const Total = ({parts})=>{

    let excercisesArray = parts.map( part=> part.exercises);

    console.log(excercisesArray);

    let total = excercisesArray.reduce( (previous, current) => previous + current)

    console.log(total)

    return <li><b>Total: {total}</b></li>


}

const Content =({parts})=>{

    return(
        <>
            <ul>
                {
                 parts.map( part => <Part key={part.id} name= {part.name} excercises= {part.exercises}/>)
                }
                <Total parts={parts} />
            </ul>
        </>
    )

}


export default Content;