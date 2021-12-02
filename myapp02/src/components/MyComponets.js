import React, {Component} from "react";

/*class MyComponets extends Component{ //클래스사용
    render(){
        const{name,type,children}= this.props //구조분해할당
        return(
            <div>
                {name} / {type} /{children}
            </div>
        )
    }
   //생성자  
   constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <h3>{this.props.name}/ {this.props.type}/ {this.props.children}</h3>  
            </div>
        )
    }
}*/

/*function MyComponets(props){ //함수사용
    return(
        <div>
            name:{props.name}<br/>
            type:{props.type}<br/>
            children:{props.children}<br/>
        </div>
    )
}*/

/*const MyComponets= (props)=>{ //함수사용
    return(
        <div>
            name:{props.name}<br/>
            type:{props.type}<br/>
            children:{props.children}<br/>
        </div>
    )
}*/

const MyComponets=({name,type,children})=>{ //App.js에서 전달받은 속성값을 바로 사용할수있다(구조 분해 할당)
    return(
        <div>
            구조분해할당<br/>
            name:{name}<br/>
            type:{type}<br/>
            children:{children}<br/>
        </div>
    )
}


export default MyComponets;