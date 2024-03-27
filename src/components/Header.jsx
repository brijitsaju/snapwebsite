import React, { useState } from 'react'
import logo from '../images/logo.svg'
import down from '../images/icon-arrow-down.svg'
import todo from '../images/icon-todo.svg'
import cal from '../images/icon-calendar.svg'
import remin from '../images/icon-reminders.svg'
import plan from '../images/icon-planning.svg'



function Header() {

    return (
        <>
        <nav class="navbar navbar-expand-lg bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#"><img src={logo} alt="" /></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarOffcanvas" aria-controls="navbarOffcanvas" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="offcanvas offcanvas-end w-75" tabindex="-1" id="navbarOffcanvas" aria-labelledby="navbarOffcanvasLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="navbarOffcanvasLabel">Offcanvas</h5>
                            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                            <ul class="navbar-nav me-auto">
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownFeatures" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Features
                                    </a>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdownFeatures">
                                        <li><a class="dropdown-item" href="#"><img src={todo} /> TodoList</a></li>
                                        <li><a class="dropdown-item" href="#"><img src={cal} /> Calendar</a></li>
                                        <li><a class="dropdown-item" href="#"><img src={remin} /> Reminders</a></li>
                                        <li><a class="dropdown-item" href="#"><img src={plan} /> Planning</a></li>
                                    </ul>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownCompany" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Company
                                    </a>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdownCompany">
                                        <li><a class="dropdown-item" href="#">History</a></li>
                                        <li><a class="dropdown-item" href="#">Our Team</a></li>
                                        <li><a class="dropdown-item" href="#">Blog</a></li>
                                    </ul>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Careers</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">About</a>
                                </li>
                            </ul>
                            <form class="d-flex">
                                <button class="btn my-2 my-sm-0" type="submit">Login</button>
                                <button class="btn my-2 my-sm-0" style={{ borderColor: "black" }} type="submit">Register</button>
                            </form>
                        </div>
                    </div>
                </div>
            </nav>
            </>
    );
}

export default Header
