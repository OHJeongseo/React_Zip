
const TodoView= ({match})=>{ //클릭된 제목의 번호를 받아서(TodoItem.js-Link) 출력되도록 설정한다
    return(
        <h2>About: {match.params.num}</h2>
    )
}

export default TodoView