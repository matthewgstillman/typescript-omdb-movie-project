
   
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import APIComponent from "./APIComponent";

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
    Response: "True",
    Runtime: "102 min",
    Title: "The Wizard of Oz",
    Type: "movie",
    Website: "N/A",
    Writer: "Noel Langley, Florence Ryerson, Edgar Allan Woolf",
    Year: "1939",
    imdbID: "tt0032138",
    imdbRating: "8.1",
}

test("Main form in document", () => {
    render(<APIComponent />);
    const mainFormElement = screen.getByTestId("mainForm");
    expect(mainFormElement).toBeInTheDocument();
  });

  test("Main container in document", () => {
    render(<APIComponent />);
    const mainContainerElement = screen.getByTestId("mainContainer");
    expect(mainContainerElement).toBeInTheDocument();
  });

