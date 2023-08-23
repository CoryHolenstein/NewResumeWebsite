import { NavLink } from 'react-router-dom';

function About() {




    return (

        <div className="specific-projects">
            <h1> Car Finder</h1>
            <h3> Personal project </h3>

            <p>Client: React AWS Amplify</p>
            <p>API: AWS HTTP API Gateway</p>
            <p>DB: MySQL</p>
            <p></p>
            <p> </p>
            <p> <a href="https://github.com/CoryHolenstein/CarFinder2">Client</a></p>



            <NavLink to="/">Back to Portfolio home page</NavLink>

        </div>

    );

}

export default About;