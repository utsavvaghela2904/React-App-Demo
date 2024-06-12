import React from 'react';
import PropTypes from 'prop-types';

export default function Navbar(props) {
    return (
        <div>
            <nav className={`navbar navbar-expand-lg bg-${props.mode} bg-${props.mode1} navbar-${props.mode}`} >
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">{props.title}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu">
                                    <li><div class={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                                        <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode} />{props.btnText}
                                    </div></li>
                                    <li><div class={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                                        <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode1} />{props.btnText}
                                    </div></li>
                                    <li><div class={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                                        <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode2} />{props.btnText}
                                    </div></li>
                                    <li>
                                        <div class={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                                            <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode3} />{props.btnText}
                                        </div>
                                    </li>
                                    <li>
                                        <div class={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                                            <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode4} />{props.btnText}
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" aria-disabled="true">{props.aboutText}</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
