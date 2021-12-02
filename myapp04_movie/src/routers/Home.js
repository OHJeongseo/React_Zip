import React, {Component} from 'react'
import Movie from '../components/Movie';
import './Home.css'
import axios from 'axios'

class Home extends Component{
    state= {
        isLoading: true,
        movies: []
    }
    /* async+await= api데이터를 다운로드(axios.get())시 걸리는 시간을 js에 알린다
    getMovies= async()=>{ //async()<- 비동기함수 표시
        const {
            data: {
                data: {movies}
            } //await<- 실행완료 대기, 진행처리
        }= await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating')
        this.setState({movies, isLoading:false}) //다운로드 데이터저장(movies), 로딩(false) 종료
    }*/
    getMovies= ()=>{
        fetch('https://yts-proxy.now.sh/list_movies.json?sort_by=rating')
        .then((res)=>res.json())
        .catch(err=>console.log(err))
        .then((res)=>{
            console.log(res.data.movies)
            this.setState({movies:res.data.movies, isLoading:false})
        })
    }
    componentDidMount(){
        this.getMovies();
    }

    render(){
        const{isLoading, movies}= this.state
        return(
          <section className="container">
              {
                  isLoading?( //true-> 다운로드중..
                      <div className="loader">
                          <span className="loader__text">isLoading...</span>
                      </div>
                  ):( //fale-> 다운로드 완료, Movie.js에 값을 전달하고 가공된값을 받아서 모든 데이터를 출력
                      <div className="movies">
                        {
                            movies.map((movie)=>{
                                return(
                                   <Movie key={movie.id}
                                    id={movie.id}
                                    year={movie.year}
                                    title={movie.title}
                                    summary={movie.summary}
                                    poster={movie.medium_cover_image}
                                    genres={movie.genres}
                                   />
                                )
                            })
                        }
                      </div>
                  )
              }
          </section>
        )
    }
}

export default Home;