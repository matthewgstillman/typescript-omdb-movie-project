import React from 'react'
import { Carousel, Image } from "react-bootstrap";

const ImageCarouselComponent  = () => {
  return (
    <Carousel data-testid="mainImageCarousel" fade controls={false} indicators={false}>
                <Carousel.Item interval={750}>
                    <Image className="moviePoster" src="https://m.media-amazon.com/images/M/MV5BMjM2MDgxMDg0Nl5BMl5BanBnXkFtZTgwNTM2OTM5NDE@._V1_SX300.jpg" alt="Jurassic Park" fluid/>
                </Carousel.Item>
                <Carousel.Item interval={750}>
                    <Image className="moviePoster" src="https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg" alt="Star Wars"  fluid/>
                </Carousel.Item>
                <Carousel.Item interval={750}>
                    <Image className="moviePoster" src="https://m.media-amazon.com/images/M/MV5BY2NkZjEzMDgtN2RjYy00YzM1LWI4ZmQtMjIwYjFjNmI3ZGEwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg" alt="Goodfellas" fluid/>
                </Carousel.Item>
                <Carousel.Item interval={750}>
                    <Image className="moviePoster" src="https://m.media-amazon.com/images/M/MV5BNTBkMjg2MjYtYTZjOS00ODQ0LTg0MDEtM2FiNmJmOGU1NGEwXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg" alt="Rocky" fluid/>
                </Carousel.Item>
                <Carousel.Item interval={750}>
                    <Image className="moviePoster" src="https://m.media-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_SX300.jpg" alt="Toy Story" fluid/>
                </Carousel.Item>
                <Carousel.Item interval={750}>
                    <Image className="moviePoster" src="https://m.media-amazon.com/images/M/MV5BNDc4MThhN2EtZjMzNC00ZDJmLThiZTgtNThlY2UxZWMzNjdkXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg" alt="The Big Short" fluid/>
                </Carousel.Item>
                <Carousel.Item interval={750}>
                    <Image className="moviePoster" src="https://m.media-amazon.com/images/M/MV5BNzAzOTk1OTIyM15BMl5BanBnXkFtZTcwNDIzNTQzMQ@@._V1_SX300.jpg" alt="Talladega Nights" fluid/>
                </Carousel.Item>
                <Carousel.Item interval={750}>
                    <Image className="moviePoster" src="https://m.media-amazon.com/images/M/MV5BMGQwNDNkMmItYWY1Yy00YTZmLWE5OTAtODU0MGZmMzQ1NDdkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg" alt="Independence Day" fluid/>
                </Carousel.Item>
                <Carousel.Item interval={750}>
                    <Image className="moviePoster" src="https://m.media-amazon.com/images/M/MV5BNjdjNGQ4NDEtNTEwYS00MTgxLTliYzQtYzE2ZDRiZjFhZmNlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg" alt="Scarface" fluid/>
                </Carousel.Item>
                <Carousel.Item interval={750}>
                    <Image className="moviePoster" src="https://m.media-amazon.com/images/M/MV5BZDQwMjNiMTQtY2UwYy00NjhiLTk0ZWEtZWM5ZWMzNGFjNTVkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg" alt="Dumb and Dumber" fluid/>
                </Carousel.Item>
            </Carousel>
  )
}

export default ImageCarouselComponent;