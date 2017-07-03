import React from 'react';
import { Link } from 'react-router';

class HomePage extends React.Component {
    render() {
        return ( 
            <div className = "jumbotron" >
                <h1 > PluraSight Administration </h1> 
                <p > React redux and React Router in ES56 </p> 
                <Link to = "about" className = "btn btn-primary btn-lg" > Learn more </Link> 
            </div>
        );
    }
}

export default HomePage;