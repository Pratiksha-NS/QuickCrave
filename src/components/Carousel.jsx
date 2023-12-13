import React, { useState } from 'react'

export default function Carousel() {
    return (
        <div>
            <div id="carouselExampleFade m-10" className="carousel slide carousel-fade" style={{ objectFit: "contain !important" }} >
                <div className="carousel-inner" id='carousel'>
                    <div className="carousel-inner " id="carousel">
                        <div className="carousel-item active">
                            <img src=" https://source.unsplash.com/random/1920x660/?pancake" className="d-block w-100 " alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src=" https://source.unsplash.com/random/1920x660/?noodles" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src=" https://source.unsplash.com/random/1920x660/?spagetti" className="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    )
}


