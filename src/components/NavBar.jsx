import React from 'react'
import {Routes, Route, Link} from 'react-router-dom';


//views
import Dashboard from '../views/Dashboard';

function NavBar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light shadow">
                <a class="navbar-brand" href="#">Quick Test</a>
        
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <Link class="nav-link" to="/">Home</Link>
            
                            {/* <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a> */}
                        </li>
                        <li class="nav-item">
                            <Link  class="nav-link" to="/analytics">Analytics</Link>
                            {/* <a class="nav-link" href="/dashboard">Analytics</a> */}
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Pricing</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                        </li>
                    </ul>
                </div>
            </nav>

            <Routes>
                <Route path="/"></Route>
                <Route path="/analytics" element={<Dashboard/>}>Analytics</Route>
            </Routes>
        </div>
    )
}

export default NavBar