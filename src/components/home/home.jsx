import React from 'react';
import { useHistory } from 'react-router';
import Styles from './home.module.css'
import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";
import "firebase/firestore"
import { auth } from '../..';

const Home = (props) => {

    const history = useHistory();

    firebase.auth().onAuthStateChanged(function(user) {
        if (!user) {
            history.push('/login')
        }
      })

        return(
            <>
            <h1>this is home, {props.user}</h1>
            <button onClick={() => {
                auth.signOut()}}>logOut</button>
            </>
        )
    };

export default Home;