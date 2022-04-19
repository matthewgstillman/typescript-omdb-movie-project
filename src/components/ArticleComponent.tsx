import React, {FC} from 'react'
import Image from 'react-bootstrap/Image'

interface MovieArticle{
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

const ArticleComponent: FC<MovieArticle> = (
    {
    Title,
    Year,
    Released,
    Runtime,
    Genre,
    Director,
    Writer,
    Actors,
    Plot,
    Language,
    Awards,
    Poster,
    Metascore,
    imdbRating,
    imdbID,
    Type,
    DVD,
    BoxOffice,
    Production,
    Website,
    Response,
    }
) => {
  return (
    <div>
        <br />
        <div className="articleHeader">
        <h2>{Title}</h2>
        <h6>{Year} - {Runtime}</h6>
        </div>
        <Image className='moviePoster' src={Poster} fluid/>
        {/* <p className="plotParagraph">{Plot}</p> */}
        <div className='plotParagraph'>
            <p>{Plot}</p>
            <h5>Genre: <b>{Genre}</b></h5>
            <h5>Director: <b>{Director}</b></h5>
            <h5>Writer(s): <b>{Writer}</b></h5>
            <h5>Starring: <b>{Actors}</b></h5>
            <h5>IMDB Rating: <b>{imdbRating}/10</b></h5>
            <h5>Metascore: <b>{Metascore}/100</b></h5>
            <a href={`https://www.imdb.com/title/${imdbID}`}>More info on IMDB</a>
        </div>
        <br />
        <div className="movieInfo">
        </div>
    </div>
  )
}

export default ArticleComponent;