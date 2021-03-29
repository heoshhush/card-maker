import React, { useEffect } from 'react';
import Card from '../card/card';
import Styles from './card-list.module.css'

const CardList = (props) => {

        // console.log(props.cards.keys())        
        console.log(props.cards)

            return(
                <>
                <h1 className={Styles.header}>Input Your Info</h1>
                <ul className={Styles.cardList}>

                <Card 
                    userId={props.userId}
                    setCardInfo = {props.setCardInfo}
                />
                    {/* {
                        props.cards.map(item => 
                            <Card 
                            userId={props.userId}
                            setCardInfo = {props.setCardInfo}
                            />
            )}
                     */}
                    
                </ul>
                </>
            )
    }

export default CardList;