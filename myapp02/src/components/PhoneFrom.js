import React, {Component} from "react";

class PhoneFrom extends Component{
    state={ //값_동적데이터를 사용할때 사용(클래스 컴포넌트에서 사용)
        name:'',
        phone:''
    }
    //화살표함수(바인딩x)
    handleSubmit= (e)=>{ //추가
        e.preventDefault(); //페이지 리로드(무한루프) 방지
        this.props.onCreate(this.state)
        this.setState({ 
            name:'',
            phone:''
        })
    }

    handleChange= (e)=>{ //name-속성값, setState-state값 변경
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    render(){ //이름, 전화번호를 입력받고 입력받은값을 추가한다
        //추가: handleSubmit <-> App.js'handleCreate' 연결하여 실행)
        return(
            <form onSubmit={this.handleSubmit}>
                <input placeholder="이름" name="name" 
                onChange={this.handleChange} value={this.state.name}/>
                <input placeholder="전화번호" name="phone"
                onChange={this.handleChange} value={this.state.phone}/>
                <button type="submit">등록</button>
            </form>
        )
    }
}

export default PhoneFrom;