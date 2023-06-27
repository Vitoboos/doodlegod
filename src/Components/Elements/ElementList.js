import earth from '../Images/earth.png'
import water from '../Images/water.png'
import wind from '../Images/wind.png'
import fire from '../Images/fire.png'
import rock from '../Images/rock.png'
import hot from '../Images/hot.png'
import cold from '../Images/cold.png'
import gas from '../Images/gas.png'
import dust from '../Images/dust.png'
import matter from '../Images/matter.png'
import sand from '../Images/sand.png'
import steam from '../Images/steam.png'
import energy from '../Images/energy.png'
import cloud from '../Images/cloud.png'
import mountain from '../Images/mountain.png'
import lava from '../Images/lava.png'
import ice from '../Images/ice.png'
import grassland from '../Images/grassland.png'
import sea from '../Images/sea.png'
import rain from '../Images/rain.png'
import metal from '../Images/metal.png'
import iceberg from '../Images/iceberg.png'
import star from '../Images/star.png'
import oil from '../Images/oil.png'
import sulfur from '../Images/sulfur.png'
import life from '../Images/life.png'
import power from '../Images/power.png'
import magic from '../Images/magic.png'
import desert from '../Images/desert.png'
import clay from '../Images/clay.png'
import dunes from '../Images/dunes.png'
import hill from '../Images/hill.png'
import alpines from '../Images/alpines.png'
import volcano from '../Images/volcano.png'
import tundra from '../Images/tundra.png'
import river from '../Images/river.png'
import wetland from '../Images/wetland.png'
import beach from '../Images/beach.png'
import obsidian from '../Images/obsidian.png'
import lightning from '../Images/lightning.png'
import snow from '../Images/snow.png'
import meteor from '../Images/meteor.png'
import sun from '../Images/sun.png'
import electricity from '../Images/electricity.png'
import plants from '../Images/plants.png'
import algae from '../Images/algae.png'
import animals from '../Images/animals.png'
import mankind from '../Images/mankind.png'
import tree from '../Images/tree.png'
import forest from '../Images/forest.png'
import bricks from '../Images/bricks.png'
import wood from '../Images/wood.png'
import tools from '../Images/tools.png'
import domestication from '../Images/domestication.png'
import pottery from '../Images/pottery.png'
import tribe from '../Images/tribe.png'
import community from '../Images/community.png'
import house from '../Images/house.png'
import culture from '../Images/culture.png'
import civilization from '../Images/civilization.png'
import agriculture from '../Images/agriculture.png'
import shelter from '../Images/shelter.png'
import masonry from '../Images/masonry.png'
import livestock from '../Images/livestock.png'
import camel from '../Images/camel.png'
import penguin from '../Images/penguin.png'
import deer from '../Images/deer.png'
import pets from '../Images/pets.png'
import fish from '../Images/fish.png'

