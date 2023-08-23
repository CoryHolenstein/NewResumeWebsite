import Jax from '../Photos/Jax.png';
function About() {




    return (
        <div className="about-page">
            <h1> Portfolio</h1>
            <h3>Hey there!</h3>
            <h4>My name is Cory Holenstein, I graduated from KSU on December 14th, 2021.</h4>


            <p>Obtained Associate degree in Applied Computer Sciences and Bachelor degree in Information Technology,
                with a concentration in mobile development.</p>

            <p>I am currently a full time employee at USAN, a company specializing in business communication software.</p>
            <p>  I'm open to a full time position where I will be challenged and very productive.</p>


            <p>My hobbies include programming (React and C# mainly), gaming (World of Warcraft, Battlefield), working out, and of course, playing with my cats!</p>

            <img src={Jax} width="150" height="150" />
        </div>


    );

}

export default About;