import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class Navbar extends Component {

    render() {

        return (
            <div className="fixed-top shadow-lg">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-lg">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">News Monkey</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/Technology">Technology</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/Science">Science</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/Sports">Sports</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/Business">Business</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/Entertainment">Entertainment</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="container  bg-white" >
                    <h4 >{this.props.type} Top Headline </h4>
                    <hr style={{ color: '#6200ff', height: '1px' }} />
                </div>
            </div>
        )
    }
}
