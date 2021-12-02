import React,{Component} from "react";

class Movie extends Component{
    constructor(props){  
        super(props)
    }

    render(){
        return(
            <div>
                <h3>Movie 컴포넌트</h3>
                <div>{this.props.title}</div>
            </div>
        )
    }
}

export default Movie;