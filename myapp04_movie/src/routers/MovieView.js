import React from "react";
import './MovieView.css'

class MovieView extends React.Component{
    componentDidMount(){
        const{ location, history}= this.props
        if(location.state===undefined){
            history.push('/')
        }
    }
    render(){
        const {location}= this.props
        if(location.state){
            return(
                <div className="movie__container">
                  <img src={location.state.poster} alt={location.state.title} title={location.state.title} />
                  <div>
                      <h3 className="movie__title">{location.state.title}</h3>
                      <h5 className="movie__year">{location.state.year}</h5>
                      <h5 className="movie__genres">{location.state.genres} </h5>
                      <p className="movie__summary">{location.state.summary}</p>
                  </div>
                </div>
            )
        }else{
            return null;
        }
    }   
}

export default MovieView;