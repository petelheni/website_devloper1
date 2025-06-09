import React from 'react'
import Logo from '../navbar/Logo'
import Nav from '../navbar/Nav'
import Search from '../navbar/Search'

const Footer = () => {
    return (
        <>
            <footer>
                <div className="container">
                    <div style={{ padding: "20px 0", display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "30px" }}>
                        <div>
                            <Logo />
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime hic quam asperiores eveniet incidunt eum recusandae, sapiente in tempora illum libero voluptatum! Maiores facere debitis obcaecati expedita iusto ullam eaque.
                            </p>
                        </div>
                        <ul>
                            <Nav />
                        </ul>
                        <div>
                            <Search />
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer