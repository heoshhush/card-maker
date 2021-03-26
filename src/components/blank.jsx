import React from 'react';
import { useHistory } from 'react-router';
import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";
import "firebase/firestore"

const Blank = (props) => {
    const history = useHistory();

 firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        history.push('/home')
      console.log(`${user.displayName} / 이미 로그인 되어있습니다. 메인페이지로 이동합니다`)
    } else {
      history.push('/login')
    }
  })

        return(
            <h1>Loading...</h1>
        )
    };

export default Blank;