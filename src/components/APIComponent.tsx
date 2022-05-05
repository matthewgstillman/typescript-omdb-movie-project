import React, {useState, FC} from 'react'
import { Form, Button, Container } from "react-bootstrap";
import { useForm, SubmitHandler } from "react-hook-form";
import ArticleComponent from './ArticleComponent';
import ImageCarouselComponent from './ImageCarouselComponent';

const APIComponent: FC = () => {
  const [movieData, setMovieData] = useState<Movie | null>(null);
  const [movieDataSubmitted, setMovieDatSubmitted] = useState<boolean>(false);

  const { register, handleSubmit } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data) => {
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

  return (
    <div>
        <div className="formContainer">
        <h1 className="topHeader" data-testid="topHeader">OMDB API Project</h1>
        <Form data-testid="mainForm" onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="topic">
              <Form.Control
                type="text"
                placeholder="Enter Movie Title"
                {...register("movieTitle")}
              />
            </Form.Group>
            <Button onClick={() => getMovie} data-testid="submitButton" variant="dark" type="submit" className='submitButton'>
            Get Movie Data
            </Button>
          </Form>
        </div>
       <Container fluid className='mainContainer' data-testid="mainContainer">
          {movieDataSubmitted === false ?
            <ImageCarouselComponent/>
          : <></>
          }
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
              </div>
              }
            {movieData !== null &&  movieData.Title ===  undefined?
                <h4 className='errorMessage' data-testid="errorMessage">No movie was found with this title - please check the spelling or submit another movie.</h4>
                :<></>
            }
          </div>
          <br></br>
          </Container>
    </div>
  )
}

export default APIComponent