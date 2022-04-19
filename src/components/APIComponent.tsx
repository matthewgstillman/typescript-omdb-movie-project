import React, {useState, FC} from 'react'
import { Form, Button, Container } from "react-bootstrap";
import { useForm, SubmitHandler } from "react-hook-form";
import ArticleComponent from './ArticleComponent';

export interface Movie{
    Title: string;
    Year: string;
    Released: string;
    Runtime: string;
    Genre: string;
    Director: string;
    Writer: string;
    Actors: string;
    Plot: string;
    Language: string;
    Awards: string;
    Poster: string;
    Metascore: string;
    imdbRating: string;
    imdbID: string;
    Type: string;
    DVD: string;
    BoxOffice: string;
    Production: string;
    Website: string;
    Response: boolean;
}

interface FormValues{
    movieTitle: string;
}
const APIComponent: FC = () => {
  const [movieTitle, setMovieTitle ] = useState<string | "">("King+Richard")  
  const [movieData, setMovieData] = useState<Movie | null>(null);
  const [movieDataSubmitted, setMovieDatSubmitted] = useState<boolean>(false);

  const { register, handleSubmit } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    setMovieTitle(data.movieTitle);
    getMovie(data.movieTitle);
    setMovieDatSubmitted(true);
  };


  const getMovie = (title: string) => {
    fetch(
        `http://www.omdbapi.com/?t=${title}&apikey=${process.env.REACT_APP_API_KEY}&plot=full`
    )
    .then((response) => response.json())
    .then((data) => setMovieData({
        Title: data.Title,
        Year: data.Year,
        Released: data.Released,
        Runtime: data.Runtime,
        Genre: data.Genre,
        Director: data.Director,
        Writer: data.Writer,
        Actors: data.Actors,
        Plot: data.Plot,
        Language: data.Language,
        Awards: data.Awards,
        Poster: data.Poster,
        Metascore: data.Metascore,
        imdbRating: data.imdbRating,
        imdbID: data.imdbID,
        Type: data.Type,
        DVD: data.DVD,
        BoxOffice: data.BoxOffice,
        Production: data.Production,
        Website: data.Website,
        Response: data.Response,
    }))
  }

  console.log(movieData);

  return (
    <div>
       <Container fluid className='mainContainer'>
        <Form data-testid="mainForm" onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="topic">
              <Form.Label data-testid="formLabel">
                Enter a Movie
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Movie Title"
                {...register("movieTitle")}
              />
            </Form.Group>
            <Button onClick={() => getMovie} data-testid="submitButton" variant="primary" type="submit">
            Get Movie Data
            </Button>
          </Form>
          <div>
              {movieData !== null && movieData.Title!== undefined?
                <ArticleComponent
                Title={movieData.Title}
                Year={movieData.Year}
                Released={movieData.Released}
                Runtime={movieData.Runtime}
                Genre={movieData.Genre}
                Director={movieData.Director}
                Writer={movieData.Writer}
                Actors={movieData.Actors}
                Plot={movieData.Plot}
                Language={movieData.Language}
                Awards={movieData.Awards}
                Poster={movieData.Poster}
                Metascore={movieData.Metascore}
                imdbRating={movieData.imdbRating}
                imdbID={movieData.imdbID}
                Type={movieData.Type}
                DVD={movieData.DVD}
                BoxOffice={movieData.BoxOffice}
                Production={movieData.Production}
                Website={movieData.Website}
                Response={movieData.Response}
             />
              : <div>
                  <br />
              </div>
              }
            {movieData !== null &&  movieData.Title ===  undefined?
                <h4 className='errorMessage'>No movie was found with this title - please check the spelling or submit another movie.</h4>
                :<></>
            }
          </div>
          <br></br>
          </Container>
    </div>
  )
}

export default APIComponent