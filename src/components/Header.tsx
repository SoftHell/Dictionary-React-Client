import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const Header = (): JSX.Element => {
    const appState = useContext(AppContext);

    return (
        <header>
            <nav className="navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3">
                <div className="container menu-bar">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

            <div className="navbar-collapse collapse d-lg-inline-flex justify-content-between">
                <ul className="navbar-nav flex-grow-1">
                    <li className="nav-item">
                        <NavLink className="nav-link text-light" to="/">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-house-fill" viewBox="0 0 16 16">
                                <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
                                <path d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
                            </svg>
                        </NavLink>
                    </li>

                    <li className="nav-item dropdown">
                        <NavLink className="nav-link dropdown-toggle text-light" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Hobbies
                        </NavLink>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <NavLink className="nav-link nav-dropdown-link text-dark" to="/ActivityType">Activity Types</NavLink>
                            <NavLink className="nav-link nav-dropdown-link text-dark" to="/HobbyCenter">Hobby Centers</NavLink>
                            <NavLink className="nav-link nav-dropdown-link text-dark" to="/HobbyGroup">Hobby Groups</NavLink>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <NavLink className="nav-link dropdown-toggle text-light" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Language
                        </NavLink>
                        {/* <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <NavLink className="nav-link nav-dropdown-link text-dark" to="/Home/SetLanguage?culture=et&amp;returnUrl=%2F">eesti</NavLink>
                                <NavLink className="nav-link nav-dropdown-link text-dark" to="/Home/SetLanguage?culture=en&amp;returnUrl=%2F">English</NavLink>
                        </div> */}
                    </li>
                </ul>
                <ul className="navbar-nav">
                    {appState.jwt === null ?
                        <>
                            <li className="nav-item">
                                <NavLink className="nav-link text-light" to="/identity/register">Register</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-light" to="/identity/login">Login</NavLink>
                            </li>
                        </>
                        :
                        <>
                            <li className="nav-item">
                                <span className="nav-link text-dark">{appState.email}</span>
                            </li>
                            <li className="nav-item">
                                <button onClick={() => appState.setAuthInfo(null, '')} className="btn btn-link nav-link text-light" >Logout</button>
                            </li>
                        </>
                    }
                </ul>
            </div>
        </div>
    </nav>
</header>
    );

}

export default Header;