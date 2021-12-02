import React, { useState } from "react";

const InputSample= ()=>{
    //const[name, setName]= useState('')
    //const[nickname, setNickname]= useState('')
    const[inputs, setInputs]= useState({
        name: '',
        nickname: '',
        phone: ''
    })
    const{name, nickname, phone}= inputs
    /*const nameChange= (e)=>{
        setName(e.target.value)
    }
    const nicknameChange= (e)=>{
        setNickname(e.target.value)
    }*/
    const onChange= (e)=>{
        setInputs({
            ...inputs,
            [e.target.name]:e.target.value
        })
    }
    const onReset= ()=>{
        //setName('')
        //setNickname('')
        setInputs({
            name: '',
            nickname: '',
            phone:''
        })
    }
    return(
        <div>
            <input name="name" placeholder="이름" onChange={onChange} value={name}/>
            <input name="nickname" placeholder="닉네임" onChange={onChange} value={nickname} />
            <input name="phone" placeholder="전화번호" onChange={onChange} value={phone}/>
            <button onClick={onReset}>초기화</button>
            <div>
                <b>소개</b>
                {name} / {nickname} / {phone}
            </div>
        </div>
    )
}
export default InputSample;