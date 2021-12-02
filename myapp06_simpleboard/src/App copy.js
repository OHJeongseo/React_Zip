import {useState, useEffect} from 'react'
import axios from 'axios'
import './App.css';

function App() { //Spring simpleboard(서버)와 연결하여 결과를 설정한다
  const [listcontent, setListContent]= useState([])
  const [formContent, setFormContent]= useState({
    title:'',
    content:''
  });
  const getValue= (e)=>{ //입력시 기존에 값에 입력된값을 넣는다
    setFormContent({
      ...formContent,
      [e.target.name]: e.target.value
    })
  }
  useEffect(()=>{ 
    loadContent();
  },[]) //[]-> 1번만 호출
  const loadContent= ()=>{ //서버의 값을 가져온다(board테이블의 값 가져온다)
    axios.get('/api/get') //json형식(url)
      .then((resp)=>{
        console.log(resp.data)
        setListContent(resp.data) 
      })
  }
  const submitBoard= ()=>{ //제목,내용-> api/insert==> board테이블 추가
    axios.post('/api/insert',{ //json형식(url+서버로 보내는 데이터의값)
      title: formContent.title,
      content: formContent.content
    }).then(()=>{ //결과
      alert("등록완료")
      loadContent()
    })
  }
  return (
    <div>
      <h1> Simple Board</h1>
      <input type="text" name="title" placeholder="제목"
      onChange={getValue}/><br/>
      <textarea name="content" cols='50' rows='5' 
      onChange={getValue}/><br/>
      <button onClick={submitBoard}>입력</button>
      <hr/>
      {
        listcontent.map((board,index)=>(
          <p key={index} >
            번호: {board.num} <br/>
            제목: {board.title} <br/>
            내용: {board.content}<br/>
          </p>
        ))
      }
    </div>
  );
}

export default App;
