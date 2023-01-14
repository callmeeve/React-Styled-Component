import Head from 'next/head'
import React, { useEffect } from 'react'
import styled from 'styled-components'

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
`;


export default function Home() {
  useEffect (()=>{
    let items = document.querySelectorAll('.carousel .carousel-item')
    items.forEach((el) => {
      const minPerSlide = 4
      let next = el.nextElementSibling
      for (var i = 1; i < minPerSlide; i++) {
        if (!next) {
          // wrap carousel by using first child
          next = items[0]
        }
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
      }
    })
  })
  return (
    <>
      <Head>
        <title>Banyuwangiku - Beranda</title>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header class="masthead position-relative mb-5" />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="row bg-white" id="box">
              <div className="col-sm-12 col-md-6 mb-0 mb-lg-0">
                <ul className="nav nav-tabs border-bottom-0">
                  <li className="nav-item">
                    <a href="#" className="nav-link active">Pantai</a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">Pegunungan</a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">Hutan</a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">Pemandian</a>
                  </li>
                </ul>
              </div>
            </div>
            <form className="form">
              <div className="row mb-2 mt-2 justify-content-center">
                <div className="col mb-3 mb-lg-0">
                  <select name id className="form-select custom-select form-select-sm">
                    <option selected>Pulau Merah, Kecamatan Sanggar, Kabupaten Banyuwangi</option>
                    <option value>Destination</option>
                    <option value>Peru</option>
                    <option value>Japan</option>
                    <option value>Thailand</option>
                    <option value>Brazil</option>
                    <option value>United States</option>
                    <option value>Israel</option>
                    <option value>China</option>
                    <option value>Russia</option>
                  </select>
                </div>
                <div className="col-sm-12 col-md-6 mb-0 mb-lg-0 col-lg-2">
                  <input type="submit" className="btn btn-dark btn-sm" style={{ float: 'right' }} defaultValue="Search" />
                </div>
              </div>
            </form>
          </div>
        </div>
        <section className="container mb-5">
          <div className="row mb-5">
            <div className="col text-center">
              <Title>Jelajahi Sekarang</Title>
              <Text>Panduan wisata anda berikutnya</Text>
            </div>
          </div>
          <div className="container text-center">
            <div className="row mx-auto my-auto justify-content-center">
              <div id="recipeCarousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner" role="listbox">
                  <div className="carousel-item active">
                    <div className="col-md-4">
                      <div className="card border-0">
                        <div className="card-img">
                          <img src="/image1.png" className="img-fluid" />
                        </div>
                        <div className="col-sm-6 col-lg-12 mt-2 d-flex justify-content-center">
                          <p className="text-center"><span className="fa fa-star star-active mx-1" /><span className="text-black"><b>4.4</b></span><span className="text-muted">(1.2k review)</span></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="col-md-4">
                      <div className="card border-0">
                        <div className="card-img">
                          <img src="/image2.png" className="img-fluid" />
                        </div>
                        <div className="col-sm-6 col-lg-12 mt-2 d-flex justify-content-center">
                          <p className="text-center"><span className="fa fa-star star-active mx-1" /><span className="text-black"><b>4.4</b></span><span className="text-muted">(1.2k review)</span></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="col-md-4">
                      <div className="card border-0">
                        <div className="card-img">
                          <img src="/image3.png" className="img-fluid" />
                        </div>
                        <div className="col-sm-6 col-lg-12 mt-2 d-flex justify-content-center">
                          <p className="text-center"><span className="fa fa-star star-active mx-1" /><span className="text-black"><b>4.4</b></span><span className="text-muted">(1.2k review)</span></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <a className="carousel-control-prev bg-transparent" href="#recipeCarousel" role="button" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true" />
                </a>
                <a className="carousel-control-next bg-transparent" href="#recipeCarousel" role="button" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </section>
        <div className="container mt-5">
          <div className="row mb-5">
            <div className="col text-center">
              <Title>Jelajahi Sekarang</Title>
              <Text>Panduan wisata anda berikutnya</Text>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 col-lg-6 text-center position-relative">
              <a href="#">
                <img className="img-fluid mb-3 mb-md-0" style={{ height: 500, borderRadius: 200 }} src="/image4.jpg" alt />
              </a>
            </div>
            <div className="col-md-12 col-lg-6 text-center position-absolute">
              <a href="#">
                <img className="img-fluid mb-3 mb-md-0" style={{ height: 280 }} id="img2" src="/image5.jpg" alt />
              </a>
            </div>
            <div className="col-md-12 col-lg-6 mt-5">
              <Title2>Hutan dan Pemandangan</Title2>
              <Text2>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec varius egestas nisi et volutpat. Pellentesque ac vehicula urna. Aenean magna dolor, rutrum ut dictum sed, mollis ut neque. Proin non sollicitudin magna. Nunc pellentesque auctor hendrerit. Quisque mollis sollicitudin tristique. Integer nec faucibus leo. Maecenas eu enim nisi. In nec arcu quam. Suspendisse potenti. Cras eget pulvinar leo, sit amet rutrum felis. Vivamus non nulla faucibus, congue purus in, luctus sem. Nam quis lectus at magna vulputate lobortis.<br /><br />Vivamus at felis lacinia, lacinia nulla quis, scelerisque augue. Integer in magna nulla. Suspendisse sit amet purus vel tellus aliquam luctus vitae eget justo. Curabitur sagittis metus et magna scelerisque tincidunt. Aenean dictum fermentum risus, at cursus urna aliquam vitae. Suspendisse semper eros eget elit volutpat, lobortis varius nisl finibus. Donec nec arcu elementum, ultrices mi et, vulputate nisl.</Text2>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
