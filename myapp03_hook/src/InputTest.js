import React, { useState } from "react";

const InpntTest= ()=>{
    const [text, setText]= useState('');
    const textChange= (e)=>{ //input에 입력된 값을 보여주도록 설정
        setText(e.target.value)
    }
    const onReset= ()=>{
        setText('')
    }
    return(
        <div>
            <input value={text} onChange={textChange} />
            <button onClick={onReset}>초기화</button>
            <div>
                <h3>내용: {text}</h3>
            </div>
        </div>
    )
}

export default InpntTest;