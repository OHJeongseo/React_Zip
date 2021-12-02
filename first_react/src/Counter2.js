import React, {Component} from "react";

class Counter2 extends Component{
    state= {
        myAge: 0
    }

    //화살표 함수
    plus= ()=>{
        this.setState((stateValue)=>({myAge : stateValue.myAge+1}))
    }
    minus= ()=>{
        this.setState(stateValue=>({myAge : stateValue.myAge-1}))
    }
    componentDidMount(){ //초기
        console.log("in componentDidMount")
    }
    componentDidUpdate(){ //변경시
        console.log("in componentDidUpdate")
    }
    componentWillUnmount(){ //컴포넌트 종료
        console.log("in componentWillUnmount")
    }
    render(){
        return(
            <div>
                <span>나이: {this.state.myAge} </span>
                <button onClick={this.plus}>증가</button>
                <button onClick={this.minus}>감소</button>
            </div>
        )
    }
}

export default Counter2;