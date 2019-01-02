import React, { Component } from 'react';
import { HashRouter as Router, Link } from 'react-router-dom';

export class First extends Component {
    render() {
        return (
            <div>
                <p>
                    On the way to see a girl.<br></br>
                    12 hours to go.
                </p>
                <Router>
                    <div>
                        {/* Link tags make the buttons links to the correct pages based on the endpoints specified in App.js */}
                        <Link to="/second"><button className="btn">~</button></Link>
                    </div>
                </Router>
            </div>
        );
    }
}

export default First;
