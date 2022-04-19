import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ArticleComponent from "./ArticleComponent";

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


test("Main Article container in document", () => {
    render(<ArticleComponent
        Title={mockMovieData.Title}
        Year={mockMovieData.Year}
        Released={mockMovieData.Released}
        Runtime={mockMovieData.Runtime}
        Genre={mockMovieData.Genre}
        Director={mockMovieData.Director}
        Writer={mockMovieData.Writer}
        Actors={mockMovieData.Actors}
        Plot={mockMovieData.Plot}
        Language={mockMovieData.Language}
        Awards={mockMovieData.Awards}
        Poster={mockMovieData.Poster}
        Metascore={mockMovieData.Metascore}
        imdbRating={mockMovieData.imdbRating}
        imdbID={mockMovieData.imdbID}
        Type={mockMovieData.Type}
        DVD={mockMovieData.DVD}
        BoxOffice={mockMovieData.BoxOffice}
        Production={mockMovieData.Production}
        Website={mockMovieData.Website}
        Response={mockMovieData.Response}
         />);
    const mainArticleContainerElement = screen.getByTestId("mainArticleContainer");
    expect(mainArticleContainerElement).toBeInTheDocument();
  });

  test("Main Article header in document", () => {
    render(<ArticleComponent
        Title={mockMovieData.Title}
        Year={mockMovieData.Year}
        Released={mockMovieData.Released}
        Runtime={mockMovieData.Runtime}
        Genre={mockMovieData.Genre}
        Director={mockMovieData.Director}
        Writer={mockMovieData.Writer}
        Actors={mockMovieData.Actors}
        Plot={mockMovieData.Plot}
        Language={mockMovieData.Language}
        Awards={mockMovieData.Awards}
        Poster={mockMovieData.Poster}
        Metascore={mockMovieData.Metascore}
        imdbRating={mockMovieData.imdbRating}
        imdbID={mockMovieData.imdbID}
        Type={mockMovieData.Type}
        DVD={mockMovieData.DVD}
        BoxOffice={mockMovieData.BoxOffice}
        Production={mockMovieData.Production}
        Website={mockMovieData.Website}
        Response={mockMovieData.Response}
         />);
    const mainArticleHeaderElement = screen.getByTestId("articleHeader");
    expect(mainArticleHeaderElement).toBeInTheDocument();
  });

  test("Image from URL in document", () => {
    render(<ArticleComponent
        Title={mockMovieData.Title}
        Year={mockMovieData.Year}
        Released={mockMovieData.Released}
        Runtime={mockMovieData.Runtime}
        Genre={mockMovieData.Genre}
        Director={mockMovieData.Director}
        Writer={mockMovieData.Writer}
        Actors={mockMovieData.Actors}
        Plot={mockMovieData.Plot}
        Language={mockMovieData.Language}
        Awards={mockMovieData.Awards}
        Poster={mockMovieData.Poster}
        Metascore={mockMovieData.Metascore}
        imdbRating={mockMovieData.imdbRating}
        imdbID={mockMovieData.imdbID}
        Type={mockMovieData.Type}
        DVD={mockMovieData.DVD}
        BoxOffice={mockMovieData.BoxOffice}
        Production={mockMovieData.Production}
        Website={mockMovieData.Website}
        Response={mockMovieData.Response}
         />);
    const imageFromURLElement = screen.getByTestId("moviePosterImage");
    expect(imageFromURLElement).toHaveAttribute(
        "src",
        mockMovieData.Poster
      );
  })


  test("Movie Card in document", () => {
    render(<ArticleComponent
        Title={mockMovieData.Title}
        Year={mockMovieData.Year}
        Released={mockMovieData.Released}
        Runtime={mockMovieData.Runtime}
        Genre={mockMovieData.Genre}
        Director={mockMovieData.Director}
        Writer={mockMovieData.Writer}
        Actors={mockMovieData.Actors}
        Plot={mockMovieData.Plot}
        Language={mockMovieData.Language}
        Awards={mockMovieData.Awards}
        Poster={mockMovieData.Poster}
        Metascore={mockMovieData.Metascore}
        imdbRating={mockMovieData.imdbRating}
        imdbID={mockMovieData.imdbID}
        Type={mockMovieData.Type}
        DVD={mockMovieData.DVD}
        BoxOffice={mockMovieData.BoxOffice}
        Production={mockMovieData.Production}
        Website={mockMovieData.Website}
        Response={mockMovieData.Response}
         />);
    const movieCardElement = screen.getByTestId("movieCard");
    expect(movieCardElement).toBeInTheDocument();
  });

  test("Plot paragraph in document", () => {
    render(<ArticleComponent
        Title={mockMovieData.Title}
        Year={mockMovieData.Year}
        Released={mockMovieData.Released}
        Runtime={mockMovieData.Runtime}
        Genre={mockMovieData.Genre}
        Director={mockMovieData.Director}
        Writer={mockMovieData.Writer}
        Actors={mockMovieData.Actors}
        Plot={mockMovieData.Plot}
        Language={mockMovieData.Language}
        Awards={mockMovieData.Awards}
        Poster={mockMovieData.Poster}
        Metascore={mockMovieData.Metascore}
        imdbRating={mockMovieData.imdbRating}
        imdbID={mockMovieData.imdbID}
        Type={mockMovieData.Type}
        DVD={mockMovieData.DVD}
        BoxOffice={mockMovieData.BoxOffice}
        Production={mockMovieData.Production}
        Website={mockMovieData.Website}
        Response={mockMovieData.Response}
         />);
    const plotParagraphElement = screen.getByTestId("plotParagraph");
    expect(plotParagraphElement).toBeInTheDocument();
  });

  test("Genre header in document", () => {
    render(<ArticleComponent
        Title={mockMovieData.Title}
        Year={mockMovieData.Year}
        Released={mockMovieData.Released}
        Runtime={mockMovieData.Runtime}
        Genre={mockMovieData.Genre}
        Director={mockMovieData.Director}
        Writer={mockMovieData.Writer}
        Actors={mockMovieData.Actors}
        Plot={mockMovieData.Plot}
        Language={mockMovieData.Language}
        Awards={mockMovieData.Awards}
        Poster={mockMovieData.Poster}
        Metascore={mockMovieData.Metascore}
        imdbRating={mockMovieData.imdbRating}
        imdbID={mockMovieData.imdbID}
        Type={mockMovieData.Type}
        DVD={mockMovieData.DVD}
        BoxOffice={mockMovieData.BoxOffice}
        Production={mockMovieData.Production}
        Website={mockMovieData.Website}
        Response={mockMovieData.Response}
         />);
    const genreHeaderElement = screen.getByTestId("genreHeader");
    expect(genreHeaderElement).toBeInTheDocument();
  });

  test("Director header in document", () => {
    render(<ArticleComponent
        Title={mockMovieData.Title}
        Year={mockMovieData.Year}
        Released={mockMovieData.Released}
        Runtime={mockMovieData.Runtime}
        Genre={mockMovieData.Genre}
        Director={mockMovieData.Director}
        Writer={mockMovieData.Writer}
        Actors={mockMovieData.Actors}
        Plot={mockMovieData.Plot}
        Language={mockMovieData.Language}
        Awards={mockMovieData.Awards}
        Poster={mockMovieData.Poster}
        Metascore={mockMovieData.Metascore}
        imdbRating={mockMovieData.imdbRating}
        imdbID={mockMovieData.imdbID}
        Type={mockMovieData.Type}
        DVD={mockMovieData.DVD}
        BoxOffice={mockMovieData.BoxOffice}
        Production={mockMovieData.Production}
        Website={mockMovieData.Website}
        Response={mockMovieData.Response}
         />);
    const directorHeaderElement = screen.getByTestId("directorHeader");
    expect(directorHeaderElement).toBeInTheDocument();
  });

  test("Writer header in document", () => {
    render(<ArticleComponent
        Title={mockMovieData.Title}
        Year={mockMovieData.Year}
        Released={mockMovieData.Released}
        Runtime={mockMovieData.Runtime}
        Genre={mockMovieData.Genre}
        Director={mockMovieData.Director}
        Writer={mockMovieData.Writer}
        Actors={mockMovieData.Actors}
        Plot={mockMovieData.Plot}
        Language={mockMovieData.Language}
        Awards={mockMovieData.Awards}
        Poster={mockMovieData.Poster}
        Metascore={mockMovieData.Metascore}
        imdbRating={mockMovieData.imdbRating}
        imdbID={mockMovieData.imdbID}
        Type={mockMovieData.Type}
        DVD={mockMovieData.DVD}
        BoxOffice={mockMovieData.BoxOffice}
        Production={mockMovieData.Production}
        Website={mockMovieData.Website}
        Response={mockMovieData.Response}
         />);
    const writerHeaderElement = screen.getByTestId("writerHeader");
    expect(writerHeaderElement).toBeInTheDocument();
  });

  test("Actor header in document", () => {
    render(<ArticleComponent
        Title={mockMovieData.Title}
        Year={mockMovieData.Year}
        Released={mockMovieData.Released}
        Runtime={mockMovieData.Runtime}
        Genre={mockMovieData.Genre}
        Director={mockMovieData.Director}
        Writer={mockMovieData.Writer}
        Actors={mockMovieData.Actors}
        Plot={mockMovieData.Plot}
        Language={mockMovieData.Language}
        Awards={mockMovieData.Awards}
        Poster={mockMovieData.Poster}
        Metascore={mockMovieData.Metascore}
        imdbRating={mockMovieData.imdbRating}
        imdbID={mockMovieData.imdbID}
        Type={mockMovieData.Type}
        DVD={mockMovieData.DVD}
        BoxOffice={mockMovieData.BoxOffice}
        Production={mockMovieData.Production}
        Website={mockMovieData.Website}
        Response={mockMovieData.Response}
         />);
    const actorHeaderElement = screen.getByTestId("actorHeader");
    expect(actorHeaderElement).toBeInTheDocument();
  });

  test("Release Date header in document", () => {
    render(<ArticleComponent
        Title={mockMovieData.Title}
        Year={mockMovieData.Year}
        Released={mockMovieData.Released}
        Runtime={mockMovieData.Runtime}
        Genre={mockMovieData.Genre}
        Director={mockMovieData.Director}
        Writer={mockMovieData.Writer}
        Actors={mockMovieData.Actors}
        Plot={mockMovieData.Plot}
        Language={mockMovieData.Language}
        Awards={mockMovieData.Awards}
        Poster={mockMovieData.Poster}
        Metascore={mockMovieData.Metascore}
        imdbRating={mockMovieData.imdbRating}
        imdbID={mockMovieData.imdbID}
        Type={mockMovieData.Type}
        DVD={mockMovieData.DVD}
        BoxOffice={mockMovieData.BoxOffice}
        Production={mockMovieData.Production}
        Website={mockMovieData.Website}
        Response={mockMovieData.Response}
         />);
    const releasedHeaderElement = screen.getByTestId("releasedHeader");
    expect(releasedHeaderElement).toBeInTheDocument();
  });

  test("IMDB Rating header in document", () => {
    render(<ArticleComponent
        Title={mockMovieData.Title}
        Year={mockMovieData.Year}
        Released={mockMovieData.Released}
        Runtime={mockMovieData.Runtime}
        Genre={mockMovieData.Genre}
        Director={mockMovieData.Director}
        Writer={mockMovieData.Writer}
        Actors={mockMovieData.Actors}
        Plot={mockMovieData.Plot}
        Language={mockMovieData.Language}
        Awards={mockMovieData.Awards}
        Poster={mockMovieData.Poster}
        Metascore={mockMovieData.Metascore}
        imdbRating={mockMovieData.imdbRating}
        imdbID={mockMovieData.imdbID}
        Type={mockMovieData.Type}
        DVD={mockMovieData.DVD}
        BoxOffice={mockMovieData.BoxOffice}
        Production={mockMovieData.Production}
        Website={mockMovieData.Website}
        Response={mockMovieData.Response}
         />);
    const imdbRatingHeaderElement = screen.getByTestId("imdbRatingHeader");
    expect(imdbRatingHeaderElement).toBeInTheDocument();
  });

  test("Metascore Rating header in document", () => {
    render(<ArticleComponent
        Title={mockMovieData.Title}
        Year={mockMovieData.Year}
        Released={mockMovieData.Released}
        Runtime={mockMovieData.Runtime}
        Genre={mockMovieData.Genre}
        Director={mockMovieData.Director}
        Writer={mockMovieData.Writer}
        Actors={mockMovieData.Actors}
        Plot={mockMovieData.Plot}
        Language={mockMovieData.Language}
        Awards={mockMovieData.Awards}
        Poster={mockMovieData.Poster}
        Metascore={mockMovieData.Metascore}
        imdbRating={mockMovieData.imdbRating}
        imdbID={mockMovieData.imdbID}
        Type={mockMovieData.Type}
        DVD={mockMovieData.DVD}
        BoxOffice={mockMovieData.BoxOffice}
        Production={mockMovieData.Production}
        Website={mockMovieData.Website}
        Response={mockMovieData.Response}
         />);
    const metascoreHeaderElement = screen.getByTestId("metascoreHeader");
    expect(metascoreHeaderElement).toBeInTheDocument();
  });

  test("Total Box Office header in document", () => {
    render(<ArticleComponent
        Title={mockMovieData.Title}
        Year={mockMovieData.Year}
        Released={mockMovieData.Released}
        Runtime={mockMovieData.Runtime}
        Genre={mockMovieData.Genre}
        Director={mockMovieData.Director}
        Writer={mockMovieData.Writer}
        Actors={mockMovieData.Actors}
        Plot={mockMovieData.Plot}
        Language={mockMovieData.Language}
        Awards={mockMovieData.Awards}
        Poster={mockMovieData.Poster}
        Metascore={mockMovieData.Metascore}
        imdbRating={mockMovieData.imdbRating}
        imdbID={mockMovieData.imdbID}
        Type={mockMovieData.Type}
        DVD={mockMovieData.DVD}
        BoxOffice={mockMovieData.BoxOffice}
        Production={mockMovieData.Production}
        Website={mockMovieData.Website}
        Response={mockMovieData.Response}
         />);
    const totalBoxOfficeHeaderElement = screen.getByTestId("totalBoxOfficeHeader");
    expect(totalBoxOfficeHeaderElement).toBeInTheDocument();
  });

  test("More Info Link in document", () => {
    render(<ArticleComponent
        Title={mockMovieData.Title}
        Year={mockMovieData.Year}
        Released={mockMovieData.Released}
        Runtime={mockMovieData.Runtime}
        Genre={mockMovieData.Genre}
        Director={mockMovieData.Director}
        Writer={mockMovieData.Writer}
        Actors={mockMovieData.Actors}
        Plot={mockMovieData.Plot}
        Language={mockMovieData.Language}
        Awards={mockMovieData.Awards}
        Poster={mockMovieData.Poster}
        Metascore={mockMovieData.Metascore}
        imdbRating={mockMovieData.imdbRating}
        imdbID={mockMovieData.imdbID}
        Type={mockMovieData.Type}
        DVD={mockMovieData.DVD}
        BoxOffice={mockMovieData.BoxOffice}
        Production={mockMovieData.Production}
        Website={mockMovieData.Website}
        Response={mockMovieData.Response}
         />);
    const moreInfoLinkElement = screen.getByTestId("moreInfoLink");
    expect(moreInfoLinkElement).toBeInTheDocument();
  });