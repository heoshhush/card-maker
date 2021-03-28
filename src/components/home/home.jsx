import React from 'react';
import { useHistory } from 'react-router';
import Styles from './home.module.css'
import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";
import "firebase/firestore"
import { auth } from '../..';
import CardList from '../card-list/card-list';

const Home = (props) => {

    const history = useHistory();

    firebase.auth().onAuthStateChanged(function(user) {
        if (!user) {
            history.push('/login')
        }
      })

        return(
            <div className={Styles.container}>
                <div className={Styles.logo}>
                    <h1>Business Card Maker</h1>
                </div>
                <div className={Styles.logout}>
                    <button
                    className={Styles.logoutBtn}
                    onClick={() => {
                        auth.signOut()}}>Log Out</button>
                </div>
                <div className={Styles.contents}>
                    <div className={Styles.input}>
                     <CardList/>
                    </div>

                    <div className={Styles.output}></div>
                </div>
            </div>
        )
    };

export default Home;