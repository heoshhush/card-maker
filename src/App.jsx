import { auth, signInWithGoogle, singInWithGithub } from '.';
import './App.css';
import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom'
import Login from './components/login/login.jsx';
import Home from './components/home/home.jsx';
import Blank from './components/blank';
import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";
import "firebase/firestore"
import { useCallback, useEffect, useMemo, useState } from 'react';

function App(props){
  const [userId, setUserId] = useState(null)
  const [card, setCard] = useState([])
  const myData = firebase.database().ref('/' + userId);
      

  const loadUid = () => {firebase.auth().onAuthStateChanged(function(user){
        if(user){
              setUserId(user.uid);
              console.log('uid change')
        }
      })
    }
  useEffect(loadUid,[])


  const setCardInfo = (name, company, position, email, introduce) => {
    myData.push({
      name: name,
      company: company,
      position: position,
      email: email,
      introduce: introduce,
    })  
    myData.on('value', snapshot => {
      setCard(snapshot.val())
      console.log(snapshot.val()) 
    }) 
}

// userId와 card라는 스테이트를 set하려고하는데 무한반복에 걸림..

  const loadItem = () => {
    // myData.on('value', snapshot => {
    //   setCard(snapshot.val())
    // })
    myData.on('value', (snapshot) => {
      setCard(snapshot.val());
    })
  }


  // 19:32)
  // '적절히 useEffect를 넣어주면 되겠네요' 라는 말 듣고, useEffect의 두번째 인자를
  // userId로 넣었더니 작동을한다.
  // 그런데 세번이나 렌더링해야하는듯?

  // 19:35)
  // 이제 해줄일은, 객체 모음을 배열로 바꿔서 MAP함수 돌릴려고 함.
  
  // 19:42)
  // 근데, 그 전에, 19:32)에 따라, cards값이 처음에는 [], 그다음에는 null, 그다음에는 제대로된 값
  // 으로 전달되다보니, 하위 컴포넌트의 함수들이 에러를 일으키게됨. 
  // 그래서, 처음부터 제대로된 값으로 전달시켜줄 방법이 필요하다.ㅔ

  useEffect(() => {
    loadItem()
  }, [userId])


    return (
      <Router>
        <Switch>
          <Route path= '/login' exact>
            <Login 
            />
          </Route> 
          <Route path= '/' exact>
            <Blank 
            />
          </Route>
          <Route path= '/home' exact>
            <Home
              
              userId = {userId}
              setCardInfo = {setCardInfo}
              cards = {card}
            />
          </Route>
        </Switch>
      </Router>

    )
}

export default App;
