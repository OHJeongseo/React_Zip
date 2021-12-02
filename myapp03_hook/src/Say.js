import React, { useState } from "react";

const Say= ()=>{
    const [message, setMessage]= useState('');
    const [color, setColor]= useState('black')
    const onClickEnter= ()=>{
        setMessage(msg=> '반갑습니다') //setMessage('반갑습니다')
    }
    const onClickLeave= ()=>{
        setMessage(msg=> '안녕히가세요')
    }
    
    const onChangeColor= ()=>{
        //setColor('pink')
        ChangeColor('pink')
    }
    const ChangeColor= (color)=>{
        setColor(color)
    }

    //<button onClick={ChangeColor('red')}>빨간색</button> 무한루프 발생(바로 함수를 호출할 경우 발생된다)
    return(
        <div>
            <button onClick={onClickEnter}>입장</button>
            <button onClick={onClickLeave}>퇴장</button>
            <h1 style={{color}}>{message}</h1>
            <br/> 
            <button onClick={()=> ChangeColor('red')}>빨간색</button>
            <button onClick={()=> ChangeColor('green')}>초록색</button>
            <button onClick={()=> ChangeColor('blue')}>파란색</button>
            <button style={{color:'pink'}} onClick={onChangeColor}>분홍색</button>
        </div>
    )
}

export default Say;