import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";
import "firebase/firestore"
import '@fortawesome/fontawesome-free/js/all.js';

const firebaseConfig = {
  apiKey: "AIzaSyA7C-6c6so8SOFdSX3zXcKSNPUHJDllAKc",
  authDomain: "my-first-firebase-fe805.firebaseapp.com",
  projectId: "my-first-firebase-fe805",
  storageBucket: "my-first-firebase-fe805.appspot.com",
  messagingSenderId: "840856013107",
  appId: "1:840856013107:web:106549e2872468e9ea1646",
  measurementId: "G-JRKNFLCKMQ"
}

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const googleProvider = new firebase.auth.GoogleAuthProvider();
const githubProvider = new firebase.auth.GithubAuthProvider();
// GoogleAuthProvider 클래스를 authentication 라이브러리에서 사용할 수 있도록 불러오는 코드.
googleProvider.setCustomParameters({prompt: 'select_account'});
githubProvider.setCustomParameters({prompt: 'select_account'});
// signIn이랑 authentication을 위해서 GoogleAuthProvider를 사용할 때마다 구글 팝업을 항상 띄우기를 원한다는 의미이다.
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);
export const singInWithGithub = () => auth.signInWithPopup(githubProvider);
// signInWithPopup 메소드는 여러 파라미터를 받을 수 있다. 트위터, 페이스북, 깃허브 등으로도 로그인이 필요할 수도 있으므로.
// 여기에서는 google로 signIn할 것이기 때문에, 파라미터로 위에서 정의한 provider를 넣어준다.
export default firebase;
// 혹시 전체 라이브러리가 필요할지도 모르기 때문에 firebase도 export 해준다.



ReactDOM.render(
    
    <App
    signInWithGoogle={signInWithGoogle}
    singInWithGithub={singInWithGithub}
    auth ={auth}
    />
    
    ,
  document.getElementById('root')
);