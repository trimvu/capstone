import React from 'react'
import {Link} from 'react-router-dom'

const Footer = () => {
    return (
    <>

        {/* <!-- Footer--> */}
        <footer class="bg-dark py-4 mt-auto">
            <div class="container px-5">
                <div class="row align-items-center justify-content-between flex-column flex-sm-row">
                    <div class="col-auto"><div class="small m-0 text-white">Copyright &copy; Pointy Boys 2022</div></div>
                    <div class="col-auto">
                        <a class="link-light small" href="https://github.com/trimvu">Tri V.</a>

                            <span class="text-white mx-1">&middot;</span>

                        <a class="link-light small" href="https://github.com/NewDev11">Dane J.</a>

                            <span class="text-white mx-1">&middot;</span>

                        <a class="link-light small" href="https://github.com/Rob35566">Robert M.</a>

                            <span class="text-white mx-1">&middot;</span>

                        <a class="link-light small" href="https://github.com/fdgalvan">Felipe G.</a>

                    </div>
                </div>
            </div>
        </footer>

    </>
    )
}

export default Footer