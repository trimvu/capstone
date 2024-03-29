import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { useState, useEffect } from 'react'
// import { key } from './key'
import { useNavigate } from 'react-router-dom'


const App = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [submittedPhoneNumber, setSubmittedPhoneNumber] = useState("");


  const navigate = useNavigate()


  useEffect(() => {
    
    const fetchScamData = () => {
      // console.log(phoneNumber, submittedPhoneNumber)
      fetch(`https://phonevalidation.abstractapi.com/v1/?api_key=${process.env.REACT_APP_AUTH_KEY}&phone=1${submittedPhoneNumber}`)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data)
        // setScamData(data.setup + "..." + data.scamline);
      })
    }
    fetchScamData();
  
  }, [submittedPhoneNumber.number])

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedPhoneNumber(phoneNumber)

    navigate(`/NumberResult/${phoneNumber}`)

  }

  return (
    <>

{/* NAVBAR */}
        {/* <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
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
        </nav> */}

{/* HEADER INFO BANNER*/}
        <header className="py-5 bg-light border-bottom mb-4">
            <div className="container">
                <div className="text-center my-5">
                    <h1 className="fw-bolder">Welcome to Spam Call Registry</h1>
                    <p className="lead mb-0">A place to view and report scam callers</p>
                </div>
            </div>
        </header>  
        
        

{/* MAIN BODY AND CONTENT */}
        <div className="container">
            <div className="row">
                {/* <!-- Spam entries--> */}
                <div className="col-lg-8">

                    {/* <!-- Nested row for spam posts--> */}
                    <div className="row">
                        <div className="col-lg-6">
                            {/* <!-- Spam post--> */}
                            <div className="card mb-4">
                                {/* <a href="#!"><img class="card-img-top" src="https://dummyimage.com/700x350/dee2e6/6c757d.jpg" alt="..." /></a> */}
                                <div className="card-body">
                                    <div className="small text-muted">March 6, 2022</div>
                                    <h2 className="card-title h4">719-359-9278</h2>
                                    <p className="card-text">This number keeps calling about my warranty on my Jeep. I have never owned a jeep and I hate them. Not as much as I hate this company though.</p>
                                    <a className="btn btn-primary" href="#!">Add to this report →</a>
                                </div>
                            </div>
                            {/* <!-- Spam post--> */}
                            <div className="card mb-4">
                                {/* <a href="#!"><img class="card-img-top" src="https://dummyimage.com/700x350/dee2e6/6c757d.jpg" alt="..." /></a> */}
                                <div className="card-body">
                                    <div className="small text-muted">January 12, 2022</div>
                                    <h2 className="card-title h4">719-626-6290</h2>
                                    <p className="card-text">Cant believe this company scammed my brother out of 1500, what a ripp off, glad i get to report them and hope he gets his money back.</p>
                                    <a className="btn btn-primary" href="#!">Add to this report →</a>
                                </div>
                            </div>
                            {/* <!-- Spam post--> */}
                            <div className="card mb-4">
                                {/* <a href="#!"><img class="card-img-top" src="https://dummyimage.com/700x350/dee2e6/6c757d.jpg" alt="..." /></a> */}
                                <div className="card-body">
                                    <div className="small text-muted">January 12, 2022</div>
                                    <h2 className="card-title h4">719-626-6290</h2>
                                    <p className="card-text">this company is so annoying. they call me all the time and try to sell me life insurance. i ended up gettting a plan and it was a total ripoff. backstabbing swindlers!.</p>
                                    <a className="btn btn-primary" href="#!">Add to this report →</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            {/* <!-- Spam post--> */}
                            <div className="card mb-4">
                                {/* <a href="#!"><img class="card-img-top" src="https://dummyimage.com/700x350/dee2e6/6c757d.jpg" alt="..." /></a> */}
                                <div className="card-body">
                                    <div className="small text-muted">December 16, 2021</div>
                                    <h2 className="card-title h4">719-248-9256</h2>
                                    <p className="card-text">this is number is actually a legit company</p>
                                    <a className="btn btn-primary" href="#!">Add to this report →</a>
                                </div>
                            </div>
                            {/* <!-- Spam post--> */}
                            <div className="card mb-4">
                                {/* <a href="#!"><img class="card-img-top" src="https://dummyimage.com/700x350/dee2e6/6c757d.jpg" alt="..." /></a> */}
                                <div className="card-body">
                                    <div className="small text-muted">May 5, 2022</div>
                                    <h2 className="card-title h4">719-553-8112</h2>
                                    <p className="card-text">I've tried blocking this number but they keep calling from different numbers. they suck and I hate them</p>
                                    <a className="btn btn-primary" href="#!">Add to this report →</a>
                                </div>
                            </div>
                            {/* <!-- Spam post--> */}
                            <div className="card mb-4">
                                {/* <a href="#!"><img class="card-img-top" src="https://dummyimage.com/700x350/dee2e6/6c757d.jpg" alt="..." /></a> */}
                                <div className="card-body">
                                    <div className="small text-muted">May 5, 2022</div>
                                    <h2 className="card-title h4">719-553-8112</h2>
                                    <p className="card-text">This company is a total freaking scam. screw these chicken hawks I would burn this company to the ground if I knew their actual address. They took like 52k from my aunts cousins sister and shes all bankrupt af now. I hate them the most and I wish they walk infront of a bus or something idk. Don’t give this company money , they are predatory. Not like chris Hansen predatory but like… that movie predator. With bill drake. He plays the crazy black guy that loses his mind after he sees his buddy (played by jesse ventura) get wasted by a shoulder mounted plasma cannon. Damn that was a kick ass movie. Anyway screw this company.</p>
                                    <a className="btn btn-primary" href="#!">Add to this report →</a>
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
                <div className="col-lg-4">


                    {/* <!-- SEARCH WIDGET--> */}
                    <div className="card mb-4">

                    </div>
                        <div>
                            Search for a Number <br />
                            (Do not add dash. <br />
                            Ex. 5668675309. <br />
                            NOT 566-867-5309)
                            <form onSubmit={handleSubmit}>
                                <input type="text" value={phoneNumber} onChange={(e)=> setPhoneNumber(e.target.value)} pattern="[0-9]{10}" />
                                <input type="submit" />
                            </form>
                        </div>


                    {/* <!-- Categories widget--> */}

                </div>
            </div>
        </div>

{/* FOOTER */}
        {/* <footer class="bg-dark py-4 mt-auto">
            <div class="container px-5">
                <div class="row align-items-center justify-content-between flex-column flex-sm-row">
                    <div class="col-auto"><div class="small m-0 text-white">Copyright &copy; Pointy Boys 2022</div></div>
                    <div class="col-auto">
                        <a class="link-light small" href="#!">Tri V.</a>
                        https://github.com/trimvu
                        <span class="text-white mx-1">&middot;</span>

                        <a class="link-light small" href="#!">Dane J.</a>
                        https://github.com/NewDev11
                        <span class="text-white mx-1">&middot;</span>

                        <a class="link-light small" href="#!">Robert M.</a>
                        https://github.com/Rob35566
                        <span class="text-white mx-1">&middot;</span>

                        <a class="link-light small" href="#!">Felipe G.</a>
                        https://github.com/fdgalvan

                    </div>
                </div>
            </div>
        </footer> */}
        

        

        {/* <!-- Bootstrap core JS--> */}
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
        {/* <!-- Core theme JS--> */}
        <script src="js/scripts.js"></script>
        <link rel="icon" type="image/x-icon" href="assets/favicon.ico" />
        {/* <!-- Font Awesome icons (free version)--> */}
        <script src="https://use.fontawesome.com/releases/v6.1.0/js/all.js" crossOrigin="anonymous"></script>




{/* THIS IS ORIGINALLY HERE BEFORE STYLING */}
    {/* <div>
        Scam Finder
        <form onSubmit={handleSubmit}>
            <input type="text" value={phoneNumber} onChange={(e)=> setPhoneNumber(e.target.value)}  />
            <input type="submit" />
    </form>
    </div> */}
    {/* {scamData} */}
    {/* {phoneNumber} */}

    
    </>

    )

}


export default App