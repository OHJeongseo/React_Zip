import React, {Component} from 'react';
import Welcome from './components/Welcome';
import MyComponets from './components/MyComponets';
import PhoneFrom from './components/PhoneFrom';
import PhoneList from './components/PhoneList';

class App extends Component{
  id= 2
  state={
    information:[
      {
        id: 0,
        name: "홍길동",
        phone: "010-1111-1111"
      },
      {
        id: 1,
        name: "이순신",
        phone: "010-2222-2222"
      }
    ]
  }
    handleCreate= (data)=>{ //state 추가(PhoneFrom.js)-handleSubmit()
      console.log(data)
      const{information}= this.state

      this.setState({ //...기존데이터 작성
        information: information.concat({id:this.id++, ...data}) //내용 informatin에 더한다
      })
    }
    handleRemove= (id)=>{ //삭제(PhoneInfo.js)-handleRemove()
      const{information}= this.state
      this.setState({ //삭제버튼을 누른 id의 값을 확인하고 삭제버튼을 누른 id를 제외한 나머지를 출력
        information: information.filter(infor=> infor.id!== id) 
      })
    }

    render(){
      return(
        <div>
          <PhoneFrom onCreate={this.handleCreate}/>
          <PhoneList data={this.state.information}
                     onRemove={this.handleRemove} />
          <hr/>
          <Welcome name="홍길동" heroName="영웅"/>
          <MyComponets name="myComponent" type="component">리엑트</MyComponets>
        </div>
      )
    }
}

export default App;
