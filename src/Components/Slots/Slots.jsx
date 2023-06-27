import React from 'react'
import styles from './Slots.module.css'
import question from '../Images/question.png'

export default function Slots(props) {

const setSlot1 = props.setSlot1
const setSlot2 = props.setSlot2

function clearSlot1(){
    setSlot1([null, question])
}

function clearSlot2(){
    setSlot2([null, question])
}

return (

    <div className={styles.slots}>

        <div className={styles.slot}>
            <p className={styles.name}> Element I: {props.slot1[0]} </p>
            <img className={styles.img} src={props.slot1[1]} alt=''/>
            <button onClick={clearSlot1} className={styles.btn}> X </button>
        </div>

        <div className={styles.slot}>
            <p className={styles.name}> Element II: {props.slot2[0]} </p>
            <img className={styles.img} src={props.slot2[1]} alt=''/>
            <button onClick={clearSlot2} className={styles.btn}> X </button>
        </div>

    </div>

)}
