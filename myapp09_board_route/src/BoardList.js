import 'bootstrap/dist/css/bootstrap.min.css'; //부트스트랩 import
import { Col, Row, Container, Button, Form } from 'react-bootstrap'; //리엑트 부트스트랩
import BoardItem from "./BoardItem";
import { useEffect, useState } from 'react';
import axios from 'axios';

/*App.js(라우터에서) Home.js에서 값을 받아서 받은 값(데이터)를 보여준다 */
//입력된 값을 모두가져오는데 데이터를 가공하여(TodoItem.js가 실질적으로) 반환한다 
const BoardList= ()=>{ //{속성값이름}
    const [listcontent, setListContent]= useState([])
    const [word, setWord]= useState('')

    useEffect(()=>{ 
      loadContent();
    },[word]) //[]-> 1번만 호출, [word]<- 검색한 결과를 보여주도록 설정
  
    const loadContent= ()=>{ //서버의 값을 가져온다(board테이블의 값 가져온다)
      axios.get('http://localhost:8878/api/get?title='+word) //json형식(url)
        .then((resp)=>{
          console.log(resp.data)
          setListContent(resp.data) 
        })
    }
  
    // 삭제버튼 클릭(BoardItem.js-삭제버튼)시 삭제할 번호를 받아서(반환된) 삭제실행하고 삭제된 번호를 제외한 값을 화면에 출력되도록 설정한다 
    const boardDelete= (num)=>{
      axios.delete("http://localhost:8878/api/delete/"+num) //서버에서 삭제기능 실행
      .then(()=>{
        alert("삭제성공") 
        setListContent(listcontent.filter(board=>board.num!==num)) //화면에서 삭제된 번호와 다른번호의 값만 보이도록 설정한다
      })
    }

    const getValue= (e)=>{
      setWord(e.target.value)
    }
    return(
       //Warning: Each child in a list should have a unique "key" prop-> <Col key={}/>
        <Container>
           <Form className="mt-3">
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

            <Row>
            {
                listcontent.map((board,index)=>( 
                    <Col md={4} key={index}>
                    <BoardItem key={board.num} 
                    board={board} boardDelete={boardDelete}/>
                    </Col>
                )) 
            }
            </Row>
        </Container>
    )
}

export default BoardList;