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
    <div>
        <br />
        <div className="articleHeader">
        <h2>{Title}</h2>
        <h6>{Year} - {Runtime}</h6>
        </div>
        <Image className='moviePoster' src={Poster} fluid/>
        <div className='movieCard'>
            <p className="plotParagraph">{Plot}</p>
            <h6><b>Genre:</b> {Genre}</h6>
            <h6><b>Director:</b> {Director}</h6>
            <h6><b>Writer(s):</b> {Writer}</h6>
            <h6><b>Starring:</b> {Actors}</h6>
            <h6><b>Released:</b>{Released}</h6>
            <h6><b>IMDB Rating:</b> {imdbRating}/10</h6>
            <h6><b>Metascore:</b> {Metascore}/100</h6>
            <h6><b>Total Box Office Revenue</b>: {BoxOffice}</h6>
            <a className="moreInfoLink" href={`https://www.imdb.com/title/${imdbID}`}>More info on IMDB</a>
        </div>
        <br />
        <div className="movieInfo">
        </div>
    </div>
  )
}

export default ArticleComponent;