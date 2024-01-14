import { NavLink } from 'react-router-dom';

function About() {




    return (

        <div className="specific-projects">
            <h1> Car Finder</h1>
            <h3> Personal project </h3>

            <p>Serverless Architecture</p>
            <p>Client: React</p>
            <p>API: AWS HTTP API Gateway + AWS Lambda for backend functions </p>
            <p>DB: MySQL</p>
            <p></p>
            <p> <a href="https://github.com/CoryHolenstein/CarFinder2">Client</a></p>
            <p> <a href="https://carparkspotsaver.web.app/">Live demo</a></p>



            <NavLink to="/">Back to Portfolio home page</NavLink>

        </div>

    );

}

export default About;