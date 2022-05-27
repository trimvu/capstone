import React from 'react'

const About = () => {
    return (
    // <div>About</div>

    <>
    
{/* <!-- TOP INFO BANNER--> */}
            <header className="py-5">
                <div className="container px-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-xxl-6">
                            <div className="text-center my-5">
                                <h1 className="fw-bolder mb-3">Nobody deserves to be scammed out of their hard-earned money.</h1>
                                <p className="lead fw-normal text-muted mb-4">Everyone has to deal with unwanted calls from scammers. Eff those guys...</p>
                                {/* <a class="btn btn-primary btn-lg" href="#scroll-target">Read our story</a> */}
                            </div>
                        </div>
                    </div>
                </div>
            </header>

{/* <!-- ABOUT ONE--> */}
            <section className="py-5 bg-light" id="scroll-target">
                <div className="container px-5 my-5">
                    <div className="row gx-5 align-items-center">
                        <div className="col-lg-6"><img className="img-fluid rounded mb-5 mb-lg-0" src="/Scam_6x4.jpg" alt="..." /></div>
                        <div className="col-lg-6">
                            <h2 className="fw-bolder">Our founding</h2>
                            <p className="lead fw-normal text-muted mb-0">Scammers suck. According to CNBC, in 2020 it was estimated that $29.8 billion were lost to phone scams in the United States alone. About 59.4 million people were affected. Even if you haven't been scammed, it's helpful to millions if we are able to keep track of and document numbers that tried to scam you.</p>
                        </div>
                    </div>
                </div>
            </section>

{/* <!-- TEAM MEMBERS--> */}
            <section className="py-5 bg-light">
                <div className="container px-5 my-5">
                    <div className="text-center">
                        <h2 className="fw-bolder">Our team, The Pointy Boys</h2>
                        <p className="lead fw-normal text-muted mb-5">brought to you by:</p>
                    </div>
                    <div className="row gx-5 row-cols-1 row-cols-sm-2 row-cols-xl-4 justify-content-center">

                      {/* MEMBER ONE */}
                        <div className="col mb-5 mb-5 mb-xl-0">
                            <div className="text-center">
                            <a className="link" href='http://www.github.com/trimvu'><img className="img-fluid rounded-circle mb-4 px-4" src="/Tri_150.jpeg" alt="..." /></a>
                                <h5 className="fw-bolder">Tri Vu</h5>
                                <div className="fst-italic text-muted">Project Manager</div>
                            </div>
                        </div>

                      {/* MEMBER TWO */}
                        <div className="col mb-5 mb-5 mb-xl-0">
                            <div className="text-center">
                            <a className="link" href='http://www.github.com/NewDev11'><img className="img-fluid rounded-circle mb-4 px-4" src="/Dane_150.jpg" alt="..." /></a>
                                <h5 className="fw-bolder">Dane Janssen</h5>
                                <div className="fst-italic text-muted">Florida Man</div>
                            </div>
                        </div>

                      {/* MEMBER THREE */}
                        <div className="col mb-5 mb-5 mb-sm-0">
                            <div className="text-center">
                            <a className="link" href='http://www.github.com/Rob35566'><img className="img-fluid rounded-circle mb-4 px-4" src="/Rob_150.jpeg" alt="..." /></a>
                                <h5 className="fw-bolder">Roberto Montemayor</h5>
                                <div className="fst-italic text-muted">Language Aficionado</div>
                            </div>
                        </div>

                      {/* MEMBER FOUR */}
                        <div className="col mb-5">
                            <div className="text-center">
                            <a className="link" href='http://www.github.com/fdgalvan'><img className="img-fluid rounded-circle mb-4 px-4" src="/Felipe_150.jpeg" alt="..." /></a>
                                <h5 className="fw-bolder">Felipe Galvan</h5>
                                <div className="fst-italic text-muted">Anxious Mess</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    
    </>
  )
}

export default About