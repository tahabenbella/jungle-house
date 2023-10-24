import CareScale from './CareScale'
import '../styles/PlantItem.css';


function handleClick(plantName) {
	alert(`You want to buy 1 ${plantName}? Great choice 🌱✨`)
}


function PlantItem({name,cover,id,light,water}) {
    return (
    <div>
        
            <li key={id} className='jh-plant-item' onClick={() => handleClick(name)}>
                <img className='jh-plant-item-cover' src={cover} alt={`${name} cover`} />
                {name}
                <div > 
                    <CareScale careType='water' scaleValue={water} />
                    <CareScale careType='light' scaleValue={light} />
                </div>
               
            </li>
        
        
    </div>)
}

export default PlantItem