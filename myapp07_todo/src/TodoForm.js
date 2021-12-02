import {useState} from 'react'
import axios from 'axios'
import { Form ,Button} from 'react-bootstrap';

const TodoForm= ({loadText})=>{//{속성값이름}
    const [formtext, setFormText]= useState({ //값 저장,변경할수있도록 설정
        subject:'', //초기값 설정
        name:'',
        summary:''
    });
    
    const getValue= (e)=>{ //기존 값+ 입력된값으로 변경되도록 설정
        setFormText({
          ...formtext,
          [e.target.name]: e.target.value
        })
    }
    /*추가 */ 
    //axios(import), fetch(js내장) 
    const submitTodo= ()=>{ //서버에 입력된 데이터의 값을 보낸다(TodoTable에 데이터 추가)
        /*axios.post('/todo/insert',{ //json형식(url+서버로 보내는 데이터의값)
            subject:formtext.subject,
            name:formtext.name,
            summary:formtext.summary
        }).then(()=>{ //callback함수, 입력된값이 정상적으로 추가될경우 기존에 있는 값이 저장된 함수를 호출한다(loadText)
            alert("등록완료")
            loadText()
        })*/

        fetch('/todo/insert',{ //json형식
            method:'post', 
            headers:{ //fetch 타입설정->미작성시 에러발생
                'Content-type':'application/json'
            },
            body:JSON.stringify({
                subject:formtext.subject,
                name:formtext.name,
                summary:formtext.summary
            })
        }).then((resp)=>{ //서버정상처리 완료-> 1)등록완료(창)+ 2)입력된값 화면출력+ 3)입력폼 데이터 비우기(value값 설정해야 정상적으로 처리된다)
            alert("등록완료")
            loadText()
            setFormText({  
                subject:'', 
                name:'',
                summary:''
            })
        })

    }
    return( 
        //입력폼으로 서버로 보낼데이터를 작성한다(num,regdate->서버에서 자동설정하므로 작성하지않도록 제외)
        //+react-bootstrap을 사용하여 스타일을 설정추가
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>subject:</Form.Label>
                <Form.Control type="text" placeholder="Enter subject" name="subject" onChange={getValue}
                value={formtext.subject}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>name:</Form.Label>
                <Form.Control type="text" placeholder="name" name="name" onChange={getValue}
                value={formtext.name}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>summary:</Form.Label>
                <Form.Control as="textarea" rows={5} cols={50} onChange={getValue} 
                name="summary" placeholder="summary" value={formtext.summary}/>
            </Form.Group>
            <Button variant="primary" onClick={submitTodo}>입력 </Button>
        </Form>
        /*
        <div>
            <input type="text" name="subject" placeholder="제목"
            onChange={getValue}/><br/>
            <input type="text" name="name" placeholder="이름"
            onChange={getValue}/><br/>
            <textarea name="summary" cols='50' rows='5' 
            onChange={getValue}/><br/>
            <button onClick={submitTodo}>입력</button>
        </div>*/
    )
}

export default TodoForm;
