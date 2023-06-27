import React from 'react'
import { useState } from 'react'
import styles from './Element.module.css'

export default function Element(props) {
    let showComponent = props.display
    let activateElement = props.setElement

    // Handle Display

    // Element Data

    const element = props.element
    const name = element.name
    const img = element.url

    // Set Active Element, sends to crafting slots

    function sendElement(){
        activateElement(element.id)
    }

    function removeElement(){
        props.setDisplay(false)
    }


return (
    <div>

        {showComponent &&(

            <div className={styles.wrapper}>
                <div className={`${styles.element}`} onClick={sendElement}>
                    <h1 className={styles.name}> {name} </h1>
                    <img className={styles.img} src={img} alt=''/>
                </div>

                <button className={styles.remove} onClick={removeElement}> X </button>
            </div>

            
        )}

    </div>
)}
