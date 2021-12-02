import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Container } from 'react-bootstrap';

const Detail= (props)=>{ //props->부모에서 받은 데이터값
    const {location}= props //location으로 구조분해할당(변수)
    return(
        <Container>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={location.state.poster} />
            <ul>
                {
                    location.state.genres.map((genre,index)=>{
                        return(
                            <li key={index}>{genre}</li>
                        )
                    })
                }
            </ul>
            <Card.Body>
            <Card.Title>{location.state.title}</Card.Title>
            <Card.Title>{location.state.year}</Card.Title>
            <Card.Text>
                {location.state.summary}
            </Card.Text>
            </Card.Body>
        </Card>
      </Container>
    )
}

export default Detail