import React from 'react'
import { useState } from 'react'
import {elementList} from '../Elements/ElementList'
import styles from './Results.module.css'
import question from '../Images/question.png'

export default function Results(props) {

const slot1 = props.slot1[0]
const slot2 = props.slot2[0]
const slotGroup = [slot1, slot2]

const [craft, setCraft] = useState([null])
const [craftImg, setCraftImg] = useState(null)

function handleCraft(){
    props.setSlot1([null, question])
    props.setSlot2([null, question])

    setCraft(null)
    setCraftImg(null)

    if(slot1 !== null && slot2 !== null){
        craftElement()
    }
    else{
        return
    }

}

function craftElement(){

    switch(true){
        case slot1.includes('Earth') && slot2.includes('Earth'):
            setCraft(elementList.rock.name)
            setCraftImg(elementList.rock.url)
            props.setNew(elementList.rock.id)
            break; 

        case slot1.includes('Fire') && slot2.includes('Fire'):
            setCraft(elementList.hot.name)
            setCraftImg(elementList.hot.url)
            props.setNew(elementList.hot.id)
            break; 

        case slot1.includes('Water') && slot2.includes('Water'):
            setCraft(elementList.cold.name)
            setCraftImg(elementList.cold.url)
            props.setNew(elementList.cold.id)
            break; 

        case slot1.includes('Wind') && slot2.includes('Wind'):
            setCraft(elementList.gas.name)
            setCraftImg(elementList.gas.url)
            props.setNew(elementList.gas.id)
            break; 

        case slotGroup.includes('Earth') && slotGroup.includes('Fire'):
            setCraft(elementList.dust.name)
            setCraftImg(elementList.dust.url)
            props.setNew(elementList.dust.id)
            break; 

        case slotGroup.includes('Earth') && slotGroup.includes('Water'):
            setCraft(elementList.matter.name)
            setCraftImg(elementList.matter.url)
            props.setNew(elementList.matter.id)
            break; 

        case slotGroup.includes('Earth') && slotGroup.includes('Wind'):
            setCraft(elementList.sand.name)
            setCraftImg(elementList.sand.url)
            props.setNew(elementList.sand.id)
            break; 

        case slotGroup.includes('Fire') && slotGroup.includes('Water'):
            setCraft(elementList.steam.name)
            setCraftImg(elementList.steam.url)
            props.setNew(elementList.steam.id)
            break;

        case slotGroup.includes('Wind') && slotGroup.includes('Fire'):
            setCraft(elementList.energy.name)
            setCraftImg(elementList.energy.url)
            props.setNew(elementList.energy.id)
            break;

        case slotGroup.includes('Water') && slotGroup.includes('Wind'):
            setCraft(elementList.cloud.name)
            setCraftImg(elementList.cloud.url)
            props.setNew(elementList.cloud.id)
            break; 

        case slotGroup.includes('Rock') && slotGroup.includes('Earth'):
            setCraft(elementList.mountain.name)
            setCraftImg(elementList.mountain.url)
            props.setNew(elementList.mountain.id)
            break; 

        case slotGroup.includes('Rock') && slotGroup.includes('Fire'):
            setCraft(elementList.lava.name)
            setCraftImg(elementList.lava.url)
            props.setNew(elementList.lava.id)
            break; 

        case slotGroup.includes('Cold') && slotGroup.includes('Water'):
            setCraft(elementList.ice.name)
            setCraftImg(elementList.ice.url)
            props.setNew(elementList.ice.id)
            break; 

        case slotGroup.includes('Matter') && slotGroup.includes('Earth'):
            setCraft(elementList.grassland.name)
            setCraftImg(elementList.grassland.url)
            props.setNew(elementList.grassland.id)
            break; 

        case slotGroup.includes('Matter') && slotGroup.includes('Water'):
            setCraft(elementList.sea.name)
            setCraftImg(elementList.sea.url)
            props.setNew(elementList.sea.id)
            break; 

        case slotGroup.includes('Cloud') && slotGroup.includes('Water'):
            setCraft(elementList.rain.name)
            setCraftImg(elementList.rain.url)
            props.setNew(elementList.rain.id)
            break; 

        case slotGroup.includes('Rock') && slotGroup.includes('Matter'):
            setCraft(elementList.metal.name)
            setCraftImg(elementList.metal.url)
            props.setNew(elementList.metal.id)
            break; 

        case slotGroup.includes('Rock') && slotGroup.includes('Ice'):
            setCraft(elementList.iceberg.name)
            setCraftImg(elementList.iceberg.url)
            props.setNew(elementList.iceberg.id)
            break; 

        case slotGroup.includes('Gas') && slotGroup.includes('Matter'):
            setCraft(elementList.star.name)
            setCraftImg(elementList.star.url)
            props.setNew(elementList.star.id)
            break; 

        case slotGroup.includes('Gas') && slotGroup.includes('Energy'):
            setCraft(elementList.oil.name)
            setCraftImg(elementList.oil.url)
            props.setNew(elementList.oil.id)
            break; 

        case slotGroup.includes('Gas') && slotGroup.includes('Fire'):
            setCraft(elementList.sulfur.name)
            setCraftImg(elementList.sulfur.url)
            props.setNew(elementList.sulfur.id)
            break; 

        case slotGroup.includes('Energy') && slotGroup.includes('Matter'):
            setCraft(elementList.life.name)
            setCraftImg(elementList.life.url)
            props.setNew(elementList.life.id)
            break; 

        case slotGroup.includes('Energy') && slotGroup.includes('Steam'):
            setCraft(elementList.power.name)
            setCraftImg(elementList.power.url)
            props.setNew(elementList.power.id)
            break; 

        case slotGroup.includes('Dust') && slotGroup.includes('Matter'):
            setCraft(elementList.magic.name)
            setCraftImg(elementList.magic.url)
            props.setNew(elementList.magic.id)
            break; 

        case slotGroup.includes('Sand') && slotGroup.includes('Grassland'):
            setCraft(elementList.desert.name)
            setCraftImg(elementList.desert.url)
            props.setNew(elementList.desert.id)
            break; 

        case slotGroup.includes('Sand') && slotGroup.includes('Earth'):
            setCraft(elementList.clay.name)
            setCraftImg(elementList.clay.url)
            props.setNew(elementList.clay.id)
            break; 

        case slotGroup.includes('Mountain') && slotGroup.includes('Sand'):
            setCraft(elementList.dunes.name)
            setCraftImg(elementList.dunes.url)
            props.setNew(elementList.dunes.id)
            break; 

        case slotGroup.includes('Mountain') && slotGroup.includes('Grassland'):
            setCraft(elementList.hill.name)
            setCraftImg(elementList.hill.url)
            props.setNew(elementList.hill.id)
            break; 

        case slotGroup.includes('Mountain') && slotGroup.includes('Cold'):
            setCraft(elementList.alpines.name)
            setCraftImg(elementList.alpines.url)
            props.setNew(elementList.alpines.id)
            break; 

        case slotGroup.includes('Mountain') && slotGroup.includes('Lava'):
            setCraft(elementList.volcano.name)
            setCraftImg(elementList.volcano.url)
            props.setNew(elementList.volcano.id)
            break; 

        case slotGroup.includes('Grassland') && slotGroup.includes('Cold'):
            setCraft(elementList.tundra.name)
            setCraftImg(elementList.tundra.url)
            props.setNew(elementList.tundra.id)
            break; 

        case slotGroup.includes('Sea') && slotGroup.includes('Earth'):
            setCraft(elementList.river.name)
            setCraftImg(elementList.river.url)
            props.setNew(elementList.river.id)
            break; 

        case slotGroup.includes('Sea') && slotGroup.includes('Grassland'):
            setCraft(elementList.wetland.name)
            setCraftImg(elementList.wetland.url)
            props.setNew(elementList.wetland.id)
            break; 

        case slotGroup.includes('Sea') && slotGroup.includes('Sand'):
            setCraft(elementList.beach.name)
            setCraftImg(elementList.beach.url)
            props.setNew(elementList.beach.id)
            break; 

        case slotGroup.includes('Lava') && slotGroup.includes('Water'):
            setCraft(elementList.obsidian.name)
            setCraftImg(elementList.obsidian.url)
            props.setNew(elementList.obsidian.id)
            break; 

        case slotGroup.includes('Cloud') && slotGroup.includes('Hot'):
            setCraft(elementList.lightning.name)
            setCraftImg(elementList.lightning.url)
            props.setNew(elementList.lightning.id)
            break; 

        case slotGroup.includes('Cloud') && slotGroup.includes('Cold'):
                setCraft(elementList.snow.name)
                setCraftImg(elementList.snow.url)
                props.setNew(elementList.snow.id)
                break; 

        case slotGroup.includes('Star') && slotGroup.includes('Rock'):
            setCraft(elementList.meteor.name)
            setCraftImg(elementList.meteor.url)
            props.setNew(elementList.meteor.id)
            break; 

        case slotGroup.includes('Star') && slotGroup.includes('Hot'):
            setCraft(elementList.sun.name)
            setCraftImg(elementList.sun.url)
            props.setNew(elementList.sun.id)
            break; 

        case slotGroup.includes('Lightning') && slotGroup.includes('Energy'):
            setCraft(elementList.electricity.name)
            setCraftImg(elementList.electricity.url)
            props.setNew(elementList.electricity.id)
            break; 

        case slotGroup.includes('Life') && slotGroup.includes('Earth'):
            setCraft(elementList.plants.name)
            setCraftImg(elementList.plants.url)
            props.setNew(elementList.plants.id)
            break; 

        case slotGroup.includes('Life') && slotGroup.includes('Sea'):
            setCraft(elementList.algae.name)
            setCraftImg(elementList.algae.url)
            props.setNew(elementList.algae.id)
            break; 

        case slotGroup.includes('Life') && slotGroup.includes('Matter'):
            setCraft(elementList.animals.name)
            setCraftImg(elementList.animals.url)
            props.setNew(elementList.animals.id)
            break; 

        case slotGroup.includes('Animals') && slotGroup.includes('Magic'):
            setCraft(elementList.mankind.name)
            setCraftImg(elementList.mankind.url)
            props.setNew(elementList.mankind.id)
            break; 

        
        case slotGroup.includes('Plants') && slotGroup.includes('Matter'):
            setCraft(elementList.tree.name)
            setCraftImg(elementList.tree.url)
            props.setNew(elementList.tree.id)
            break; 

            
        case slotGroup.includes('Tree') && slotGroup.includes('Grassland'):
            setCraft(elementList.forest.name)
            setCraftImg(elementList.forest.url)
            props.setNew(elementList.forest.id)
            break; 

            
        case slotGroup.includes('Clay') && slotGroup.includes('Fire'):
            setCraft(elementList.bricks.name)
            setCraftImg(elementList.bricks.url)
            props.setNew(elementList.bricks.id)
            break; 

            
        case slotGroup.includes('Mankind') && slotGroup.includes('Tree'):
            setCraft(elementList.wood.name)
            setCraftImg(elementList.wood.url)
            props.setNew(elementList.wood.id)
            break; 

            
        case slotGroup.includes('Mankind') && slotGroup.includes('Metal'):
            setCraft(elementList.tools.name)
            setCraftImg(elementList.tools.url)
            props.setNew(elementList.tools.id)
            break; 

            
        case slotGroup.includes('Mankind') && slotGroup.includes('Animals'):
            setCraft(elementList.domestication.name)
            setCraftImg(elementList.domestication.url)
            props.setNew(elementList.domestication.id)
            break; 

            
        case slotGroup.includes('Mankind') && slotGroup.includes('Clay'):
            setCraft(elementList.pottery.name)
            setCraftImg(elementList.pottery.url)
            props.setNew(elementList.pottery.id)
            break; 


        case slot1.includes('Mankind') && slot2.includes('Mankind'):
            setCraft(elementList.tribe.name)
            setCraftImg(elementList.tribe.url)
            props.setNew(elementList.tribe.id)
            break; 
            
        case slot1.includes('House') && slot2.includes('House'):
            setCraft(elementList.community.name)
            setCraftImg(elementList.community.url)
            props.setNew(elementList.community.id)
            break; 
            
        case slotGroup.includes('Masonry') && slotGroup.includes('Shelter'):
            setCraft(elementList.house.name)
            setCraftImg(elementList.house.url)
            props.setNew(elementList.house.id)
            break; 

            
        case slotGroup.includes('Community') && slotGroup.includes('Tribe'):
            setCraft(elementList.culture.name)
            setCraftImg(elementList.culture.url)
            props.setNew(elementList.culture.id)
            break; 

            
        case slotGroup.includes('Culture') && slotGroup.includes('Mankind'):
            setCraft(elementList.civilization.name)
            setCraftImg(elementList.civilization.url)
            props.setNew(elementList.civilization.id)
            break; 

            
        case slotGroup.includes('Tools') && slotGroup.includes('Grassland'):
            setCraft(elementList.agriculture.name)
            setCraftImg(elementList.agriculture.url)
            props.setNew(elementList.agriculture.id)
            break; 

            
        case slotGroup.includes('Tools') && slotGroup.includes('Wood'):
            setCraft(elementList.shelter.name)
            setCraftImg(elementList.shelter.url)
            props.setNew(elementList.shelter.id)
            break; 
            
        case slotGroup.includes('Tools') && slotGroup.includes('Bricks'):
            setCraft(elementList.masonry.name)
            setCraftImg(elementList.masonry.url)
            props.setNew(elementList.masonry.id)
            break; 

            
        case slotGroup.includes('Animals') && slotGroup.includes('Grassland'):
            setCraft(elementList.livestock.name)
            setCraftImg(elementList.livestock.url)
            props.setNew(elementList.livestock.id)
            break; 
            
        case slotGroup.includes('Animals') && slotGroup.includes('Desert'):
            setCraft(elementList.camel.name)
            setCraftImg(elementList.camel.url)
            props.setNew(elementList.camel.id)
            break;
            
                        
        case slotGroup.includes('Animals') && slotGroup.includes('Snow'):
            setCraft(elementList.penguin.name)
            setCraftImg(elementList.penguin.url)
            props.setNew(elementList.penguin.id)
            break; 
    

        case slotGroup.includes('Animals') && slotGroup.includes('Forest'):
            setCraft(elementList.deer.name)
            setCraftImg(elementList.deer.url)
            props.setNew(elementList.deer.id)
            break; 
                
        case slotGroup.includes('Animals') && slotGroup.includes('Domestication'):
            setCraft(elementList.pets.name)
            setCraftImg(elementList.pets.url)
            props.setNew(elementList.pets.id)
            break; 
    
        case slotGroup.includes('Animals') && slotGroup.includes('Sea'):
            setCraft(elementList.fish.name)
            setCraftImg(elementList.fish.url)
            props.setNew(elementList.fish.id)
            break; 
    
    

    
        default:
            break;
    
    }

}

return (

    <div className={styles.slot}>

        <h1 className={styles.title}> {craft} </h1>
        <img className={styles.icon} src={craftImg} alt=''/>
        <button className={styles.btn} onClick={handleCraft}> Craft! </button>

    </div>

)}
