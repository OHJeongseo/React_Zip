import React from "react";

const mydata={
    "myfood": [ //배열(객체)
     {
        name:"햄버거",
        price:"오천원",
        buy:"배달"
     },
     {
        name:"도시락",
        price:"삼천원",
        buy:"포장"
     },
     {
        name:"커피",
        price:"사천원",
        buy:"매장"
     }
    ]
}

const myphone={
    "phone":[
        {
            name:"아이폰",
            ram:"6gb",
            touch:"no",
            face:"yes"
        },
        {
            name:"갤럭시 노트",
            ram:"8gb",
            touch:"yes",
            face:"yes"
        },
        {
            name:"갤럭시 s10",
            ram:"10gb",
            touch:"yes",
            face:"yes"
        },
        {
            name:"아이폰 10",
            ram:"8gb",
            touch:"yes",
            face:"yes"
        }
    ]
}

function Food(){
    return(
        <div>
            <h1> Food 컴포넌트(음식)</h1>
            {
                //jax
                mydata.myfood.map((food,i)=>{ //반복사용
                    console.log(food.name);
                    return(//키값 설정
                        <div key={i}> 
                            이름: {food.name}<br/>
                            가격: {food.price}<br/>
                            방법: {food.buy}<hr/>
                        </div>
                    )
                })
            }

            <h1> Food 컴포넌트(폰)</h1>
            {
                myphone.phone.map((phone,i)=>{
                    console.log(phone.name);
                    return(
                        <div key={i}>
                            모델명: {phone.name}<br/>
                            메모리: {phone.ram}<br/>
                            터치지원: {phone.touch}<br/>
                            얼굴인식: {phone.face}<hr/>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Food;