import React, {FC} from 'react'
import Image from 'react-bootstrap/Image'

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
    <div className="mainArticleContainer" data-testid="mainArticleContainer">
        <br />
        <div className="articleHeader" data-testid="articleHeader">
            <h2>{Title}</h2>
            <h6>{Year} - {Runtime}</h6>
        </div>
        <Image className='moviePoster' src={Poster} alt="movie poster image" data-testid="moviePosterImage" fluid/>
        <div className="movieCard" data-testid="movieCard">
           <div className="movieContainerData">
           <p className="plotParagraph" data-testid="plotParagraph">{Plot}</p>
              <h6 data-testid="genreHeader"><b>Genre:</b> {Genre}</h6>
              <h6 data-testid="directorHeader"><b>Director:</b> {Director}</h6>
              <h6 data-testid="writerHeader"><b>Writer(s):</b> {Writer}</h6>
              <h6 data-testid="actorHeader"><b>Starring:</b> {Actors}</h6>
              <h6 data-testid="releasedHeader"><b>Released:</b> {Released}</h6>
              <h6 data-testid="imdbRatingHeader"><b>IMDB Rating:</b> {imdbRating}/10</h6>
              <h6 data-testid="metascoreHeader"><b>Metascore:</b> {Metascore}/100</h6>
              <h6 data-testid="totalBoxOfficeHeader"><b>Total Box Office Revenue</b>: {BoxOffice}</h6>
              <a  data-testid="moreInfoLink" className="moreInfoLink" href={`https://www.imdb.com/title/${imdbID}`}>More info on IMDB</a>
           </div>
        </div>
        <br />
    </div>
  )
}

export default ArticleComponent;