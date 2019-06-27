import React from 'react';

// Header component
const Header = (props) => {
    return(
        <div className="header">
            <div className="blue-grey darken-3">
                <h1 className="header-title center-align">Tasks React App</h1>
            </div>
            <div className='row'>
                <div className="col l12 m12 s12">
                <blockquote>
                    <h6>Built with: &nbsp; AWS Lambda, DynamoDB, API Gateway, Node.js, JavaScript, 
                        Materialize, and more. Check it out here: 
                            <a 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                href="https://github.com/T-travis/react-tasks-app"> GitHub
                            </a>
                    </h6>
                </blockquote>
                </div>
            </div>
        </div>
    )
}

export default Header;