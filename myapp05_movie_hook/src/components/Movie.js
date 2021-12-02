import { Card, Button, Nav } from "react-bootstrap"
import {NavLink} from "react-router-dom";

const Movie= ({year, title, summary, poster, genres})=>{
    return(
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={poster} />
        <ul>
            {
                genres.map((genre,index)=>{
                    return(
                        <li key={index}>{genre}</li>
                    )
                })
            }
        </ul>
        <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Title>{year}</Card.Title>
            <Card.Text>
                {summary.slice(0,180)}...
            </Card.Text>
            <NavLink to={{pathname:'/detail', state:{year, title, summary, poster, genres}}}>
                <Button variant="primary">Detail</Button>
            </NavLink>
        </Card.Body>
        </Card>
    )
}

export default Movie