export const elementList = {

    agriculture:{
        id : 'agriculture',
        name: 'Agriculture',
        url: agriculture,
        parents: ['Tools', 'Grassland'],
        unlocked : false
    },

    algae:{
        id : 'algae',
        name: 'Algae',
        url: algae,
        parents: ['Life', 'Sea'],
        unlocked : false
    },

    alpines:{
        id : 'alpines',
        name: 'Alpines',
        url: alpines,
        parents: ['Mountain', 'Cold'],
        unlocked : false
    },

    animals:{
        id : 'animals',
        name: 'Animals',
        url: animals,
        parents: ['Life', 'Matter'],
        unlocked : false
    },

    beach:{
        id : 'beach',
        name: 'Beach',
        url: beach,
        parents: ['Sea', 'Sand'],
        unlocked : false
    },

    bricks:{
        id : 'bricks',
        name: 'Bricks',
        url: bricks,
        parents: ['Clay', 'Fire'],
        unlocked : false
    },

    camel:{
        id : 'camel',
        name: 'Camel',
        url: camel,
        parents: ['Animals', 'Desert'],
        unlocked : false
    },

    civilization:{
        id : 'civilization',
        name: 'Civilization',
        url: civilization,
        parents: ['Culture', 'Mankind'],
        unlocked : false
    },    

    clay:{
        id : 'clay',
        name: 'Clay',
        url: clay,
        parents: ['sand', 'earth'],
        unlocked : false
    },

    cloud:{
        id : 'cloud',
        name: 'Cloud',
        url: cloud,
        parents: ['water', 'wind'],
        unlocked : false
    },

    cold:{
        id : 'cold',
        name: 'Cold',
        url: cold,
        parents: ['water', 'water'],
        unlocked : false
    },

    community:{
        id : 'community',
        name: 'Community',
        url: community,
        parents: ['House', 'House'],
        unlocked : false
    },

    culture:{
        id : 'culture',
        name: 'Culture',
        url: culture,
        parents: ['Community', 'Tribe'],
        unlocked : false
    },

    deer:{
        id : 'deer',
        name: 'Deer',
        url: deer,
        parents: ['Animals', 'Forest'],
        unlocked : false
    },

    desert:{
        id : 'desert',
        name: 'Desert',
        url: desert,
        parents: ['sand', 'plains'],
        unlocked : false
    },

    domestication:{
        id : 'domestication',
        name: 'Domestication',
        url: domestication,
        parents: ['Mankind', 'Animals'],
        unlocked : false
    },

    dunes:{
        id : 'dunes',
        name: 'Dunes',
        url: dunes,
        parents: ['Mountain', 'Sand'],
        unlocked : false
    },

    dust:{
        id : 'dust',
        name: 'Dust',
        url: dust,
        parents: ['earth', 'fire'],
        unlocked : false
    },

    earth: {
        id : 'earth',
        name: 'Earth',
        url: earth,
        unlocked : true
    },

    electricity:{
        id : 'electricity',
        name: 'Electricity',
        url: electricity,
        parents: ['Lightning', 'Energy'],
        unlocked : false
    },

    energy:{
        id : 'energy',
        name: 'Energy',
        url: energy,
        parents: ['wind', 'fire'],
        unlocked : false
    },

    fire: {
        id : 'fire',
        name: 'Fire',
        url: fire,
        unlocked : true
    },

    fish:{
        id : 'fish',
        name: 'Fish',
        url: fish,
        parents: ['Animals', 'Sea'],
        unlocked : false
    },

    forest:{
        id : 'forest',
        name: 'Forest',
        url: forest,
        parents: ['Tree', 'Grassland'],
        unlocked : false
    },

    gas:{
        id : 'gas',
        name: 'Gas',
        url: gas,
        parents: ['wind', 'wind'],
        unlocked : false
    },

    grassland:{
        id : 'grassland',
        name: 'Grassland',
        url: grassland,
        parents: ['matter', 'earth'],
        unlocked : false
    },

    hill:{
        id : 'hill',
        name: 'Hill',
        url: hill,
        parents: ['Mountain', 'Grassland'],
        unlocked : false
    },

    hot:{
        id : 'hot',
        name: 'Hot',
        url: hot,
        parents: ['fire', 'fire'],
        unlocked : false
    },

    house:{
        id : 'house',
        name: 'House',
        url: house,
        parents: ['Masonry', 'Shelter'],
        unlocked : false
    },

    ice:{
        id : 'ice',
        name: 'Ice',
        url: ice,
        parents: ['cold', 'water'],
        unlocked : false
    },

    iceberg:{
        id : 'iceberg',
        name: 'Iceberg',
        url: iceberg,
        parents: ['rock', 'ice'],
        unlocked : false
    },

    lava:{
        id : 'lava',
        name: 'Lava',
        url: lava,
        parents: ['rock', 'fire'],
        unlocked : false
    },

    life:{
        id : 'life',
        name: 'Life',
        url: life,
        parents: ['energy', 'matter'],
        unlocked : false
    },

    lightning:{
        id : 'lightning',
        name: 'Lightning',
        url: lightning,
        parents: ['Cloud', 'Hot'],
        unlocked : false
    },

    livestock:{
        id : 'livestock',
        name: 'Livestock',
        url: livestock,
        parents: ['Animals', 'Grasslands'],
        unlocked : false
    },

    magic:{
        id : 'magic',
        name: 'Magic',
        url: magic,
        parents: ['dust', 'matter'],
        unlocked : false
    },

    mankind:{
        id : 'mankind',
        name: 'Mankind',
        url: mankind,
        parents: ['Animals', 'Magic'],
        unlocked : false
    },

    masonry:{
        id : 'masonry',
        name: 'Masonry',
        url: masonry,
        parents: ['Tools', 'Clay'],
        unlocked : false
    },

    matter:{
        id : 'matter',
        name: 'Matter',
        url: matter,
        parents: ['earth', 'water'],
        unlocked : false
    },

    metal:{
        id : 'metal',
        name: 'Metal',
        url: metal,
        parents: ['rock', 'matter'],
        unlocked : false
    },

    meteor:{
        id : 'meteor',
        name: 'Meteor',
        url: meteor,
        parents: ['Star', 'Rock'],
        unlocked : false
    },

    mountain:{
        id : 'mountain',
        name: 'Mountain',
        url: mountain,
        parents: ['rock', 'earth'],
        unlocked : false
    },

    obsidian:{
        id : 'obsidian',
        name: 'Obsidian',
        url: obsidian,
        parents: ['Lava', 'Water'],
        unlocked : false
    },

    oil:{
        id : 'oil',
        name: 'Oil',
        url: oil,
        parents: ['gas', 'energy'],
        unlocked : false
    },

    penguin:{
        id : 'penguin',
        name: 'Penguin',
        url: penguin,
        parents: ['Animals', 'Snow'],
        unlocked : false
    },

    pets:{
        id : 'pets',
        name: 'Pets',
        url: pets,
        parents: ['Animals', 'Domestication'],
        unlocked : false
    },

    plants:{
        id : 'plants',
        name: 'Plants',
        url: plants,
        parents: ['Life', 'Earth'],
        unlocked : false
    },

    pottery:{
        id : 'pottery',
        name: 'Pottery',
        url: pottery,
        parents: ['Mankind', 'Clay'],
        unlocked : false
    },

    power:{
        id : 'power',
        name: 'Power',
        url: power,
        parents: ['energy', 'steam'],
        unlocked : false
    },

    rain:{
        id : 'rain',
        name: 'Rain',
        url: rain,
        parents: ['cloud', 'water'],
        unlocked : false
    },

    river:{
        id : 'river',
        name: 'River',
        url: river,
        parents: ['Sea', 'Earth'],
        unlocked : false
    },
    
    rock:{
        id : 'rock',
        name: 'Rock',
        url: rock,
        parents: ['earth', 'earth'],
        unlocked : false
    },

    sand:{
        id : 'sand',
        name: 'Sand',
        url: sand,
        parents: ['earth', 'wind'],
        unlocked : false
    },

    sea:{
        id : 'sea',
        name: 'Sea',
        url: sea,
        parents: ['matter', 'water'],
        unlocked : false
    },

    shelter:{
        id : 'shelter',
        name: 'Shelter',
        url: shelter,
        parents: ['Tools', 'Wood'],
        unlocked : false
    },

    snow:{
        id : 'snow',
        name: 'Snow',
        url: snow,
        parents: ['Cloud', 'Cold'],
        unlocked : false
    },

    star:{
        id : 'star',
        name: 'Star',
        url: star,
        parents: ['gas', 'matter'],
        unlocked : false
    },

    steam:{
        id : 'steam',
        name: 'Steam',
        url: steam,
        parents: ['fire, water'],
        unlocked : false
    },

    sulfur:{
        id : 'sulfur',
        name: 'Sulfur',
        url: sulfur,
        parents: ['gas', 'fire'],
        unlocked : false
    },

    sun:{
        id : 'sun',
        name: 'Sun',
        url: sun,
        parents: ['Star', 'Hot'],
        unlocked : false
    },

    tools:{
        id : 'tools',
        name: 'Tools',
        url: tools,
        parents: ['Mankind', 'Tree'],
        unlocked : false
    },

    tree:{
        id : 'tree',
        name: 'Tree',
        url: tree,
        parents: ['Plants', 'Matter'],
        unlocked : false
    },

    tribe:{
        id : 'tribe',
        name: 'Tribe',
        url: tribe,
        parents: ['Mankind', 'Mankind'],
        unlocked : false
    },
    
    tundra:{
        id : 'tundra',
        name: 'Tundra',
        url: tundra,
        parents: ['Grassland', 'Cold'],
        unlocked : false
    },

    volcano:{
        id : 'volcano',
        name: 'Volcano',
        url: volcano,
        parents: ['Mountain', 'Lava'],
        unlocked : false
    },

    water: {
        id : 'water',
        name: 'Water',
        url: water,
        unlocked : true
    },

    wetland:{
        id : 'wetland',
        name: 'Wetland',
        url: wetland,
        parents: ['Sea', 'Grassland'],
        unlocked : false
    },

    wind: {
        id : 'wind',
        name: 'Wind',
        url: wind,
        unlocked : true
    },

    wood:{
        id : 'wood',
        name: 'Wood',
        url: wood,
        parents: ['Mankind', 'Tree'],
        unlocked : false
    },

}   

