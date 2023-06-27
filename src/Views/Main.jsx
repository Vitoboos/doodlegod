import React from 'react'
import styles from './Main.module.css'

import { useState, useEffect } from 'react'

import ElementContainer from '../Components/ElementContainer/ElementContainer'
import Slots from '../Components/Slots/Slots'
import Results from '../Components/Results/Results'

import { elementList } from '../Components/Elements/ElementList'
import SearchBar from '../Components/SearchBar/SearchBar'

import question from '../Components/Images/question.png'

export default function Main() {

    const [slot1, setSlot1] = useState([null, question])
    const [slot2, setSlot2] = useState([null, question])

    const [activeElement, setElement] = useState(null)
    const [newElement, setNew] = useState(null)

    useEffect(() => {

        if(activeElement === null){
            return
        }

        else{

            if(slot1.includes(null)){
                setSlot1([elementList[activeElement].name, elementList[activeElement].url])
            }
    
            else if(slot2.includes(null)){
                setSlot2([elementList[activeElement].name, elementList[activeElement].url])
            }

            setElement(null)
        }

    }, [activeElement, slot1, slot2])


return (

    <div>

        <ElementContainer activeElement={activeElement} setElement={setElement} new={newElement} setNew={setNew}/>

        <div className={styles.slotGrid}>
            <Slots slot1={slot1} slot2={slot2} setSlot1={setSlot1} setSlot2={setSlot2}/>
            <Results slot1={slot1} slot2={slot2} setSlot1={setSlot1} setSlot2={setSlot2} new={newElement} setNew={setNew}/>
        </div>

        <div className={styles.searchbar}>
            <SearchBar new={newElement} setNew={setNew}/>
        </div>

    </div>

)
}
