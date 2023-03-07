import React from 'react'
// import {Link} from 'react-router-dom'

const Footer = () => {
    return (
    <>

        {/* <!-- Footer--> */}
        <footer className="bg-dark py-4 mt-auto">
            <div className="container px-5">
                <div className="row align-items-center justify-content-between flex-column flex-sm-row">
                    <div className="col-auto"><div className="small m-0 text-white">Copyright &copy; Pointy Boys 2022</div></div>
                    <div className="col-auto">
                        <a className="link-light small" href="https://github.com/trimvu">Tri V.</a>

                            <span className="text-white mx-1">&middot;</span>

                        <a className="link-light small" href="https://github.com/NewDev11">Dane J.</a>

                            <span className="text-white mx-1">&middot;</span>

                        <a className="link-light small" href="https://github.com/Rob35566">Robert M.</a>

                            <span className="text-white mx-1">&middot;</span>

                        <a className="link-light small" href="https://github.com/fdgalvan">Felipe G.</a>

                    </div>
                </div>
            </div>
        </footer>

    </>
    )
}

export default Footer