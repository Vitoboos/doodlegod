import React from 'react'
import styles from './SearchBar.module.css'
import { useState, useEffect } from 'react'
import { elementList } from '../Elements/ElementList'

export default function SearchBar(props) {

    const elementArray = Object.values(elementList)

    const [displayBar, setDisplay] = useState(styles.active)
    const [displayText, setText] = useState('Hide Elements')

    const maxElements =  Object.keys(elementList).length;
    let unlocked = 0

    for (var i = 0; i < maxElements; i++){

        let array = Object.values(elementList)
        if(array[i].unlocked === true){
            unlocked += 1 
        }
    }

    let newElement = props.new
    let setNew = props.setNew

    function insertElement(id){
        setNew(id)
    }

    useEffect(() => {

        switch(newElement){

            case 'earth':
                elementList.earth.unlocked = true;
                break

            case 'fire':
                elementList.fire.unlocked = true;
                break

            case 'water':
                elementList.water.unlocked = true;
                break

            case 'wind':
                elementList.wind.unlocked = true;
                break   

            case 'rock':    
                elementList.rock.unlocked = true;
                break

            case 'hot':    
                elementList.hot.unlocked = true;
                break

            case 'cold':    
                elementList.cold.unlocked = true;
                break

            case 'gas':    
                elementList.gas.unlocked = true;
                break

            case 'dust':    
                elementList.dust.unlocked = true;
                break

            case 'matter':    
                elementList.matter.unlocked = true;
                break

            case 'sand':    
                elementList.sand.unlocked = true;
                break

            case 'steam':    
                elementList.steam.unlocked = true;
                break

            case 'energy':    
                elementList.energy.unlocked = true;
                break

            case 'cloud':    
                elementList.cloud.unlocked = true;
                break

            case 'mountain':    
                elementList.mountain.unlocked = true;
                break

            case 'lava':    
                elementList.lava.unlocked = true;
                break

            case 'ice':    
                elementList.ice.unlocked = true;
                break

            case 'grassland':    
                elementList.grassland.unlocked = true;
                break

            case 'sea':    
                elementList.sea.unlocked = true;
                break

            case 'rain':    
                elementList.rain.unlocked = true;
                break

            case 'metal':    
                elementList.metal.unlocked = true;
                break
        
            case 'iceberg':    
                elementList.iceberg.unlocked = true;
                break    

            case 'star':    
                elementList.star.unlocked = true;
                break
                
            case 'oil':    
                elementList.oil.unlocked = true;
                break

            case 'sulfur':    
                elementList.sulfur.unlocked = true;
                break

            case 'life':    
                elementList.life.unlocked = true;
                break

            case 'power':    
                elementList.power.unlocked = true;
                break

            case 'magic':    
                elementList.magic.unlocked = true;
                break

            case 'desert':    
                elementList.desert.unlocked = true;
                break

            case 'clay':    
                elementList.clay.unlocked = true;
                break

            case 'dunes':    
                elementList.dunes.unlocked = true;
                break

            case 'hill':    
                elementList.hill.unlocked = true;
                break

            case 'alpines':    
                elementList.alpines.unlocked = true;
                break

            case 'volcano':    
                elementList.volcano.unlocked = true;
                break

            case 'tundra':    
                elementList.tundra.unlocked = true;
                break

            case 'river':    
                elementList.river.unlocked = true;
                break

            case 'wetland':    
                elementList.wetland.unlocked = true;
                break

            case 'beach':    
                elementList.beach.unlocked = true;
                break

            case 'obsidian':    
                elementList.obsidian.unlocked = true;
                break

            case 'lightning':    
                elementList.lightning.unlocked = true;
                break

            case 'snow':    
                elementList.snow.unlocked = true;
                break

            case 'meteor':    
                elementList.meteor.unlocked = true;
                break

            case 'sun':    
                elementList.sun.unlocked = true;
                break

            case 'electricity':    
                elementList.electricity.unlocked = true;
                break

            case 'plants':    
                elementList.plants.unlocked = true;
                break

            case 'algae':    
                elementList.algae.unlocked = true;
                break

            case 'animals':    
                elementList.animals.unlocked = true;
                break

            case 'mankind':    
                elementList.mankind.unlocked = true;
                break

            case 'tree':    
                elementList.tree.unlocked = true;
                break
                
            case 'forest':    
                elementList.forest.unlocked = true;
                break
                
            case 'bricks':    
                elementList.bricks.unlocked = true;
                break

            case 'wood':    
                elementList.wood.unlocked = true;
                break

            case 'tools':    
                elementList.tools.unlocked = true;
                break

            case 'domestication':    
                elementList.domestication.unlocked = true;
                break

            case 'pottery':    
                elementList.pottery.unlocked = true;
                break

            case 'tribe':    
                elementList.tribe.unlocked = true;
                break

            case 'community':    
                elementList.community.unlocked = true;
                break

            case 'house':    
                elementList.house.unlocked = true;
                break

            case 'culture':    
                elementList.culture.unlocked = true;
                break

            case 'civilization':    
                elementList.civilization.unlocked = true;
                break

            case 'agriculture':    
                elementList.agriculture.unlocked = true;
                break

            case 'shelter':    
                elementList.shelter.unlocked = true;
                break

            case 'masonry':    
                elementList.masonry.unlocked = true;
                break

            case 'livestock':    
                elementList.livestock.unlocked = true;
                break

            case 'camel':    
                elementList.camel.unlocked = true;
                break

            case 'penguin':    
                elementList.penguin.unlocked = true;
                break

            case 'deer':    
                elementList.deer.unlocked = true;
                break

            case 'pets':    
                elementList.pets.unlocked = true;
                break

            case 'fish':    
                elementList.fish.unlocked = true;
                break

            default:

            
                break

        }

    }, [newElement])

    function toggleDisplay(){

        if(displayBar === styles.active){
            setDisplay(styles.hidden)
            setText('Show Elements')
        }

        else{
            setDisplay(styles.active)
            setText('Hide Elements')
        }

    }


    return (

    <div className={`${styles.list}`}>

        <div className={styles.displayBtn}>
            <button className={styles.btn} onClick={toggleDisplay}> {displayText} </button>
            <h3 className={styles.unlockable}> {unlocked} of {maxElements} elements discovered. </h3>
        </div>

        <div className={displayBar}>
            {elementArray.map((item) => (

                item.unlocked &&(
                    <div key={item.id} className={styles.element}  onClick= {() => insertElement(item.id)}>
                        <p> {item.name}</p>
                    </div>
                )
            ))}
        </div>

    </div>
)}
