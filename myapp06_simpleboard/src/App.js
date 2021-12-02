import {useState, useEffect} from 'react'
import axios from 'axios'
import BoardForm from './BoardForm';
import BoardList from './BoardList';

function App() { //Spring simpleboard(서버)와 연결하여 결과를 설정한다
  const [listcontent, setListContent]= useState([])

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
  return (
    <div>
      <h1> Simple Board</h1>
      <BoardForm loadContent={loadContent}/>
      <BoardList list={listcontent}/>
    </div>
  );
}

export default App;
