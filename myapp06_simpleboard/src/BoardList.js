import BoardItem from "./BoardItem"

const BoardList= ({list})=>{ //입력된 값을 모두가져오는데 데이터를 가공하여(BoardItem.js가 실질적으로) 반환한다 
    return(
        <div>
            {
                list.map((board,index)=>(
                    <BoardItem key={board.num}
                    board={board}/>
                ))
            }
        </div>
    )
}

export default BoardList