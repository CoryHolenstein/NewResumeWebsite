
function Footer() {

    let newDate = new Date()
    let year = newDate.getFullYear();



    return (
        <div className="footer-page">
            <h1> Thanks, talk soon!</h1>
            <p>Copyright Cory Holenstein {year}</p>


        </div>

    );

}

export default Footer;