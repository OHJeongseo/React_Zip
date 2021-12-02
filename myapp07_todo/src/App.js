import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import TodoView from "./TodoView";
import {useState, useEffect} from 'react'
import axios from "axios";
import {BrowserRouter,Switch,Route} from 'react-router-dom'


//서버 연결설정(package.json-> "proxy":"http://localhost:8875/")
function App() {
  //입력된 데이터의 전체를 담는다
  const [listText, setListText]= useState([]) //입력된 값을 저장하는 동적데이터 설정

  //리엑트가 실행되면 가장먼저 함수를 실행한다(loadText를 호출하여 서버의 값을 가져온다)
  useEffect(()=>{  //(componentDidMount+DidUpdate)
    loadText();
  },[]) //[]-> 1번만 호출되도록 설정

  /*전체보기 */
  //스프링에서 설정한 서버의 값을 받아서 값을 저장한다
  const loadText= ()=>{ //서버의 값(TodoTable의 데이터)를 가져와서 저장한다
    axios.get('/todo/list') //json형식(url)
      .then((resp)=>{ //json-callback
        console.log(resp.data)
        setListText(resp.data) //서버에서 받은 값을 담는다
      })
  }
  const todoDelete= (num)=>{ // 삭제버튼 클릭(TodoList.js-삭제버튼)시 삭제할 번호를 받아서(반환된) 삭제실행하고 삭제된 번호를 제외한 값을 화면에 출력되도록 설정한다 
    axios.delete("todo/delete/"+num) //서버에서 삭제기능 실행
    .then(()=>{
      alert("삭제성공") 
      setListText(listText.filter(Todo=>Todo.num!==num)) //화면에서 삭제된 번호와 다른번호의 값만 보이도록 설정한다
    })
  }
  return (
    <BrowserRouter>
      <div>
        <h2>Todo </h2>
        {/* 입력된 값을 자식컴포넌트에 전달하여 가공된값을 받아서 출력한다 */}
        <TodoForm loadText={loadText}/>
        <TodoList list={listText} todoDelete={todoDelete}/>
      </div>
      <Switch>
        <Route path="/view/:num" component={TodoView} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
