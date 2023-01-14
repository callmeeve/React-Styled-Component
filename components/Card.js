import styled from "styled-components";

const CardTitle = styled.h5`
    margin-bottom: 0.5rem;
    font-size: 1.25rem;
    font-weight: 700;
    text-align: start;

`;

const CardText = styled.p`
  font-size: 1em;
  text-align: start;
  color: dark;
  font-weight: normal;
  margin-bottom: 1rem;
  margin-top: 0;
`;

const Card = () => {
    return (
        <>
            <div className="row row-cols-3 row-cols-md-3 p-4 mt-3">
                <div className="card border-0 mx-auto" style={{ width: '18rem' }}>
                    <img src="/telokijo.png" className="card-img-top" />
                    <div className="card-body p-0 mt-2">
                        <span className="fa fa-star checked" /> <span className="fa fa-star checked" />
                        <span className="fa fa-star checked" /> <span className="fa fa-star-half-full" />
                        <CardTitle>Pantai Teluk Hijau</CardTitle>
                        <CardText>Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit, sed
                            do eiusmod tempor incididunt</CardText>
                    </div>
                </div>
                <div className="card border-0 mx-auto" style={{ width: '18rem' }}>
                    <img src="/telokijo.png" className="card-img-top" />
                    <div className="card-body p-0 mt-2">
                        <span className="fa fa-star checked" /> <span className="fa fa-star checked" />
                        <span className="fa fa-star checked" /> <span className="fa fa-star-half-full" />
                        <CardTitle>Pantai Teluk Hijau</CardTitle>
                        <p>Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit, sed
                            do eiusmod tempor incididunt</p>
                    </div>
                </div>
                <div className="card border-0 mx-auto" style={{ width: '18rem' }}>
                    <img src="/telokijo.png" className="card-img-top" />
                    <div className="card-body p-0 mt-2">
                        <span className="fa fa-star checked" /> <span className="fa fa-star checked" />
                        <span className="fa fa-star checked" /> <span className="fa fa-star-half-full" />
                        <CardTitle>Pantai Teluk Hijau</CardTitle>
                        <CardText>Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit, sed
                            do eiusmod tempor incididunt</CardText>
                    </div>
                </div>
            </div>
            <div className="row row-cols-3 row-cols-md-3 p-4">
                <div className="card border-0 mx-auto" style={{ width: '18rem' }}>
                    <img src="/telokijo.png" className="card-img-top" />
                    <div className="card-body p-0 mt-2">
                        <span className="fa fa-star checked" /> <span className="fa fa-star checked" />
                        <span className="fa fa-star checked" /> <span className="fa fa-star-half-full" />
                        <CardTitle>Pantai Teluk Hijau</CardTitle>
                        <CardText>Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit, sed
                            do eiusmod tempor incididunt</CardText>
                    </div>
                </div>
                <div className="card border-0 mx-auto" style={{ width: '18rem' }}>
                    <img src="/telokijo.png" className="card-img-top" />
                    <div className="card-body p-0 mt-2">
                        <span className="fa fa-star checked" /> <span className="fa fa-star checked" />
                        <span className="fa fa-star checked" /> <span className="fa fa-star-half-full" />
                        <CardTitle>Pantai Teluk Hijau</CardTitle>
                        <CardText>Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit, sed
                            do eiusmod tempor incididunt</CardText>
                    </div>
                </div>
                <div className="card border-0 mx-auto" style={{ width: '18rem' }}>
                    <img src="/telokijo.png" className="card-img-top" />
                    <div className="card-body p-0 mt-2">
                        <span className="fa fa-star checked" /> <span className="fa fa-star checked" />
                        <span className="fa fa-star checked" /> <span className="fa fa-star-half-full" />
                        <CardTitle>Pantai Teluk Hijau</CardTitle>
                        <CardText>Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit, sed
                            do eiusmod tempor incididunt</CardText>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;