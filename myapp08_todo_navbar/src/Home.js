import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { Button, Container, Form, Row, Col} from 'react-bootstrap';
import { useState, useEffect } from "react";
import axios from "axios";

//Home화면으로 서버의 값을 모두받아서 TotoList.js에 값을 보내주고 가공된 데이터를 받아서 화면에 출력한다
const Home=()=>{
    const [listText, setListText]= useState([]) //입력된 값을 저장하는 동적데이터 설정
    const [word, setWord]= useState('')

    //리엑트가 실행되면 가장먼저 함수를 실행한다(loadText를 호출하여 서버의 값을 가져온다)
    useEffect(()=>{  //(componentDidMount+DidUpdate)
        loadText();
    },[word]) //[]-> 1번만 호출되도록 설정 , [word]-> 검색창(Form)에 대한 결과를 보여주도록 설정한다
  

    /*전체보기 */
    //스프링에서 설정한 서버의 값을 받아서 값을 저장한다
    const loadText= ()=>{ //서버의 값(TodoTable의 데이터)를 가져와서 저장한다
         //axios.get("/todo/list) ->크로스 도메인 사용시
        axios.get('http://localhost:8875/todo/list?subject='+word) //json형식(url) ->크로스 도메인 사용시
        .then((resp)=>{ //json-callback
            console.log(resp.data)
            setListText(resp.data) //서버에서 받은 값을 담는다
        })
    }
    const todoDelete= (num)=>{ // 삭제버튼 클릭(TodoList.js-삭제버튼)시 삭제할 번호를 받아서(반환된) 삭제실행하고 삭제된 번호를 제외한 값을 화면에 출력되도록 설정한다 
        //axios.get("/todo/delete/"+num) 
        axios.delete("http://localhost:8875/todo/delete/"+num) //서버에서 삭제기능 실행
        .then(()=>{
        alert("삭제성공") 
        setListText(listText.filter(Todo=>Todo.num!==num)) //화면에서 삭제된 번호와 다른번호의 값만 보이도록 설정한다
        })
    }

    const getValue= (e)=>{
        setWord(e.target.value)
    }

    return(
        <Container className="mt-3">
            <Form className="mb-3">
                <Row>
                    <Col>
                    <Form.Control type="text" placeholder="search" name="word" onChange={getValue} 
                    value={word}/>
                    </Col>
                    <Col>
                    {/* <Button variant="outline-info" onClick={loadText}>검색</Button>  */}
                    </Col>
                </Row>
            </Form>
           
            <TodoList list={listText} todoDelete={todoDelete}/>
        </Container>
    )
}

export default Home