import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import { auth, signInWithGoogle, singInWithGithub } from '../..';
import Styles from './login.module.css'
import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";
import "firebase/firestore"

const Login = (props) => {
  const history = useHistory();


  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      history.push('/home')
      console.log('로그인된 상태입니다. 메인페이지로 이동합니다.')
    } else {
      console.log('로그인이 필요합니다.')
    }
  })

  // 로그인 완료시, 다른 페이지로 이동!!! 기능 삽입해야합니다.



    return(
        <div className={Styles.container}>
          <h1 className={Styles.logo}>CARD MAKER</h1>
        <div className={Styles.logins}>
          <button
          className={Styles.googleLoginBtn} 
          onClick={signInWithGoogle}>
          <i className={`fab fa-google ${Styles.google}`  }></i> 
            Sign in with Google</button>
            <button
          className={Styles.githubLoginBtn} 
          onClick={singInWithGithub}>
          <i className={`fab fa-github ${Styles.github}`  }></i> 
            Sign in with Github</button>
        </div>
        {/* <div className={Styles.logout}>
          <button onClick={() => {
            auth.signOut()}}>logOut</button>
          </div> */}
        </div>
      )
        };

export default Login;