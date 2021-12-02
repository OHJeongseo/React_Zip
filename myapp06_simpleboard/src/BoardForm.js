import axios from "axios";
import { useState } from "react";

const BoardForm= ({loadContent})=>{ //Spring simpleboard(서버)와 연결하여 데이터값을 추가한다
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

    const submitBoard= ()=>{ //서버에 데이터값을 보내고(api/insert==> board테이블 추가) 결과과 정상적으로 작동되면 기존값을 가져온다
        axios.post('/api/insert',{ //json형식(url+서버로 보내는 데이터의값)
          title: formContent.title,
          content: formContent.content
        }).then(()=>{ //결과
          alert("등록완료")
          loadContent()
        })
    }

    return(
        <div>
        <input type="text" name="title" placeholder="제목"
        onChange={getValue}/><br/>
        <textarea name="content" cols='50' rows='5' 
        onChange={getValue}/><br/>
        <button onClick={submitBoard}>입력</button>
        </div>
    )
}

export default BoardForm