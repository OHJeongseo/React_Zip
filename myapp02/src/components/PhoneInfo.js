import React, {Component} from "react";

/*class PhoneInfo extends Component{ //클래스
    handleRemove= ()=>{
        const{info, onRemove}= this.props;
        onRemove(info.id)
    }
    render(){
        const{name,phone,id}= this.props.info;
        const style= {
            border: '1px solid black',
            padding: '8px',
            margin: '8px'
        }
        return(
            <div style={style}>
                <div>id :{id}</div>
                <div>이름 :{name}</div>
                <div>전화번호 :{phone}</div>
                <button onClick={this.handleRemove}>삭제</button>
                <br/>
            </div>
        )
    }
}*/

const PhoneInfo=({info,onRemove})=>{ //함수(화살표)
    const handleRemove= ()=>{
        onRemove(info.id)
    }

    const style= {
        border: '1px solid black',
        padding: '8px',
        margin: '8px'
    }

    return( //기존에 있는 값과 입력받은값을 받아서 값을 설정
        //(+삭제기능 'handleRemove(id)' <-> App.js'handleRemove(id)' 연결하여 실행)하고 전달해준다
        <div style={style}>
            <div>id :{info.id}</div>
            <div>이름 :{info.name}</div>
            <div>전화번호 :{info.phone}</div>
            <button onClick={handleRemove}>삭제</button>
            <br/>
        </div>
    )
}

export default PhoneInfo;