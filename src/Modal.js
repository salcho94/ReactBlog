import './modal.css';

import {useState} from "react";


const updateBefore = (props) => {
    console.log(props.modalData[3])
    return (
        <div className="text_area">
            <p><strong>{props.modalData[0]}</strong></p>
            <div className="view">
                {props.modalData[1]}
            </div>
            <p>
                작성일 : {props.modalData[2]}
            </p>
        </div>
    );
}


const updateAfter = (props) => {
    return (
        <div className="text_area">
            <p><input type="text" id="updateTitle" defaultValue={props.modalData[0]}/></p>
            <div className="view">
                <textarea  className="fake_textarea" id="updateContent" defaultValue={props.modalData[1]} />
            </div>
            <p>
                작성일 : {props.modalData[2]}
            </p>
        </div>
    );
}

const Modal = (props) => {
    const [ modeBtn, setModeBtn] = useState(false)
    function update(){
        setModeBtn(true);
    }
    function updateSubmit(){
        if(window.confirm("글 수정 하시겠습니까?")){
            let title = document.getElementById("updateTitle");
            let content = document.getElementById("updateContent");
            let copyTitle = [...props.coding];
            let copyContent = [...props.content]

            copyTitle[props.modalData[3]] = title.value ;
            copyContent[props.modalData[3]] = content.value ;

            props.setCoding(copyTitle);
            props.setContent(copyContent);
            props.setModal(false);
        }
    }
    return(
        <>
            <div className="content"></div>
            <div className="layer_popup">
                <div className="layer">
                    {
                        modeBtn ?  updateAfter(props) : updateBefore(props)
                    }
                    <div className="btn_area">
                        {
                            modeBtn ?<button className="btn_Dribbble2"  onClick={updateSubmit}>수정하기</button>: <button className="btn_Dribbble" onClick={update}>글수정</button>
                        }
                    </div>
                    <button className="btn_close" onClick={(e) => props.setModal(false)}>CLOSE</button>
                </div>
                <div className="dimmed"></div>
            </div>
        </>

    )
}
export default Modal;