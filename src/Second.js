import React, { Component } from 'react';
import { HashRouter as Router, Link } from 'react-router-dom';

export class Second extends Component {
    render() {
        return (
            <div>
                <p>On the way to see a girl.<br></br>
                    12 hours to go.<br></br>
                    <br></br>
                    ~<br></br>
                </p>
                <p className="trans">
                    I unexpectedly run into an old flame at the airport.<br></br>
                    Am I going in the right direction?<br></br>
                    10 hours to go.
                </p>
                <Router>
                    <div className="trans">
                        {/* Link tags make the buttons links to the correct pages based on the endpoints specified in App.js */}
                        <Link to="/third"><button className="btn">~</button></Link>
                    </div>
                </Router>
            </div>
        );
    }
}

export default Second;
