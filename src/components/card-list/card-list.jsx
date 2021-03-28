import React from 'react';
import Card from '../card/card';
import Styles from './card-list.module.css'

const CardList = (props) => {
            return(
                <ul className={Styles.cardList}>
                    <Card />
                </ul>
            )
    };

export default CardList;