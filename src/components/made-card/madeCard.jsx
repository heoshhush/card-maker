import React, { useRef, useState } from 'react';
import Styles from './madeCard.module.css'
import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";
import "firebase/firestore"

const MadeCard = (props) => {
    const nameRef = useRef();
    const companyRef = useRef();
    const positionRef = useRef();
    const emailRef = useRef();
    const introduceRef = useRef();
    return(
        <div className={Styles.myCard}>
            <div className={Styles.cardImg}></div>
            <img className={Styles.img} src="dog.jpg" alt=""/>
            <div className={Styles.cardInfo} >
                <div ref={nameRef} className={Styles.name}>Name</div>
                <div ref={companyRef} className={Styles.company}>Company</div>
                <div className={Styles.divider}></div>
                <div ref={positionRef} className={Styles.position}>Position</div>
                <div ref={emailRef} className={Styles.email}>Email</div>
                <div ref={introduceRef} className={Styles.introduce}>Introduce Your Self !</div> 
            </div>

        </div>
    )



};

export default MadeCard;