import React, { useEffect, useState } from 'react';
import axios from 'axios'

import ExerciceCard from '../components/ExerciceCard';

function Index() {
    const [exercices, setExercices] = useState([])
    const getExercices = async () => {
        const res = await axios.get('http://localhost:3001/exercices')
        setExercices(res.data)
    }

    useEffect(() => {
        getExercices()
    }, [])

    return (
        <div className='container'>
            <div className='row'>
                {exercices.map((exercice) => (
                    <ExerciceCard key={exercice._id} exercice={exercice} />
                ))}
            </div>
        </div>
    );
}

export default Index;