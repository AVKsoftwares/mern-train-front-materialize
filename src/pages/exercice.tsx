import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import axios from 'axios'


function Exercice() {
    const { id } = useParams();

    const [exercice, setExercice] = useState({ name: '', description: '' })
    const getExercice = async () => {
        const res = await axios.get(`http://localhost:3001/exercices/${id}`)
        setExercice(res.data)
    }

    useEffect(() => {
        getExercice()
    })


    return (
        <div>
            <div className='center'>
                <h1>{exercice.name}</h1>
                <p>{exercice.description}</p>
            </div>
        </div>
    );
}

export default Exercice;