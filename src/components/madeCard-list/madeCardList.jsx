import React from 'react';
import MadeCard from '../made-card/madeCard';
import Styles from './madeCardList.module.css'

const MadeCardList = (props) => {
            return(
                <div className={Styles.list}>
                <h1 className={Styles.header}>Card Preview</h1>
                    <MadeCard 
                    userId = {props.userId}
                    />
                </div>
            )
};

export default MadeCardList;