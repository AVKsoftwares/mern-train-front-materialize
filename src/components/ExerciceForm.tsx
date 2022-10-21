import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios";

function ExerciceForm() {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        name: '',
        description: ''
    });


    function handleSubmit(e) {
        e.preventDefault();
        axios.post('http://localhost:3001/exercices/create', form)
            .then(function (response) {
                console.log(response);
                navigate('/');
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div className="container">
            <div className="col s6 m4">
                <div className="card">
                    <div className="card-content">
                        <form onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input id="name" type="text" onChange={e => {
                                        setForm({
                                            ...form,
                                            name: e.target.value
                                        });
                                    }} />
                                    <label htmlFor="name">Name</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <i className="material-icons prefix">description</i>
                                    <textarea id="description" className="materialize-textarea" onChange={e => {
                                        setForm({
                                            ...form,
                                            description: e.target.value
                                        });
                                    }}></textarea>
                                    <label htmlFor="description">Description</label>
                                </div>
                            </div>
                            <div className="center">
                                <button className="btn waves-effect waves-light" type="submit" name="action">Ajouter
                                    <i className="material-icons right">send</i>
                                </button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExerciceForm;
