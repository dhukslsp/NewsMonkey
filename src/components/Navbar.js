import React, { Component } from 'react'
import  {Link} from 'react-router-dom'
export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">News Monkey  App</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link  className="nav-link" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to='/entertainment'>entertainment</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to='/health'>Health</Link> 
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to='/science'>Science</Link> 
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to='/tecnology'>Tecnology</Link> 
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to='/about'>About WebApp</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
