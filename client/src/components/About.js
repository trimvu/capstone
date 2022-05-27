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
                        <div className="col-lg-6"><img className="img-fluid rounded mb-5 mb-lg-0" src="https://dummyimage.com/600x400/343a40/6c757d" alt="..." /></div>
                        <div className="col-lg-6">
                            <h2 className="fw-bolder">Our founding</h2>
                            <p className="lead fw-normal text-muted mb-0">Scammers suck. They really really suck. Iusto est, ut esse a labore aliquam beatae expedita. Blanditiis impedit numquam libero molestiae et fugit cupiditate, quibusdam expedita, maiores eaque quisquam.</p>
                        </div>
                    </div>
                </div>
            </section>

{/* <!-- TEAM MEMBERS--> */}
            <section className="py-5 bg-light">
                <div className="container px-5 my-5">
                    <div className="text-center">
                        <h2 className="fw-bolder">Our team</h2>
                        <p className="lead fw-normal text-muted mb-5">The Pointy Boys, brought to you by:</p>
                    </div>
                    <div className="row gx-5 row-cols-1 row-cols-sm-2 row-cols-xl-4 justify-content-center">

                      {/* MEMBER ONE */}
                        <div className="col mb-5 mb-5 mb-xl-0">
                            <div className="text-center">
                            <a className="link" href='http://www.github.com'><img className="img-fluid rounded-circle mb-4 px-4" src="https://dummyimage.com/150x150/ced4da/6c757d" alt="..." /></a>
                                <h5 className="fw-bolder">Tri Vu</h5>
                                <div className="fst-italic text-muted">Project Manager</div>
                            </div>
                        </div>

                      {/* MEMBER TWO */}
                        <div className="col mb-5 mb-5 mb-xl-0">
                            <div className="text-center">
                            <a className="link" href='http://www.github.com'><img className="img-fluid rounded-circle mb-4 px-4" src="https://dummyimage.com/150x150/ced4da/6c757d" alt="..." /></a>
                                <h5 className="fw-bolder">Dane Janssen</h5>
                                <div className="fst-italic text-muted">Back End Developer</div>
                            </div>
                        </div>

                      {/* MEMBER THREE */}
                        <div className="col mb-5 mb-5 mb-sm-0">
                            <div className="text-center">
                            <a className="link" href='http://www.github.com'><img className="img-fluid rounded-circle mb-4 px-4" src="https://dummyimage.com/150x150/ced4da/6c757d" alt="..." /></a>
                                <h5 className="fw-bolder">Roberto Montemayor</h5>
                                <div className="fst-italic text-muted">Language Aficionado</div>
                            </div>
                        </div>

                      {/* MEMBER FOUR */}
                        <div className="col mb-5">
                            <div className="text-center">
                            <a className="link" href='http://www.github.com'><img className="img-fluid rounded-circle mb-4 px-4" src="https://dummyimage.com/150x150/ced4da/6c757d" alt="..." /></a>
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