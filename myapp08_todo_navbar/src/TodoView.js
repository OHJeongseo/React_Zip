import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import {Card, Form, Container, Button } from "react-bootstrap"

/*상세보기 */
//TodoList.js에서 상세버튼을 클릭할때 활용되며 부모(TodoList.js)에서 받은 번호의 값(데이터)의 정보를 가공(스타일링)하여 반환한다
const TodoView= (props)=>{ //클릭된 제목의 번호를 받아서(TodoItem.js-Link) 출력되도록 설정한다
    const[todo, setTodo]= useState({ //부모에게 받은 값(번호)에 대한 데이터의 값을 저장하는 공간을 설정
        num:'',
        subject:'', 
        name:'',
        summary:'',
        regdate:''
    })
    const findByNum= (num)=>{ //받은 값(번호)를 서버와 연결하여 번호에 대한 데이터를 가져와서 위에 작성한 저장공간 넣는다
        //axios.get("/todo/get/"+num) 
        axios.get("http://localhost:8875/todo/get/"+num) //->크로스 도메인 사용시
        .then((resp)=>{
            console.log(resp.data)
            setTodo(resp.data)
        })
    }
    useEffect(()=>{ //'상세' 버튼을 누르면 가장 실행할 설정을 작성한다
        let num= props.match.params.num //부모에게 받은 값(번호)를 num에 넣는다
        console.log("num: "+num)
        findByNum(num)
    },[])

    const getValue= (e)=>{ //기존 값+ 입력된값으로 변경되도록 설정(수정)
        setTodo({
          ...todo,
          [e.target.name]: e.target.value
        })
    }

    const updateTodo= ()=>{ //서버에 입력된 데이터의 값을 보낸다(TodoTable에 데이터 수정)
        axios.put('http://localhost:8875/todo/update',{ //json형식(url+서버로 보내는 데이터의값)
            num:todo.num,
            subject:todo.subject,
            name:todo.name,
            summary:todo.summary
        }).then(()=>{ //callback함수, 입력된값이 정상적으로 추가될경우 기존에 있는 값이 저장된 함수를 호출한다(loadText)
            alert("수정완료")
            props.history.push("/")
        })
    }
    return(
        <Container>
           <Card style={{ width: '30rem' }}>
            <Card.Body>
            <Form>
                {/* <input type="hidden" name="num" value={todo.num}/> */}
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>num:</Form.Label>
                    <Form.Control type="text" name="num" onChange={getValue} readOnly="readOnly"
                    value={todo.num}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>subject:</Form.Label>
                    <Form.Control type="text" placeholder="Enter subject" name="subject" onChange={getValue}
                    value={todo.subject}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>name:</Form.Label>
                    <Form.Control type="text" placeholder="name" name="name" onChange={getValue}
                    value={todo.name}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>summary:</Form.Label>
                    <Form.Control as="textarea" rows={5} cols={50} onChange={getValue} 
                    name="summary" placeholder="summary" value={todo.summary}/>
                </Form.Group>
                <Button variant="primary" onClick={updateTodo}>수정 </Button>
            </Form>
            </Card.Body>
            </Card>
        </Container>
    )
}

export default TodoView