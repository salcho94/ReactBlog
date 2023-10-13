/*eslint-disable*/

import './App.css';
import {useState} from "react";
import Modal from './Modal.js';
import WriteModal from './WriteModal.js';
function App() {
    const [ like, setLike] = useState([0,0,0])
    const [ coding, setCoding] = useState(['코딩 언어 추천','react 강의 추천','vue 강의 추천'])
    const [ content, setContent] = useState(['코딩언어로는 java ,python 등 여러가지가 존재 합니다 ','코딩애플 강의를 추천합니다.','vue 는 독학을 추천합니다.'])
    const [ regDate, setRegDate] = useState(['2012년 12 월 12일','2013년 11 월 12일','2024년 12 월 12일'])
    const [ modal, setModal] = useState(false);
    const [ writeModal, setWriteModal] = useState(false);
    const [ modalData, setModalDate] = useState('');


    function addLike(count,e){
        let copyLike = [...like];
        copyLike[count]  = copyLike[count] + 1;
        setLike(copyLike);
    }

    function addBtn() {
        setModal(false);
        setWriteModal(true);
    }

    function deleteBlog(index,e){
        if(window.confirm("글을 삭제하시겠습니까?")) {
            let copyCoding = [...coding];
            let copyContent = [...content];
            let copyRegDate = [...regDate];
            let copyLike = [...like];

            copyCoding.splice(index, 1)
            copyContent.splice(index, 1)
            copyRegDate.splice(index, 1)
            copyLike.splice(index, 1)

            setCoding(copyCoding);
            setContent(copyContent);
            setRegDate(copyRegDate);
            setLike(copyLike);
        }
    }
    function showModal(props){

        setWriteModal(false);
        let mData = [...modalData];
        mData = props;
        setModalDate(mData);
        setModal(true);
    }

  return (
    <div className="App">
         <div className="black-nav" style ={{ display : "flex" }}>
           <h4 style ={{ width : "90%" ,textAlign: "left"}} > JS React Blog</h4>
           <button className ="addBtn" onClick={ addBtn }>Write</button>
         </div>
        {
            coding.map((value,index)=>{
                return(
                    <div className="list" key={index} >
                        <h4 onClick={(e) => showModal([value,content[index],regDate[index],index],e)} key={index}> { value } <span className="like" onClick={(e) => addLike(index,e.stopPropagation()) }>🧡</span>{like[index]}</h4>
                        <div style={{display : "flex"}}>
                             <p style={{width : "90%"}}> { regDate[index] } </p><button className="deleteBtn" onClick={(e) => deleteBlog(index,e)}>Delete</button>
                        </div>
                    </div>
                )
            })

        }

        {
            modal ? <Modal modalData = {modalData}  coding ={coding} content ={content} setCoding = {setCoding}  setContent = {setContent}  setModal={setModal} /> : null
        }
        {
            writeModal ? <WriteModal setLike ={setLike} like={like} coding ={coding} content ={content} setCoding = {setCoding}  setContent = {setContent}  regDate = {regDate} setRegDate = {setRegDate} setWriteModal = {setWriteModal}/> : null
        }
    </div>
  );
}



export default App;
