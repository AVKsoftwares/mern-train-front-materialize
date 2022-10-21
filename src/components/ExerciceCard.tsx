import React from "react"
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";

function ExerciceCard({ exercice }) {
	const navigate = useNavigate();

	function handleClick() {
		axios.get(`http://localhost:3001/exercices/delete/${exercice._id}`)
			.then(function (response) {
				console.log(response);
				navigate(0);
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	return (
		<div className="col s12 m6 l4">
			<div className="card blue-grey darken-1">
				<div className="card-content white-text">
					<span className="card-title">{exercice.name}</span>
					<p>{exercice.description}</p>
				</div>
				<div className="card-action">
					<Link to={{ pathname: `/exercice/${exercice._id}` }} > Afficher</Link>
					<Link to={{ pathname: `/updateExercice/${exercice._id}` }}>Modifier</Link>
					<button className="btn waves-effect waves-light" type="submit" name="action" onClick={handleClick}>Supprimer
						<i className="material-icons right">delete</i>
					</button>

				</div>
			</div>
		</div>
	)
}

export default ExerciceCard;
