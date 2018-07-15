import React from 'react';

const Home = () => (
    <div class = "container fluid">
        <div class="row">
            {/* First card on the Row */}
            <div class="container col-6">
                <div class="card">
                    <h3 class="card-header">Workshops</h3>
                    <div class="card-body">
                        <h4 class="card-title">Are you looking to learn new skills?</h4>
                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#!" class="btn btn-primary">Find a Workshop today</a>
                    </div>
                </div>

            </div>

            {/* Second card on the row */}
            <div class="col-6">
                <div class="card">
                    <h3 class="card-header">Projects</h3>
                    <div class="card-body">
                        <h4 class="card-title">Need a team to work on a project with</h4>
                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#!" class="btn btn-primary">Project Listings</a>
                    </div>
                </div>
            </div>
        </div> 
    </div>
)
export default Home