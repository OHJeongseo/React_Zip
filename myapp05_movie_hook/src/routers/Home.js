import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Spinner, Row, Col} from 'react-bootstrap';
import { useState, useEffect } from 'react';
import axios from'axios';
import Movie from '../components/Movie';


const Home= ()=>{
    const[movies, setMovies]= useState([])
    const[isLoading, setLoading]= useState(true)
    const getMovies= ()=>{
        axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating')
        .then((res)=>{
            console.log(res.data.data.movies)
            setMovies(res.data.data.movies)
            setLoading(false)
        })
    }
    useEffect(()=>{ //componentDidMount, componentDidUpdate
        getMovies()
    },[])
    return(
        <Container>
        {
            isLoading?(
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            ):(
                <Row>
                {
                    movies.map((movie,index)=>{
                        return(
                            <Col md={4} key={index}>
                                <Movie key={movie.id}
                                id={movie.id} year={movie.year} title={movie.title} summary={movie.summary} 
                                poster={movie.medium_cover_image} genres={movie.genres}
                                />
                            </Col>
                        )
                    })
                }
                </Row>
            )
        }
        </Container>
    )
}

export default Home