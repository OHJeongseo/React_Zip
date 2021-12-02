import 'bootstrap/dist/css/bootstrap.min.css'; //부트스트랩 import
import { Button, Card } from 'react-bootstrap'; //리엑트 부트스트랩
import { Link } from 'react-router-dom';
import axios from "axios";

//TodoList.js에서 받은 데이터(전체보기)값을 가공하여 반환한다
const TodoItem= ({Todo,todoDelete})=>{ //{속성값이름}

    //삭제 이벤트 메서드(-> 화살표함수를 사용해서 바로 삭제처리),결과확인시 새로고침
    /*const todoDelete= (num)=>{
        axios.delete("/todo/delete/"+num)
        .then(()=>{
            alert("삭제성공")
        })
    } */
    return(
        /* //부트스트랩 사용
        <div className="card" style={{width:'400px'}}>
            <div className="card-body">
            <h4 className="card-title">제목: {Todo.subject}</h4>
             번호: {Todo.num} <br/>
             이름: {Todo.name}<br/>
             내용: {Todo.summary}<br/>
             작성일: {Todo.regdate}<br/>
             <Button variant="primary">Primary</Button>
            </div>
        </div>*/
        
        //리엑트 부트스트랩 사용
        <Card style={{ width: '18rem' }}>
        <Card.Body>
            <Link to={"/view/"+Todo.num}>
                <Card.Title>{Todo.subject}</Card.Title>
            </Link>
            <Card.Text>
                번호: {Todo.num} <br/>
                이름: {Todo.name}<br/>
                내용: {Todo.summary}<br/>
                작성일: {Todo.regdate}<br/>
            </Card.Text>
            <Button variant="danger" onClick={()=>todoDelete(Todo.num)}>
                삭제</Button>
        </Card.Body>
        </Card>
    )
}

export default TodoItem