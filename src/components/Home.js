import React from 'react';
import {Link} from 'react-router-dom'

const home = () => (
    <div className='container'>
        <div className="jumbotron mt-5">
            <h1 className="display-4">Welcome to BlogPool!</h1>
            <p className="lead">Share valuable experience on our curated topics.</p>
            <hr className="my-4"/>
            <p>Click the button below to checkout our awesome blogs.</p>
            <Link className="btn btn-primary btn-lg" to="/blog" role="button">Check out our blog</Link>
        </div>
    </div>
    
);

export default home;