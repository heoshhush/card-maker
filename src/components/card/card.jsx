import React, { useRef } from 'react';
import Styles from './card.module.css'
import firebase from "firebase/app";
import "firebase/database";

const Card = (props) => {

        const nameRef = useRef();
        const companyRef = useRef();
        const positionRef = useRef();
        const emailRef = useRef();
        const introduceRef = useRef();


    const onType = () => {
        props.setCardInfo(
            nameRef.current.value,
            companyRef.current.value,
            positionRef.current.value,
            emailRef.current.value,
            introduceRef.current.value
            )
    }


    return(
        <div className={Styles.cardContainer}>

            <div className={Styles.firstLine}>
                <input ref={nameRef} className={Styles.input} type="text" placeholder="Name"/>
                <input ref={companyRef} className={Styles.input} type="text" placeholder="Company"/>
                <select className={Styles.input} name="color" id="">
                    <option>White</option>
                    <option>Black</option>
                    <option>Mixed</option>
                </select>
            </div>
            <div className={Styles.secondLine}>
                <input ref={positionRef} type="text" className={Styles.input} placeholder="Position"/>
                <input ref={emailRef} type="text" className={Styles.input} placeholder="Email"/>
            </div>
            <div className={Styles.thirdLine}>
                <textarea ref={introduceRef} className={Styles.input} placeholder="introduce yourself"  cols="30" rows="10">

                </textarea>
            </div>
            <div className={Styles.fourthLine}>
                <button className={Styles.pictureBtn} >Picture</button>
                <button className={Styles.addDeleteBtn} onClick={onType}>Add</button>
            </div>
        </div>
    )
}
export default Card;

/* 해야할일:
1. 사용자가 input 칸에 적는대로, 실시간 firebase database 업데이트(onKeyDown(?)이벤트 및 database.set 활용)
2. 오른쪽 칸에 명함 이미지 제작
3. 데이터베이스에 저장된 값을 실시간으로 오른쪽 명함에 표시( .val()이나 snapshot 등으로 불러오면 되지 않을까?)
4. cloudinary 사용법 익혀서 사진 업로드도 가능하게 하기
*/