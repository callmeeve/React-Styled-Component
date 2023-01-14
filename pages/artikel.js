import React from 'react'
import Head from 'next/head'
import styled from 'styled-components';


const Title = styled.h1`
  font-size: 3em;
  text-align: center;
  color: dark;
  font-weight: 700;
`;

const Title2 = styled.h3`
  font-size: 2em;
  text-align: start;
  color: dark;
  font-weight: 700;
`;

const Text = styled.p`
  font-size: 1em;
  text-align: center;
  color: dark;
  font-weight: normal;
`;

const Text2 = styled.p`
  font-size: 1em;
  text-align: start;
  color: dark;
  font-weight: normal;
  margin-bottom: 0;
`;

export default function artikel() {
    return (
        <>
            <Head>
                <title>Banyuwangiku - Artikel</title>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="container mt-5">
                <div className="row g-5">
                    <div className="col-md-12 text-center">
                        <Title style={{ fontWeight: 700 }}>Artikel</Title>
                        <Text>Beranda &gt; Artikel</Text>
                    </div>
                    <div className="col-md-7">
                        <article className="blog-post">
                            <div className="row mt-3">
                                <div className="col-md-5">
                                    <a href="#">
                                        <img className="img-fluid rounded mb-3 mb-md-0" src="/article.png" height="500px" alt />
                                    </a>
                                </div>
                                <div className="col md-3">
                                    <Text2>10 November 2022</Text2>
                                    <Title2>Keberagaman Budaya</Title2>
                                    <Text2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Integer sit amet magna a nunc malesuada viverra eu
                                        vel eros. Pellentesque mollis urna at maximus laoreet.
                                        Etiam quis eros ultricies, malesuada ex ut.</Text2>
                                    <a className="btn btn-link btn-sm p-0" style={{ color: '#909090' }} href="#">Read More</a>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-md-5">
                                    <a href="#">
                                        <img className="img-fluid rounded mb-3 mb-md-0" src="/article.png" height="500px" alt />
                                    </a>
                                </div>
                                <div className="col md-3">
                                    <Text2>10 November 2022</Text2>
                                    <Title2>Keberagaman Budaya</Title2>
                                    <Text2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Integer sit amet magna a nunc malesuada viverra eu
                                        vel eros. Pellentesque mollis urna at maximus laoreet.
                                        Etiam quis eros ultricies, malesuada ex ut.</Text2>
                                    <a className="btn btn-link btn-sm p-0" style={{ color: '#909090' }} href="#">Read More</a>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-md-5">
                                    <a href="#">
                                        <img className="img-fluid rounded mb-3 mb-md-0" src="/article.png" height="500px" alt />
                                    </a>
                                </div>
                                <div className="col md-3">
                                    <Text2>10 November 2022</Text2>
                                    <Title2>Keberagaman Budaya</Title2>
                                    <Text2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Integer sit amet magna a nunc malesuada viverra eu
                                        vel eros. Pellentesque mollis urna at maximus laoreet.
                                        Etiam quis eros ultricies, malesuada ex ut.</Text2>
                                    <a className="btn btn-link btn-sm p-0" style={{ color: '#909090' }} href="#">Read More</a>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-md-5">
                                    <a href="#">
                                        <img className="img-fluid rounded mb-3 mb-md-0" src="/article.png" height="500px" alt />
                                    </a>
                                </div>
                                <div className="col md-3">
                                    <Text2>10 November 2022</Text2>
                                    <Title2>Keberagaman Budaya</Title2>
                                    <Text2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Integer sit amet magna a nunc malesuada viverra eu
                                        vel eros. Pellentesque mollis urna at maximus laoreet.
                                        Etiam quis eros ultricies, malesuada ex ut.</Text2>
                                    <a className="btn btn-link btn-sm p-0" style={{ color: '#909090' }} href="#">Read More</a>
                                </div>
                            </div>
                            <nav aria-label="Page navigation example" className="mt-5">
                                <ul className="pagination justify-content-start">
                                    <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                                    <li className="page-item"><a className="page-link active" href="#">1</a></li>
                                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                                    <li className="page-item"><a className="page-link" href="#">Next</a></li>
                                </ul>
                            </nav>
                        </article>
                    </div>
                    <div className="col-md-5">
                        <div className="position-sticky" style={{ top: '8rem' }}>
                            <div className="p-4 mb-3 bg-light rounded">
                                <h4 className="text-start fw-bold mt-2">Buletin</h4>
                                <p className="mb-0">
                                    Subscribe Buletin kami untuk mendapatkan
                                    pemberitahuan pembaruan baru
                                </p>
                                <div className="form-floating mt-3">
                                    <input type="email" className="form-control form-control-sm" id="floatingInput" placeholder="name@example.com" />
                                    <label htmlFor="floatingInput">Email address</label>
                                </div>
                                <div className="d-grid mt-3 mb-3">
                                    <button className="btn btn-dark" type="submit">Subscribe</button>
                                </div>
                            </div>
                            <div className="p-0">
                                <h4 className="fw-bold text-dark">Berita Terbaru</h4>
                                <div className="row mt-3">
                                    <div className="col-md-4">
                                        <a href="#">
                                            <img className="img-fluid rounded mb-3 mb-md-0" src="/article.png" height="350px" alt />
                                        </a>
                                    </div>
                                    <div className="col md-1">
                                        <p className="blog-post-meta mb-1" style={{ fontSize: '0.8rem' }}>10 November 2022</p>
                                        <h2 className="blog-post-title mb-1 fw-bold" style={{ fontSize: '0.8rem' }}>Keberagaman Budaya
                                        </h2>
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-md-4">
                                        <a href="#">
                                            <img className="img-fluid rounded mb-3 mb-md-0" src="/article.png" height="350px" alt />
                                        </a>
                                    </div>
                                    <div className="col md-1">
                                        <p className="blog-post-meta mb-1" style={{ fontSize: '0.8rem' }}>10 November 2022</p>
                                        <h2 className="blog-post-title mb-1 fw-bold" style={{ fontSize: '0.8rem' }}>Keberagaman Budaya
                                        </h2>
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-md-4">
                                        <a href="#">
                                            <img className="img-fluid rounded mb-3 mb-md-0" src="/article.png" height="350px" alt />
                                        </a>
                                    </div>
                                    <div className="col md-1">
                                        <p className="blog-post-meta mb-1" style={{ fontSize: '0.8rem' }}>10 November 2022</p>
                                        <h2 className="blog-post-title mb-1 fw-bold" style={{ fontSize: '0.8rem' }}>Keberagaman Budaya
                                        </h2>
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-md-4">
                                        <a href="#">
                                            <img className="img-fluid rounded mb-3 mb-md-0" src="/article.png" height="350px" alt />
                                        </a>
                                    </div>
                                    <div className="col md-1">
                                        <p className="blog-post-meta mb-1" style={{ fontSize: '0.8rem' }}>10 November 2022</p>
                                        <h2 className="blog-post-title mb-1 fw-bold" style={{ fontSize: '0.8rem' }}>Keberagaman Budaya
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
