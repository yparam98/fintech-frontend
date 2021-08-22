import React from 'react'

function Navbar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/#">Pocket Patrol</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle active" href="/#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Current Financial Situation
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item" href="/#">Dinner’s Choice</a></li>
                                    <li><a class="dropdown-item" href="/#">Monthly Expenditure Action</a></li>
                                    
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/#">Adopt Behaviors and Changes</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="/#">Your Personal Guide </a>
                            </li>
                            <span style={{ flex: 1 }} />
                            <button  type="button" class="btn btn-danger float-right">Sign Up</button>
                              </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar