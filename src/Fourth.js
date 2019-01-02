import React, { Component } from 'react';
import { HashRouter as Router, Link } from 'react-router-dom';

export class Fourth extends Component {
    render() {
        return (
            <div>
                <p>On the way to see a girl.<br></br>
                    12 hours to go.<br></br>
                    <br></br>
                    ~<br></br>
                </p>
                
                <p>
                    I unexpectedly run into an old flame at the airport.<br></br>
                    Am I going in the right direction?<br></br>
                    10 hours to go.<br></br>
                    <br></br>
                    ~<br></br>
                </p>
                <p>
                    Flight lands and I get to baggage claim.<br></br>
                    Why do I carry so much on my shoulders?<br></br>
                    8 hours to go.<br></br>
                    <br></br>
                    ~<br></br>
                </p>
                <p>
                    Now on the shuttle and we’re stuck in traffic.<br></br>
                    Stagnancy makes me feel like I’m missing out on something.  What should I be doing?<br></br>
                    6 hours to go.
                </p>
                <Router>
                    <div>
                        {/* Link tags make the buttons links to the correct pages based on the endpoints specified in App.js */}
                        <Link to="/fifth"><button className="btn btn-primary">~</button></Link>
                    </div>
                </Router>
            </div>
        );
    }
}

export default Fourth;
