import React from 'react';


const Food= ({id,name,rating,image})=>{
    return(
        <div>
            번호: {id} <br/>
            이름: {name} <br/>
            평점: {rating} <br/>
            이미지:<br/><img src={image} alt={name} height="200" weigh="200"/> <hr/>
        </div>
    )
}
/*const Food= ({dish})=>{
    return(
        <div>
            번호: {dish.id} <br/>
            이름: {dish.name} <br/>
            평점: {dish.rating} <br/>
            이미지:<br/><img src={dish.image} alt={dish.name} height="200" weigh="200"/> <hr/>
        </div>
    )
}*/

export default Food;