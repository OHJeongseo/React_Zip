const BoardItem= ({board})=>{
    return(
        <div>
            <p>
             번호: {board.num} <br/>
             제목: {board.title} <br/>
             내용: {board.content}<br/>
            </p>
        </div>
    )
}

export default BoardItem