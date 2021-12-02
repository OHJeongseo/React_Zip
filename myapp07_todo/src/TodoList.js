import TodoItem from "./TodoItem";
import 'bootstrap/dist/css/bootstrap.min.css'; //부트스트랩 import
import { Col, Row, Container, Button } from 'react-bootstrap'; //리엑트 부트스트랩

//입력된 값을 모두가져오는데 데이터를 가공하여(TodoItem.js가 실질적으로) 반환한다 
const TodoList= ({list,todoDelete})=>{ //{속성값이름}
    return(
       /*<div className="container">
            {
                list.map((Todo,index)=>( 
                    <TodoItem key={Todo.num}
                    Todo={Todo}/>
                ))
            }
        </div>*/
    
       //Warning: Each child in a list should have a unique "key" prop-> <Col key={}/>
        <Container>
            <Row>
            {
                list.map((Todo,index)=>( 
                    <Col md={4} key={index}>
                    <TodoItem key={Todo.num} 
                    Todo={Todo} todoDelete={todoDelete}/>
                    {/* <Button variant="outline-danger" onClick={()=>todoDelete(Todo.num)}>
                    삭제</Button> */}
                    </Col>
                )) 
            }
            </Row>
        </Container>
    )
}

export default TodoList;