import { NavLink } from 'react-router-dom';
import Github from '../Icons/GitHub-logo.png';
function Projects() {



    return (
        <div className="projects-page">
            <h1>Projects</h1>
            <h3>Repo of Projects: </h3>
            <a href="https://github.com/CoryHolenstein"><button>

                <img src={Github} width="100" height="60" alt="github icon png background" />
            </button></a>
            <h2>Specific project links</h2>
            <div className="left-col">


                <NavLink to="/CarFinder">Car Finder</NavLink>

            </div>
            <div className="center-col"> </div>
            <div className="right-col"> </div>



        </div>





    );
}

export default Projects;