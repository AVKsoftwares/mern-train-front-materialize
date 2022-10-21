import * as React from "react";
import { Outlet, Link } from "react-router-dom";

function LayoutNavbar() {

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Exercices</Link>
          </li>
          <li>
            <Link to="/addExercice">Ajouter un Exercice</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default LayoutNavbar;