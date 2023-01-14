import React from 'react';
import Head from 'next/head';
import Gallery from '../components/Gallery';

export default function galeri() {
    return (
        <>
            <Head>
                <title>Banyuwangiku - Galeri</title>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h1 style={{ fontWeight: 700 }}>Galeri</h1>
                        <p>Beranda &gt; Galeri</p>
                    </div>
                </div>
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
                <Gallery/>
                <div className="row">
                    <div className="col-md-12">
                        <nav aria-label="Page navigation example" className="mt-5">
                            <ul className="pagination justify-content-center">
                                <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                                <li className="page-item"><a className="page-link active" href="#">1</a></li>
                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                <li className="page-item"><a className="page-link" href="#">Next</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>

        </>
    )
}
