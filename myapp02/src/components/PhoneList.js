import React, {Component} from "react";
import PhoneInfo from "./PhoneInfo";

/*class PhoneList extends Component{ //PhoneInfo.js, 클래스
    render(){
        const {data,onRemove}= this.props
        return(
            <div>
                {   //map 사용시 return , return x-> ()사용
                    data.map((info)=>{
                        return (
                        <PhoneInfo key= {info.id} info= {info} 
                        onRemove= {onRemove}/>
                        )
                    })
                }
              
            </div>
        )
    }
}*/

const PhoneList=({data,onRemove})=>{ //함수(화살표), 구조분해할당-props사용x
    const list= data.map((info)=>( //return x-> ()
        <PhoneInfo key={info.id} info={info} onRemove={onRemove} />
    ))
    
    return( //기존에 있는값과 입력된값(PhoneFrom.js)을 PhoneInfo.js에 보내고 가공된 값을 반복, 전달한다
        <div>
            {   //map 사용시 return , return x-> ()사용
                data.map((info)=>{
                    return (
                    <PhoneInfo key= {info.id} info= {info} 
                    onRemove= {onRemove}/>
                    )
                })
            }
            <hr/>
            {list}
        </div>
    )
}

export default PhoneList;