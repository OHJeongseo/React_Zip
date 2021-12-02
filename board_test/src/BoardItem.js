import 'bootstrap/dist/css/bootstrap.min.css'; //부트스트랩 import
import { Button, Card } from 'react-bootstrap'; //리엑트 부트스트랩
import { Link } from 'react-router-dom';
import axios from "axios";

//TodoList.js에서 받은 데이터(전체보기)값을 가공(부트스트랩을 사용->스타일링)하여 반환한다
const BoardItem= ({board,boardDelete})=>{ //{속성값이름}

    return(
       
        
        //리엑트 부트스트랩 사용
        <Card style={{ width: '18rem' }} border="info" className="mt-3">
        <Card.Body>
            
            <Card.Title>{board.num}</Card.Title>
            
            <Card.Text>
                번호: {board.num} <br/>
                이름: {board.title}<br/>
            </Card.Text>
            <Link to={"/view/"+board.num}>
                <Button variant="outline-info">
                상세</Button>
            </Link>
            <Button variant="outline-danger" onClick={()=>boardDelete(board.num)}>
                삭제
            </Button>
            
        </Card.Body>
        </Card>
    )
}

export default BoardItem