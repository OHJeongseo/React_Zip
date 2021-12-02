import {useState} from 'react'
import { Form ,Button, Container, Card} from 'react-bootstrap';
// "proxy": "http://localhost:8875/" 사용시-> 크로스도메인 사용필요없음
const BoardForm= (props)=>{//{속성값이름}
    const [formtext, setFormText]= useState({ //값 저장,변경할수있도록 설정
        title:'',
        content:''
    });
    
    const getValue= (e)=>{ //기존 값+ 입력된값으로 변경되도록 설정
        setFormText({
          ...formtext,
          [e.target.name]: e.target.value
        })
    }
    /*추가 */ 
    const submitTodo= ()=>{ //서버에 입력된 데이터의 값을 보낸다(TodoTable에 데이터 추가)
        fetch('http://localhost:8878/api/insert',{ //json형식 -> 크로스도메인 사용
            method:'post', 
            headers:{ //fetch 타입설정->미작성시 에러발생
                'Content-type':'application/json'
            },
            body:JSON.stringify({
                title: formtext.title,
                content: formtext.content
            })
        }).then((resp)=>{ //서버정상처리 완료-> 1)등록완료(창)+ 2)입력된값 화면출력+ 3)입력폼 데이터 비우기(value값 설정해야 정상적으로 처리된다)
            alert("등록완료")
            props.history.push("/list")//등록완료후 리다이렉트(history.push)기능을 사용하여 Home.js로 이동되도록 설정
        })

    }
    return( 
        //입력폼으로 서버로 보낼데이터를 작성한다(num,regdate->서버에서 자동설정하므로 작성하지않도록 제외)
        //+react-bootstrap을 사용하여 스타일을 설정추가
        <Container>
            <Form className="mt-3">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>title:</Form.Label>
                    <Form.Control type="text" placeholder="Enter title" name="title" 
                    onChange={getValue}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>content:</Form.Label>
                    <Form.Control as="textarea" rows={5} cols={50} onChange={getValue} 
                    name="content" placeholder="content"/>
                </Form.Group>
                <Button variant="outline-info" onClick={submitTodo}>입력 </Button>
            </Form>
        </Container>
    )
}

export default BoardForm;
