import React, { Fragment } from 'react'
import { useState, useEffect } from 'react'

import Element from '../Elements/Element'

import styles from './ElementContainer.module.css'

import { elementList } from '../Elements/ElementList'

export default function ElementContainer(props) {
    let setElement = props.setElement
    let newElement = props.new
    let setNew = props.setNew

    useEffect(() =>{
    
        switch(newElement){

            case 'earth':
                setEarth(true)
                setNew(null)
                break

            case 'fire':
                setFire(true)
                setNew(null)
                break

            case 'water':
                setWater(true)
                setNew(null)
                break

            case 'wind':
                setWind(true)
                setNew(null)
                break

            case 'rock':
                setRock(true)
                setNew(null)
                break

            case 'hot':
                setHot(true)
                setNew(null)
                break
                
            case 'cold':
                setCold(true)
                setNew(null)
                break

            case 'gas':
                setGas(true)
                setNew(null)
                break

            case 'dust':
                setDust(true)
                setNew(null)
                break
            
            case 'matter':
                setMatter(true)
                setNew(null)
                break       
                
            case 'sand':
                setSand(true)
                setNew(null)
                break

            case 'steam':
                setSteam(true)
                setNew(null)
                break

            case 'energy':
                setEnergy(true)
                setNew(null)
                break

            case 'cloud':
                setCloud(true)
                setNew(null)
                break

            case 'mountain':
                setMountain(true)
                setNew(null)
                break
                
            case 'lava':
                setLava(true)
                setNew(null)
                break

            case 'ice':
                setIce(true)
                setNew(null)
                break

            case 'grassland':
                setGrassland(true)
                setNew(null)
                break

            case 'sea':
                setSea(true)
                setNew(null)
                break

            case 'rain':
                setRain(true)
                setNew(null)
                break

            case 'metal':
                setMetal(true)
                setNew(null)
                break
    
            case 'iceberg':
                setIceberg(true)
                setNew(null)
                break

            case 'star':
                setStar(true)
                setNew(null)
                break
    
            case 'oil':
                setOil(true)
                setNew(null)
                break

            case 'sulfur':
                setSulfur(true)
                setNew(null)
                break

            case 'life':
                setLife(true)
                setNew(null)
                break

            case 'power':
                setPower(true)
                setNew(null)
                break

            case 'magic':
                setMagic(true)
                setNew(null)
                break

            case 'desert':
                setDesert(true)
                setNew(null)
                break

            case 'clay':
                setClay(true)
                setNew(null)
                break

            case 'dunes':
                setDunes(true)
                setNew(null)
                break

            case 'hill':
                setHill(true)
                setNew(null)
                break

            case 'alpines':
                setAlpines(true)
                setNew(null)
                break

            case 'volcano':
                setVolcano(true)
                setNew(null)
                break

            case 'tundra':
                setTundra(true)
                setNew(null)
                break

            case 'river':
                setRiver(true)
                setNew(null)
                break

            case 'wetland':
                setWetland(true)
                setNew(null)
                break

            case 'beach':
                setBeach(true)
                setNew(null)
                break

            case 'obsidian':
                setObsidian(true)
                setNew(null)
                break

            case 'lightning':
                setLightning(true)
                setNew(null)
                break

            case 'snow':
                setSnow(true)
                setNew(null)
                break

            case 'meteor':
                setMeteor(true)
                setNew(null)
                break

            case 'sun':
                setSun(true)
                setNew(null)
                break

            case 'electricity':
                setElectricity(true)
                setNew(null)
                break
    
            case 'plants':
                setPlants(true)
                setNew(null)
                break

            case 'algae':
                setAlgae(true)
                setNew(null)
                break
        
            case 'animals':
                setAnimals(true)
                setNew(null)
                break

            case 'mankind':
                setMankind(true)
                setNew(null)
                break

            case 'tree':
                setTree(true)
                setNew(null)
                break
    
            case 'forest':
                setForest(true)
                setNew(null)
                break

            case 'bricks':
                setBricks(true)
                setNew(null)
                break

            case 'wood':
                setWood(true)
                setNew(null)
                break

            case 'tools':
                setTools(true)
                setNew(null)
                break

            case 'domestication':
                setDomestication(true)
                setNew(null)
                break

            case 'pottery':
                setPottery(true)
                setNew(null)
                break
    
            case 'tribe':
                setTribe(true)
                setNew(null)
                break
    
            case 'community':
                setCommunity(true)
                setNew(null)
                break
    
            case 'house':
                setHouse(true)
                setNew(null)
                break
            
            case 'culture':
                setCulture(true)
                setNew(null)
                break    

            case 'civilization':
                setCivilization(true)
                setNew(null)
                break    

            case 'agriculture':
                setAgriculture(true)
                setNew(null)
                break  

            case 'shelter':
                setShelter(true)
                setNew(null)
                break  

            case 'masonry':
                setMasonry(true)
                setNew(null)
                break  

            case 'livestock':
                setLivestock(true)
                setNew(null)
                break  

            case 'camel':
                setCamel(true)
                setNew(null)
                break  

            case 'penguin':
                setPenguin(true)
                setNew(null)
                break  
                        
            case 'deer':
                setDeer(true)
                setNew(null)
                break  

            case 'pets':
                setPets(true)
                setNew(null)
                break  

            case 'fish':
                setFish(true)
                setNew(null)
                break  

            default:
                break
        }

    }, [newElement, setNew])

    // State Displays

    const [earth, setEarth] = useState(true)
    const [fire, setFire] = useState(true)
    const [water, setWater] = useState(true)
    const [wind, setWind] = useState(true)
    const [rock, setRock] = useState(false)
    const [hot, setHot] = useState(false)
    const [cold, setCold] = useState(false)
    const [gas, setGas] = useState(false)
    const [dust, setDust] = useState(false)
    const [matter, setMatter] = useState(false)
    const [sand, setSand] = useState(false)
    const [steam, setSteam] = useState(false)
    const [energy, setEnergy] = useState(false)
    const [cloud, setCloud] = useState(false)
    const [mountain, setMountain] = useState(false)
    const [lava, setLava] = useState(false)
    const [ice, setIce] = useState(false)
    const [grassland, setGrassland] = useState(false)
    const [sea, setSea] = useState(false)
    const [rain, setRain] = useState(false)
    const [metal, setMetal] = useState(false)
    const [iceberg, setIceberg] = useState(false)
    const [star, setStar] = useState(false)
    const [oil, setOil] = useState(false)
    const [sulfur, setSulfur] = useState(false)
    const [life, setLife] = useState(false)
    const [power, setPower] = useState(false)
    const [magic, setMagic] = useState(false)
    const [desert, setDesert] = useState(false)
    const [clay, setClay] = useState(false)
    const [dunes, setDunes] = useState(false)
    const [hill, setHill] = useState(false)
    const [alpines, setAlpines] = useState(false)
    const [volcano, setVolcano] = useState(false)
    const [tundra, setTundra] = useState(false)
    const [river, setRiver] = useState(false)
    const [wetland, setWetland] = useState(false)
    const [beach, setBeach] = useState(false)
    const [obsidian, setObsidian] = useState(false)
    const [lightning, setLightning] = useState(false)
    const [snow, setSnow] = useState(false)
    const [meteor, setMeteor] = useState(false)
    const [sun, setSun] = useState(false)
    const [electricity, setElectricity] = useState(false)
    const [plants, setPlants] = useState(false)
    const [algae, setAlgae] = useState(false)
    const [animals, setAnimals] = useState(false)
    const [mankind, setMankind] = useState(false)
    const [tree, setTree] = useState(false)
    const [forest, setForest] = useState(false)
    const [bricks, setBricks] = useState(false)
    const [wood, setWood] = useState(false)
    const [tools, setTools] = useState(false)
    const [domestication, setDomestication] = useState(false)
    const [pottery, setPottery] = useState(false)
    const [tribe, setTribe] = useState(false)
    const [community, setCommunity] = useState(false)
    const [house, setHouse] = useState(false)
    const [culture, setCulture] = useState(false)
    const [civilization, setCivilization] = useState(false)
    const [agriculture, setAgriculture] = useState(false)
    const [shelter, setShelter] = useState(false)
    const [masonry, setMasonry] = useState(false)
    const [livestock, setLivestock] = useState(false)
    const [camel, setCamel] = useState(false)
    const [penguin, setPenguin] = useState(false)
    const [deer, setDeer] = useState(false)
    const [pets, setPets] = useState(false)
    const [fish, setFish] = useState(false)

    // Change Displays

return (

    <Fragment>

        <div className={styles.background}>
            <div className={styles.container}>
                <Element element={elementList.earth}  setElement={setElement} display={earth} setDisplay={setEarth}/>
                <Element element={elementList.fire}  setElement={setElement} display={fire} setDisplay={setFire}/>
                <Element element={elementList.water}  setElement={setElement} display={water} setDisplay={setWater}/>
                <Element element={elementList.wind}  setElement={setElement} display={wind} setDisplay={setWind}/>
                <Element element={elementList.rock}  setElement={setElement} display={rock} setDisplay={setRock}/>
                <Element element={elementList.hot}  setElement={setElement} display={hot} setDisplay={setHot}/>
                <Element element={elementList.cold}  setElement={setElement} display={cold} setDisplay={setCold}/>
                <Element element={elementList.gas}  setElement={setElement} display={gas} setDisplay={setGas}/>
                <Element element={elementList.dust}  setElement={setElement} display={dust} setDisplay={setDust}/>
                <Element element={elementList.matter}  setElement={setElement} display={matter} setDisplay={setMatter}/>
                <Element element={elementList.sand}  setElement={setElement} display={sand} setDisplay={setSand}/>
                <Element element={elementList.steam}  setElement={setElement} display={steam} setDisplay={setSteam}/>
                <Element element={elementList.energy}  setElement={setElement} display={energy} setDisplay={setEnergy}/>
                <Element element={elementList.cloud}  setElement={setElement} display={cloud} setDisplay={setCloud}/>
                <Element element={elementList.mountain}  setElement={setElement} display={mountain} setDisplay={setMountain}/>
                <Element element={elementList.lava}  setElement={setElement} display={lava} setDisplay={setLava}/>
                <Element element={elementList.ice}  setElement={setElement} display={ice} setDisplay={setIce}/>
                <Element element={elementList.grassland}  setElement={setElement} display={grassland} setDisplay={setGrassland}/>
                <Element element={elementList.sea}  setElement={setElement} display={sea} setDisplay={setSea}/>
                <Element element={elementList.rain}  setElement={setElement} display={rain} setDisplay={setRain}/>
                <Element element={elementList.metal}  setElement={setElement} display={metal} setDisplay={setMetal}/>
                <Element element={elementList.iceberg}  setElement={setElement} display={iceberg} setDisplay={setIceberg}/>
                <Element element={elementList.star}  setElement={setElement} display={star} setDisplay={setStar}/>
                <Element element={elementList.oil}  setElement={setElement} display={oil} setDisplay={setOil}/>
                <Element element={elementList.sulfur}  setElement={setElement} display={sulfur} setDisplay={setSulfur}/>
                <Element element={elementList.life}  setElement={setElement} display={life} setDisplay={setLife}/>
                <Element element={elementList.power}  setElement={setElement} display={power} setDisplay={setPower}/>
                <Element element={elementList.magic}  setElement={setElement} display={magic} setDisplay={setMagic}/>
                <Element element={elementList.desert}  setElement={setElement} display={desert} setDisplay={setDesert}/>
                <Element element={elementList.clay}  setElement={setElement} display={clay} setDisplay={setClay}/>
                <Element element={elementList.dunes}  setElement={setElement} display={dunes} setDisplay={setDunes}/>
                <Element element={elementList.hill}  setElement={setElement} display={hill} setDisplay={setHill}/>
                <Element element={elementList.alpines}  setElement={setElement} display={alpines} setDisplay={setAlpines}/>
                <Element element={elementList.volcano}  setElement={setElement} display={volcano} setDisplay={setVolcano}/>
                <Element element={elementList.tundra}  setElement={setElement} display={tundra} setDisplay={setTundra}/>
                <Element element={elementList.river}  setElement={setElement} display={river} setDisplay={setRiver}/>
                <Element element={elementList.wetland}  setElement={setElement} display={wetland} setDisplay={setWetland}/>
                <Element element={elementList.beach}  setElement={setElement} display={beach} setDisplay={setBeach}/>
                <Element element={elementList.obsidian}  setElement={setElement} display={obsidian} setDisplay={setObsidian}/>
                <Element element={elementList.lightning}  setElement={setElement} display={lightning} setDisplay={setLightning}/>
                <Element element={elementList.snow} setElement={setElement} display={snow} setDisplay={setSnow}/>
                <Element element={elementList.meteor} setElement={setElement} display={meteor} setDisplay={setMeteor}/>
                <Element element={elementList.sun} setElement={setElement} display={sun} setDisplay={setSun}/>
                <Element element={elementList.electricity} setElement={setElement} display={electricity} setDisplay={setElectricity}/>
                <Element element={elementList.plants} setElement={setElement} display={plants} setDisplay={setPlants}/>
                <Element element={elementList.algae} setElement={setElement} display={algae} setDisplay={setAlgae}/>
                <Element element={elementList.animals} setElement={setElement} display={animals} setDisplay={setAnimals}/>
                <Element element={elementList.mankind} setElement={setElement} display={mankind} setDisplay={setMankind}/>
                <Element element={elementList.tree} setElement={setElement} display={tree} setDisplay={setTree}/>
                <Element element={elementList.forest} setElement={setElement} display={forest} setDisplay={setForest}/>
                <Element element={elementList.bricks} setElement={setElement} display={bricks} setDisplay={setBricks}/>
                <Element element={elementList.wood} setElement={setElement} display={wood} setDisplay={setWood}/>
                <Element element={elementList.tools} setElement={setElement} display={tools} setDisplay={setTools}/>
                <Element element={elementList.domestication} setElement={setElement} display={domestication} setDisplay={setDomestication}/>
                <Element element={elementList.pottery} setElement={setElement} display={pottery} setDisplay={setPottery}/>
                <Element element={elementList.tribe} setElement={setElement} display={tribe} setDisplay={setTribe}/>
                <Element element={elementList.community} setElement={setElement} display={community} setDisplay={setCommunity}/>
                <Element element={elementList.house} setElement={setElement} display={house} setDisplay={setHouse}/>
                <Element element={elementList.culture} setElement={setElement} display={culture} setDisplay={setCulture}/>
                <Element element={elementList.civilization} setElement={setElement} display={civilization} setDisplay={setCivilization}/>
                <Element element={elementList.agriculture} setElement={setElement} display={agriculture} setDisplay={setAgriculture}/>
                <Element element={elementList.shelter} setElement={setElement} display={shelter} setDisplay={setShelter}/>
                <Element element={elementList.masonry} setElement={setElement} display={masonry} setDisplay={setMasonry}/>
                <Element element={elementList.livestock} setElement={setElement} display={livestock} setDisplay={setLivestock}/>
                <Element element={elementList.camel} setElement={setElement} display={camel} setDisplay={setCamel}/>
                <Element element={elementList.penguin} setElement={setElement} display={penguin} setDisplay={setPenguin}/>
                <Element element={elementList.deer} setElement={setElement} display={deer} setDisplay={setDeer}/>
                <Element element={elementList.pets} setElement={setElement} display={pets} setDisplay={setPets}/>
                <Element element={elementList.fish} setElement={setElement} display={fish} setDisplay={setFish}/>


            </div>
        </div>
    </Fragment>

)
}
