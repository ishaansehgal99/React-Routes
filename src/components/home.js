import React from 'react'
import {Link, Route} from 'react-router-dom'
const Home = () => {
    return (

        <div>
            <ul>
                <li>
                    <Link to="/about">About page</Link>
                </li>
                <li>
                    <Link to="/users"> Users page </Link>
                </li>
            </ul>




        </div>
    );
};

export default Home;