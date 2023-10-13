const WriteModal = (props) => {
    const write = () => {
        let title = document.getElementById("title");
        let content = document.getElementById("content");
        if(title.value !== '' && content.value !== ''){
            if(window.confirm("글을 작성하시겠습니까?")){
                let today = new Date();
                let formattedDate = `${today.getFullYear()}년 ${today.getMonth() + 1}월 ${today.getDate()}일`;
                let writeTitle = [...props.coding]
                let regDate = [...props.regDate]
                let like = [...props.like]
                let writeContent = [...props.content]

                writeTitle.push(title.value);
                writeContent.push(content.value);
                regDate.push(formattedDate);
                like.push(0);

                props.setLike(like);
                props.setRegDate(regDate);
                props.setCoding(writeTitle);
                props.setContent(writeContent);

                title.value = null;
                content.value = null;
                props.setWriteModal(false);
            }
        }else{
            alert("모든 항목을 입력해 주세요")
        }

    }
    return(
        <div>
            <div className ="writeDiv" >
                <span style ={{width: "12%"}}> 글 제목 </span> <input id="title" type="text" />
            </div>
            <div className ="writeDiv" >
               <span style ={{width: "12%"}}> 글 내용 </span><textarea id="content"/>
                <button onClick={() => write()}>Write</button>
            </div>

        </div>
    )
}
export default WriteModal;