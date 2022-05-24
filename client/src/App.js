import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';



const App = () => {
  return (
    <>

{/* NAVBAR */}
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container">
                <a class="navbar-brand" href="#">Spammy Spammy Spamaroo</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item"><a class="nav-link active" aria-current="page" href="http://www.google.com">Home</a></li>
                        <li class="nav-item"><a class="nav-link" href="#">Login</a></li>
                        <li class="nav-item"><a class="nav-link" href="#">Register</a></li>
                        <li class="nav-item"><a class="nav-link" href="#"></a></li>
                        
                    </ul>
                </div>
            </div>
        </nav>

{/* HEADER SIMPLE */}
        {/* 
        <div class="container">
            <div class="text-center mt-5">
                <h1>Report and find scams</h1>
                <p class="lead">Got dang scammers and their extended car warranty</p>
                <p></p>
            </div>
        </div>
        */}

{/* HEADER INFO BANNER */}
        <header class="py-5 bg-light border-bottom mb-4">
            <div class="container">
                <div class="text-center my-5">
                    <h1 class="fw-bolder">Welcome to Spammy Spammy Spamaroo!</h1>
                    <p class="lead mb-0">A place to view and report scam callers</p>
                </div>
            </div>
        </header>

{/* MAIN BODY AND CONTENT */}
{/* <!-- Page content--> */}
        <div class="container">
            <div class="row">
                {/* <!-- Spam entries--> */}
                <div class="col-lg-8">

                    {/* <!-- Nested row for spam posts--> */}
                    <div class="row">
                        <div class="col-lg-6">
                            {/* <!-- Spam post--> */}
                            <div class="card mb-4">
                                {/* <a href="#!"><img class="card-img-top" src="https://dummyimage.com/700x350/dee2e6/6c757d.jpg" alt="..." /></a> */}
                                <div class="card-body">
                                    <div class="small text-muted">March 6, 2022</div>
                                    <h2 class="card-title h4">719-359-9278</h2>
                                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla.</p>
                                    <a class="btn btn-primary" href="#!">Add to this report →</a>
                                </div>
                            </div>
                            {/* <!-- Spam post--> */}
                            <div class="card mb-4">
                                {/* <a href="#!"><img class="card-img-top" src="https://dummyimage.com/700x350/dee2e6/6c757d.jpg" alt="..." /></a> */}
                                <div class="card-body">
                                    <div class="small text-muted">January 12, 2022</div>
                                    <h2 class="card-title h4">719-626-6290</h2>
                                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla.</p>
                                    <a class="btn btn-primary" href="#!">Add to this report →</a>
                                </div>
                            </div>
                            {/* <!-- Spam post--> */}
                            <div class="card mb-4">
                                {/* <a href="#!"><img class="card-img-top" src="https://dummyimage.com/700x350/dee2e6/6c757d.jpg" alt="..." /></a> */}
                                <div class="card-body">
                                    <div class="small text-muted">January 12, 2022</div>
                                    <h2 class="card-title h4">719-626-6290</h2>
                                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla.</p>
                                    <a class="btn btn-primary" href="#!">Add to this report →</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            {/* <!-- Spam post--> */}
                            <div class="card mb-4">
                                {/* <a href="#!"><img class="card-img-top" src="https://dummyimage.com/700x350/dee2e6/6c757d.jpg" alt="..." /></a> */}
                                <div class="card-body">
                                    <div class="small text-muted">December 16, 2021</div>
                                    <h2 class="card-title h4">719-248-9256</h2>
                                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla.</p>
                                    <a class="btn btn-primary" href="#!">Add to this report →</a>
                                </div>
                            </div>
                            {/* <!-- Spam post--> */}
                            <div class="card mb-4">
                                {/* <a href="#!"><img class="card-img-top" src="https://dummyimage.com/700x350/dee2e6/6c757d.jpg" alt="..." /></a> */}
                                <div class="card-body">
                                    <div class="small text-muted">May 5, 2022</div>
                                    <h2 class="card-title h4">719-553-8112</h2>
                                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla.</p>
                                    <a class="btn btn-primary" href="#!">Add to this report →</a>
                                </div>
                            </div>
                            {/* <!-- Spam post--> */}
                            <div class="card mb-4">
                                {/* <a href="#!"><img class="card-img-top" src="https://dummyimage.com/700x350/dee2e6/6c757d.jpg" alt="..." /></a> */}
                                <div class="card-body">
                                    <div class="small text-muted">May 5, 2022</div>
                                    <h2 class="card-title h4">719-553-8112</h2>
                                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla.</p>
                                    <a class="btn btn-primary" href="#!">Add to this report →</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- PAGINATION?--> */}
                    {/* <nav aria-label="Pagination">
                        <hr class="my-0" />
                        <ul class="pagination justify-content-center my-4">
                            <li class="page-item disabled"><a class="page-link" href="#" tabindex="-1" aria-disabled="true">Newer</a></li>
                            <li class="page-item active" aria-current="page"><a class="page-link" href="#!">1</a></li>
                            <li class="page-item"><a class="page-link" href="#!">2</a></li>
                            <li class="page-item"><a class="page-link" href="#!">3</a></li>
                            <li class="page-item disabled"><a class="page-link" href="#!">...</a></li>
                            <li class="page-item"><a class="page-link" href="#!">-3</a></li>
                            <li class="page-item"><a class="page-link" href="#!">Older</a></li>
                        </ul>
                    </nav> */}
                </div>

                {/* <!-- Side widgets--> */}
                <div class="col-lg-4">


                    {/* <!-- SEARCH WIDGET--> */}
                    <div class="card mb-4">
                        <div class="card-header">Search</div>
                        <div class="card-body">
                            <div class="input-group">
                                <input class="form-control" type="text" placeholder="Enter a number..." aria-label="Enter search term..." aria-describedby="button-search" />
                                <button class="btn btn-primary" id="button-search" type="button">Search</button>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Categories widget--> */}
                    <div class="card mb-4">
                        <div class="card-header">Categories</div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-sm-6">
                                    <ul class="list-unstyled mb-0">
                                        <li><a href="#!">Option 1</a></li>
                                        <li><a href="#!">Option 2</a></li>
                                        <li><a href="#!">Option 3</a></li>
                                    </ul>
                                </div>
                                <div class="col-sm-6">
                                    <ul class="list-unstyled mb-0">
                                        <li><a href="#!">Option 4</a></li>
                                        <li><a href="#!">Option 5</a></li>
                                        <li><a href="#!">Option 6</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Side widget--> */}
                    <div class="card mb-4">
                        <div class="card-header">Side Widget</div>
                        <div class="card-body">You can put anything you want inside of these side widgets. They are easy to use, and feature the Bootstrap 5 card component!</div>
                    </div>
                </div>
            </div>
        </div>



        {/* <!-- Bootstrap core JS--> */}
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
        {/* <!-- Core theme JS--> */}
        <script src="js/scripts.js"></script>

    </>
  );
}

export default App