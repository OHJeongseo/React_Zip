import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import {Card, Form, Container, Button } from "react-bootstrap"

/*상세보기 */
//TodoList.js에서 상세버튼을 클릭할때 활용되며 부모(TodoList.js)에서 받은 번호의 값(데이터)의 정보를 가공(스타일링)하여 반환한다
const BoardView= (props)=>{ //클릭된 제목의 번호를 받아서(TodoItem.js-Link) 출력되도록 설정한다
    const[board, setBoard]= useState({ //부모에게 받은 값(번호)에 대한 데이터의 값을 저장하는 공간을 설정
        num:'',
        title:'',
        content:''
    })
    const findByNum= (num)=>{ //받은 값(번호)를 서버와 연결하여 번호에 대한 데이터를 가져와서 위에 작성한 저장공간 넣는다
        //axios.get("/aip/get/"+num) ${num} 
        axios.get("http://localhost:8878/api/get/"+num) //->크로스 도메인 사용시
        .then((resp)=>{
            console.log(resp.data)
            setBoard(resp.data)
        })
    }
    useEffect(()=>{ //'상세' 버튼을 누르면 가장 실행할 설정을 작성한다
        let num= props.match.params.num //부모에게 받은 값(번호)를 num에 넣는다
        console.log("num: "+num)
        findByNum(num)
    },[])

    const getValue= (e)=>{ //기존 값+ 입력된값으로 변경되도록 설정(수정)
        setBoard({
          ...board,
          [e.target.name]: e.target.value
        })
    }

    const updateBoard= ()=>{ //서버에 입력된 데이터의 값을 보낸다(TodoTable에 데이터 수정)
        axios.put('http://localhost:8878/api/update',{ //json형식(url+서버로 보내는 데이터의값)
            num:board.num,
            title:board.title,
            content:board.content,
        }).then(()=>{ //callback함수, 입력된값이 정상적으로 추가될경우 기존에 있는 값이 저장된 함수를 호출한다(loadText)
            alert("수정완료")
            props.history.push("/list")
        })
    }
    return(
        <Container>
           <Card style={{ width: '30rem' }} className="mt-3" border="info">
            <Card.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>num:</Form.Label>
                        <Form.Control type="text" name="num" onChange={getValue} readOnly="readOnly"
                        value={board.num}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>title:</Form.Label>
                        <Form.Control type="text" name="title" onChange={getValue}
                        value={board.title}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>content:</Form.Label>
                        <Form.Control as="textarea" rows={5} cols={50} onChange={getValue} 
                        name="content" value={board.content}/>
                    </Form.Group>
                    <Button variant="outline-info" onClick={updateBoard}>수정 </Button>
                </Form>
            </Card.Body>
            </Card>
        </Container>
    )
}

export default BoardView