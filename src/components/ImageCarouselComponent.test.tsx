import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ImageCarouselComponent from "./ImageCarouselComponent";

const mockMovieData = {
    Actors: "Judy Garland, Frank Morgan, Ray Bolger",
    Awards: "Won 2 Oscars. 13 wins & 16 nominations total",
    BoxOffice: "$24,668,669",
    DVD: "12 Aug 2003",
    Director: "Victor Fleming, George Cukor, Mervyn LeRoy",
    Genre: "Adventure, Family, Fantasy",
    Language: "English",
    Metascore: "92",
    Plot: "When a tornado rips through Kansas, Dorothy Gale and her dog, Toto, are whisked away in their house to the magical Land of Oz. They follow the Yellow Brick Road toward the Emerald City to meet the Wizard, and on the way they meet a Scarecrow who wants a brain, a Tin Man who wants a heart, and a Cowardly Lion who wants courage. The Wizard asks them to bring him the Wicked Witch of the West's broom to earn his help.",
    Poster: "https://m.media-amazon.com/images/M/MV5BNjUyMTc4MDExMV5BMl5BanBnXkFtZTgwNDg0NDIwMjE@._V1_SX300.jpg",
    Production: "N/A",
    Released: "25 Aug 1939",
    Response: true,
    Runtime: "102 min",
    Title: "The Wizard of Oz",
    Type: "movie",
    Website: "N/A",
    Writer: "Noel Langley, Florence Ryerson, Edgar Allan Woolf",
    Year: "1939",
    imdbID: "tt0032138",
    imdbRating: "8.1",
}

const posterUrls = {
    jurassicPark: "https://m.media-amazon.com/images/M/MV5BMjM2MDgxMDg0Nl5BMl5BanBnXkFtZTgwNTM2OTM5NDE@._V1_SX300.jpg",
    goodfellas: "https://m.media-amazon.com/images/M/MV5BY2NkZjEzMDgtN2RjYy00YzM1LWI4ZmQtMjIwYjFjNmI3ZGEwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    rocky: "https://m.media-amazon.com/images/M/MV5BNTBkMjg2MjYtYTZjOS00ODQ0LTg0MDEtM2FiNmJmOGU1NGEwXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg",
    toyStory: "https://m.media-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_SX300.jpg",
    theBigShort: "https://m.media-amazon.com/images/M/MV5BNDc4MThhN2EtZjMzNC00ZDJmLThiZTgtNThlY2UxZWMzNjdkXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
    talladegaNights: "https://m.media-amazon.com/images/M/MV5BNzAzOTk1OTIyM15BMl5BanBnXkFtZTcwNDIzNTQzMQ@@._V1_SX300.jpg",
    independenceDay: "https://m.media-amazon.com/images/M/MV5BMGQwNDNkMmItYWY1Yy00YTZmLWE5OTAtODU0MGZmMzQ1NDdkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    scarFace: "https://m.media-amazon.com/images/M/MV5BNjdjNGQ4NDEtNTEwYS00MTgxLTliYzQtYzE2ZDRiZjFhZmNlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
    dumbAndDumber: "https://m.media-amazon.com/images/M/MV5BZDQwMjNiMTQtY2UwYy00NjhiLTk0ZWEtZWM5ZWMzNGFjNTVkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
}
s
test("Main Image Carousel in document", () => {
    render(<ImageCarouselComponent/>);
    const mainImageCarouselElement = screen.getByTestId("mainImageCarousel");
    expect(mainImageCarouselElement).toBeInTheDocument();
  });

test("Jurassic Park in document", () => {
    render(<ImageCarouselComponent/>);
    const jurassicParkElement = screen.getByAltText("Jurassic Park");
    expect(jurassicParkElement).toHaveAttribute(
        "src",
        posterUrls.jurassicPark
      );
  });

  test("Goodfellas in document", () => {
    render(<ImageCarouselComponent/>);
    const goodFellasElement = screen.getByAltText("Goodfellas");
    expect(goodFellasElement).toHaveAttribute(
        "src",
        posterUrls.goodfellas
      );
  });

  test("Rocky in document", () => {
    render(<ImageCarouselComponent/>);
    const rockyElement = screen.getByAltText("Rocky");
    expect(rockyElement).toHaveAttribute(
        "src",
        posterUrls.rocky
      );
  });

  test("Toy Story in document", () => {
    render(<ImageCarouselComponent/>);
    const toyStoryElement = screen.getByAltText("Toy Story");
    expect(toyStoryElement).toHaveAttribute(
        "src",
        posterUrls.toyStory
      );
  });

  test("The Big Short in document", () => {
    render(<ImageCarouselComponent/>);
    const theBigShortElement = screen.getByAltText("The Big Short");
    expect(theBigShortElement).toHaveAttribute(
        "src",
        posterUrls.theBigShort
      );
  });

  test("Talladega Nights in document", () => {
    render(<ImageCarouselComponent/>);
    const talladegaNightsElement = screen.getByAltText("Talladega Nights");
    expect(talladegaNightsElement).toHaveAttribute(
        "src",
        posterUrls.talladegaNights
      );
  });

  test("Independence Day in document", () => {
    render(<ImageCarouselComponent/>);
    const independenceDayElement = screen.getByAltText("Independence Day");
    expect(independenceDayElement).toHaveAttribute(
        "src",
        posterUrls.independenceDay
      );
  });


  test("Scarface in document", () => {
    render(<ImageCarouselComponent/>);
    const scarfaceElement = screen.getByAltText("Scarface");
    expect(scarfaceElement).toHaveAttribute(
        "src",
        posterUrls.scarFace
      );
  });

  test("Dumb and Dumber in document", () => {
    render(<ImageCarouselComponent/>);
    const dumbAndDumberElement = screen.getByAltText("Dumb and Dumber");
    expect(dumbAndDumberElement).toHaveAttribute(
        "src",
        posterUrls.dumbAndDumber
      );
  });
  