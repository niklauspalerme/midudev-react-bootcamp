import React, { useState } from 'react'
import Header from '../componentes/Header';
import Content from '../componentes/Content';



const Course = ({courses}) =>{

    const [cours,setCours]= useState(courses)

    return(
        <>
            {
                cours.map ( curso => {
                    return (
                        <div>
                            <Header name={curso.name}/>
                            <Content parts ={curso.parts}/>
                        </div>
                    )
                })
            }
        </>
    )


}


export default Course;