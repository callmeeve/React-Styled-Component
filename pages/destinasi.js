import Head from 'next/head'
import React from 'react'
import Card from '../components/Card'

export default function destinasi() {
    return (
        <>
            <Head>
                <title>Banyuwangiku - Destinasi</title>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3" />
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="https://images.unsplash.com/photo-1636009896827-5cd109f96f5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80" className="d-block w-100" />
                        </div>
                        <div className="carousel-item">
                            <img src="https://images.unsplash.com/photo-1503197979108-c824168d51a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80" className="d-block w-100" />
                        </div>
                        <div className="carousel-item">
                            <img src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80" className="d-block w-100" />
                        </div>
                    </div>
                </div>

                <div className="container mt-5">
                    <div className="row mt-4">
                        <div className="col-md-12 text-center">
                            <ul className="nav nav-pills justify-content-center">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Pantai</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Pegunungan</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Hutan</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Pemandian</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <Card/>
                </div>
            </div>

        </>
    )
}
