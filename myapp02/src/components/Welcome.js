import React, {Component} from "react";

class Welcome extends Component{
    render(){
        const{name,heroName}=this.props
        return(
            <div>
                구조분해할당(welcome): {name}/{heroName}
            </div>
        )
    }

   /* 
   constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <h3>Welcome 컴포넌트: {this.props.name}/{this.props.heroName}</h3>
            </div>
        )
    }*/
}

export default Welcome;