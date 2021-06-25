import React from "react";

const Hero = ({handleLogout}) => {

    return(
        <section className="hero">
            <nav>
                <h2>News Feed</h2>
                <button onClick={handleLogout}>Logout</button>
            </nav>
            <body>
                <form>
                    Titulo: <input type="text" name="titulo"></input>
                    <textarea name="message" rows="5" cols="20"></textarea>
                    <input type="submit" value="Post"></input> 
                </form>
            </body>
        </section>
    );
};

export default Hero;