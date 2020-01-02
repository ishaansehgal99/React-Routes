import {Link} from "react-router-dom";
import React from 'react'

const AboutHome  = ({match}) => {
    return (
        <div>
            <ul>
                <li><Link to={`${match.url}/1`}>Product 1</Link></li>
                <li><Link to={`${match.url}/2`}>Product 2</Link></li>
                <li><Link to={`${match.url}/3`}>Product 3</Link></li>
            </ul>
            {/*<Route path = '/about/:id' render = {()=> (<p> I want this text to show up for all routes other than '/', '/products' and '/category' </p>)}/>*/}

        </div>
    );
};
export default AboutHome;