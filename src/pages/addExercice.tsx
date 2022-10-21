import React from 'react';

import ExerciceForm from '../components/ExerciceForm';

function addExercice() {
    return (
        <div>
            <h2 className='center'>Ajouter un Exercice : </h2>

            <ExerciceForm />
        </div>
    );
}

export default addExercice;