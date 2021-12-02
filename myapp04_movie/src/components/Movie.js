import React from "react";
import './Movie.css';
import {NavLink, Link} from "react-router-dom";

function Movie({title,year,summary,poster,genres}){ //Home.js에서 받은 데이터를 가공하여 되돌려준다(+상세보기,제목)
    return(
        <div className="movie">
            {/* 포스터를 클릭하면 제목(movie-datail)이 출력되도록 설정 */}
            <NavLink to={{pathname:'/movie-detail',
                    state:{year,title,summary,poster,genres}}}>
                <img src={poster} alt={title} title={title} />
            </NavLink>
            {/* 본문을 클릭하면 상세보기(movie-view)기능 */}
            <Link to={{pathname:'/movie-view', state:{year,title,summary,poster,genres}}}>
            <div className="movie__data">
                <h3 className="movie__title">{title}</h3>
                <h4 className="movie__year">{year}</h4>
                <ul className="movie__genres">
                    {
                        genres.map((genre,index)=>{
                            return(
                                <li key={index} 
                                className="movie__genre">{genre}</li>
                            )
                        })
                    }
                </ul>
                <p className="movie__summary">{summary.slice(0,180)}...</p> {/*slice()-글자수 설정 */} 
                    
            </div>
            </Link>
        </div>
    )
}

export default Movie;