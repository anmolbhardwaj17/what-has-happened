import React from 'react'
import "./section.css"

function Section({heading, value, info, img}) {
    return (
        <div class="hero">
            <div className="grid1">
                <div className="primary-hero">
                    <div className="child">
                        <img src={img}/>
                    </div>
                </div>
            </div>
            <div className="grid2">
                <div className="primary-hero-2">
                    <div className="child">
                        <h2 className="hero-intro">{heading}</h2>
                        <h1 className="hero-name">{value}</h1>
                        <p className="hero-about">{info}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section
